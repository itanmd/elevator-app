
'button clicked on floor 3'

const elevator1 = {
    floor: 1
}

const elevator2 = {
    floor: 4
}

const elevator3 = {
    floor: 7
}

const availableElevators = [elevator1, elevator2, elevator3];
const occupiedElevators = [];

const closestElevator = availableElevators[0]; //elevator1 //elevator2
const floorToReach = 3;
const closestDistance = abs(closestElevator.floor - floorToReach) // 1 - 3 = -2 = 2 // 1

for (const i = 1; i <= availableElevators.length; i++) {
    const distance = abs(availableElevators[i].floor - floorToReach); // 4 - 3 = 1
    if (distance < closestDistance) {
        closestDistance = distance;
        closestElevator = availableElevators[i];
    }
}