// a. Usar findIndex para encontrar a posição da primeira tarefa incompleta
const firstIncompleteIndex = tasks.findIndex(task => !task.completed);
console.log("\na. Índice da primeira tarefa incompleta:", firstIncompleteIndex);