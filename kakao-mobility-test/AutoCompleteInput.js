import React from 'react';
import classnames from 'classnames';
// you should import `lodash` as a whole module   fixme: debounce 할때 쓸 수 있었구나...
import lodash from 'lodash';
import axios from 'axios';


const ITEMS_API_URL = 'https://example.com/api/items';
const DEBOUNCE_DELAY = 500;


// the exported component can be either a function or a class

export default function Autocomplete() {


  // React States
  const [q, setQ] = React.useState('');                 // user input state
  const [items, setItems] = React.useState([]);         // API response data state
  const [loading, setLoading] = React.useState(false);  // API loading state


  // onChange Input Text
  React.useEffect(() => {

    // applying DEBOUNCE_DELAY using Timeout Timer
    const timer = setTimeout(() => {

      // async function : useEffect can't use async function directly, so used inside the function
      (async () => {

        // if empty string, not to request API
        if (q.trim() === '') {
          setItems([]);
          return;
        }

        // request API
        try {
          // start loading
          setLoading(true);

          // request to API Server
          const response = await axios.get(ITEMS_API_URL, {
            params: { q }
          });

          // update the component's state
          setItems(response.data);

        } catch (error) {

          // when HTTP Request has been failed
          console.error('request to server has been failed');

        } finally {

          // end loading
          setLoading(false);
        }
      })();
    }, DEBOUNCE_DELAY);

    // component cleaner task (when unmounted) : clear Timeout Timer
    return () => {
      clearTimeout(timer);
    };
  }, [q]);


  /**
   * callback function on click each item
   * @param {string} item   the label of clicked item
   * @returns {undefined}   void function
   */
  const onSelectItem = (item) => {
    window.alert(`Selected : ${item}`);
  };


  // Component Structure
  return (
    <div className="wrapper">
      <div className={[
        "control",
        ...[loading && 'is-loading']
      ].join(" ")}
      >
        <input type="text"
               className="input"
               value={q}
               onChange={e => setQ(e.target.value)}
        />
      </div>
      {!loading && items.length > 0 && (
        <div className="list is-hoverable">
          {items.map((item, index) => (
            <a key={index} className="list-item" onClick={() => onSelectItem(item)}>{item}</a>
          ))}
        </div>
      )}
    </div>
  );
}
