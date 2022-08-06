import React from 'react';
import classnames from 'classnames';


/**
 * returns the list of movable tile's indices
 * (left, right, up, down of current empty tile)
 * @param {Array<number>} configuration  current tile configuration
 * @returns {Array<number>}              the list of movable tile's indices
 */
function getMoveableTiles(configuration) {

  // get empty tile's index
  const zeroIndex = configuration.indexOf(0);

  // moveable tile candidates
  const left = zeroIndex - 1;
  const right = zeroIndex + 1;
  const up = zeroIndex - 4;
  const down = zeroIndex + 4;

  // get actually moveable directions
  const tiles = [];
  if (configuration.includes(left) && left % 4 < 3) tiles.push(left);
  if (configuration.includes(right) && right % 4 > 0) tiles.push(right);
  if (configuration.includes(up)) tiles.push(up);
  if (configuration.includes(down)) tiles.push(down);

  // return all moveable directions
  return tiles;
}


/**
 * returns current tile configuration is the correct answer
 * @param {Array<number>} configuration   current tile configuration
 * @returns {boolean}                     is this correct answer?
 */
function isSolved(configuration) {
  return configuration.reduce((accumulated, current, index) => accumulated && ((index + 1) % 16 === current), true);
}


// the exported component can be either a function or a class

export default function Board({ initialConfiguration, onSolveCallback }) {


  // React Component State
  const [configuration, setConfiguration] = React.useState(initialConfiguration);
  const [moveableTiles, setMoveableTiles] = React.useState(getMoveableTiles(initialConfiguration));


  /**
   * When Click a Tile, switching two tiles.
   *   - the tile
   *   - empty tile
   * @param {number} value   Tile number
   * @returns {undefined}.   void function
   */
  const onTileClick = React.useCallback((value, index) => {

    // if clicked not moveable tile, do not switch them
    if (!moveableTiles.includes(index))
      return;

    // switch two tiles
    setConfiguration((prev) => prev.map(function (tileNumber, index) {
      switch (tileNumber) {
        case value:
          return 0;
        case 0:
          return value;
        default:
          return tileNumber;
      }
    }));
  }, [moveableTiles]);


  // onChange configuration
  React.useEffect(() => {

    // update moveable tiles
    setMoveableTiles(getMoveableTiles(configuration));

    // if problem has been solved, call callback function
    if (isSolved(configuration))
      onSolveCallback();
  }, [configuration, onSolveCallback]);


  // component structure
  return (
    <div className="board">
      {configuration.map((value, index) => (
        <div key={index}
             className={value > 0 ? "tile" : "empty"}
             onClick={() => onTileClick(value, index)}
        >
          {value > 0 && value}
        </div>
      ))}
    </div>
  );
}
