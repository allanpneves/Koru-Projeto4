// Exercício 3: filter e find

const students = [
  { id: 1, name: "João", age: 20, grades: [85, 90, 78], active: true },
  { id: 2, name: "Maria", age: 19, grades: [92, 95, 89], active: true },
  { id: 3, name: "Pedro", age: 21, grades: [70, 65, 80], active: false },
  { id: 4, name: "Ana", age: 18, grades: [60, 75, 68], active: true },
  { id: 5, name: "Carlos", age: 22, grades: [90, 88, 92], active: false },
];

// Desafio C - Usando filter para encontrar estudantes que tiraram pelo menos uma nota abaixo de 70
const filterStudentByGrade = students.filter((student) => {
    return student.grades.some((grade) => grade < 70);
})

console.log("\nEstudantes com pelo menos uma nota abaixo de 70:\n" + filterStudentByGrade.map(student => student.name).join(", "));