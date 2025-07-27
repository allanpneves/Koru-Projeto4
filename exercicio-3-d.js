// exercicio-3-d. Nomes dos estudantes com média > 85

const topStudentsNames = students
  .filter(student => {
    const avg = student.grades.reduce((sum, g) => sum + g, 0) / student.grades.length;
    return avg > 85;
  })
  .map(student => student.name);

console.log("\nd. Nomes dos estudantes com média acima de 85:");
console.log(topStudentsNames);