const checkGradeBigger4 = (grade) => {
  return grade > 4;
};

const checkStudentGradeBigger4 = (student) => {
  return student.grades.every(checkGradeBigger4);
};

const mapStudentToStudentName = (student) => {
  return student.name;
};

const doTask6 = (students) => {
  const bestStudents = students.filter(checkStudentGradeBigger4);
  let bestStudentsNames = bestStudents.map(mapStudentToStudentName);
  return bestStudentsNames;
};

console.log(
  doTask6([
    { name: 'Alice', grades: [3, 4, 5] },
    { name: 'Bob', grades: [5, 5, 5] },
    { name: 'Carol', grades: [2, 3, 4] },
    { name: 'Kris', grades: [11, 9, 7] },
  ]),
);
