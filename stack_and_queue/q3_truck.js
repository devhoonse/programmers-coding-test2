function solution(bridge_length, weight, truck_weights) {

  // 다리를 건너야 할 전체 트럭들의 댓수를 확인합니다.
  const numberOfTrucks = truck_weights.length;

  // 도착한 트럭들을 기록할 배열입니다.
  const arrivedTrucks = [];

  // 다리 길이만큼의 길이를 갖는 0 으로 채워진 배열을 생성합니다.
  const onBridge = Array(bridge_length).fill(0);

  // 시간을 1 초씩 흘리며 시뮬레이션을 실행합니다. 모든 트럭이 다리를 건너 목적지에 도착할 때까지 반복합니다.
  let seconds = 0;
  while (arrivedTrucks.length < numberOfTrucks) {
    tick();
  }

  // 트럭이 모두 다리를 건너기까지 걸린 시간을 반환합니다.
  return seconds;

  /*
  * 매 초마다 실행할 시뮬레이션의 시나리오입니다.
  * */
  function tick() {

    // 도착 가능한 트럭이 있으면 도착 처리를 합니다.
    const arrivedTruck = arriveTruck();
    if (arrivedTruck > 0)
      arrivedTrucks.push(arrivedTruck)

    // 트럭을 출발시켜도 되는 상황이면, 트럭을 출발시킵니다.
    if (isLaunchable())
      launchNextTruck();

    // 시간을 1 초 증가시킵니다.
    seconds++;
  }

  /*
  * 다음 트럭의 출발 가능 여부를 확인합니다.
  * */
  function isLaunchable() {
    const frontCar = getFrontCar();                   // 앞 차를 확인합니다.
    const thereIsNoFrontCar = frontCar === 0;         // 앞 차가 없는지 여부입니다.
    const isBridgeEndurable = weight - getCurrentBridgeWeight() >= getNextTruck(); // 다음 트럭이 출발해도 될 정도의 하중 여유가 있는지 여부입니다.
    return thereIsNoFrontCar && isBridgeEndurable;    // 다음 트럭의 출발 가능 여부를 반환합니다.
  }

  /*
  * 다음 도착 예정인 트럭의 정보를 반환합니다. 0 일 경우, 현재 시간에 들어올 트럭이 없다는 의미입니다.
  * */
  function arriveTruck() {
    onBridge.push(0);         // 다리의 맨 뒤 지점에는 아무 차도 없습니다.
    return onBridge.shift();  // 다리의 맨 앞 지점을 지나는 차의 정보를 반환합니다.
  }

  /*
  * 앞 차가 있는지 확인합니다. 0 일 경우, 현재 시간에 앞 차가 없다는 의미입니다.
  * */
  function getFrontCar() {
    return onBridge.slice(-1)[0];
  }

  /*
  * 현재 다리를 지나고 있는 트럭들의 중량 총합을 확인합니다.
  * */
  function getCurrentBridgeWeight() {
    return onBridge.reduce((acc, cum) => acc + cum, 0);
  }

  /*
  * 다음 출발할 트럭의 정보를 확인합니다.
  * */
  function getNextTruck() {
    return truck_weights[0];
  }

  /*
  * 트럭을 한 대 출발시킵니다.
  * */
  function launchNextTruck() {
    onBridge[onBridge.length - 1] = truck_weights.shift();
  }
}


console.log(solution(	2, 10, [7, 4, 5, 6]));
console.log(solution(100, 100, [10]));
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));
