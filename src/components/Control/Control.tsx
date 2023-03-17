import { IElevator } from "../Elevator/Elevator";
import { ICall } from "../Buttons/Button";

// eitan environment
export const runFunction = () => {
  setInterval(() => {
    orderElevator(getRandomFloor());
  }, 100);
};
// eitan
function getRandomFloor() {
  return Math.floor(Math.random() * 10);
}

const floorsFreeElevators: IElevator[][] = [
  [{ floor: 0 }, { floor: 0 }, { floor: 0 }, { floor: 0 }],
  [{ floor: 1 }],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
];

const floorCallsButtonStatus: string[] = [];
const callsQueue: ICall[] = [];
let isActivateCallFunWorking = false;

function activateCallQueue() {
  // check if there is calls in the calls queue
  const call = callsQueue[0];
  isActivateCallFunWorking = true;
  if (!call) {
    isActivateCallFunWorking = false;
    return;
  }

  const elv = getFreeElevator(call.floor);

  // console.log({elv});

  if (!elv) {
    isActivateCallFunWorking = false;
    return;
  }

  // and move them to moveElevator
  let d = callsQueue.shift();
  console.log({ d, callsQueue });

  moveElevator(elv, call);
  // call activateCallQueue until callsQueue empty or no elevators
  activateCallQueue();
}

// on click
export function orderElevator(floor: number) {
  // console.log({floor});

  const call = {
    floor,
    orderTime: Date.now(),
  };
  callsQueue.push(call);
  // console.log({callsQueue});

  if (!isActivateCallFunWorking) {
    activateCallQueue();
  }
}

function sleep(ms: number | undefined) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function moveElevator(elevator: IElevator, call: ICall) {
  const callFloor = call.floor;
  let elevatorFloor = elevator.floor;
  const direction = callFloor - elevatorFloor > 0 ? 1 : -1;
  // while loop moving floors every 0.5 sec
  while (elevatorFloor !== callFloor) {
    // console.log({direction, callFloor, elevatorFloor});
    await sleep(400);
    // call state update floor of elevator
    elevatorFloor = elevatorFloor + direction;
  }

  floorsFreeElevators[callFloor].push(elevator);
  // move elevator to  floorsFreeElevators

  // call activate callQueue

  if (!isActivateCallFunWorking) {
    activateCallQueue();
  }
}

function getFreeElevator(floor: number) {
  let oneUp = floor < 9 ? floor + 1 : null;
  let oneDown = floor > 0 ? floor - 1 : null;

  // check if floorsFreeElevators have nearby free elevator and return if any

  while (oneUp || oneDown) {
    if (oneUp) {
      if (floorsFreeElevators[oneUp]?.length) {
        return floorsFreeElevators[oneUp].pop();
      }

      if (oneUp < 9) {
        oneUp++;
      }
    }
    if (oneDown) {
      if (floorsFreeElevators[oneDown]?.length) {
        return floorsFreeElevators[oneDown]?.pop();
      }

      if (oneDown > 0) {
        oneDown--;
      }
    }
  }
  return null;
}
