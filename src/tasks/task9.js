const arr = [
  { name: 'Alice', attendance: [true, true, false, true] },
  { name: 'Bob', attendance: [true, true, true, true] },
  { name: 'Carol', attendance: [false, false, true, false] },
];

const checkSkippingClasses = (student) => {
  return student.attendance.some((attendance) => attendance === false);
};

const checkEverybodySkipClasses = (students) => {
  return students.every(checkSkippingClasses);
};

const checkAnyOneAttendedAllClasses = (students) => {
  return !checkEverybodySkipClasses(students);
};

const categories = checkEverybodySkipClasses(arr);
console.log('Every student skipped classes: ' + checkEverybodySkipClasses(arr));
console.log(
  'Any student attended all the classes: ' + checkAnyOneAttendedAllClasses(arr),
);
