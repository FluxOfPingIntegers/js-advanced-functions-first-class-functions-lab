// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = (drivers) => {
  return drivers.slice(-2);
};

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];

function createFareMultiplier(int) {
  return () => {
   return int * int;
  }
};

const fareDoubler = (int) => {
  let multiplied = createFareMultiplier(int);
  let answer = (multiplied() / int)
  return answer * 2;
}

function fareTripler(int) {
  return int * 3;
}

function selectDifferentDrivers(drivers, returnTheseDrivers) {
  return returnTheseDrivers(drivers);
}