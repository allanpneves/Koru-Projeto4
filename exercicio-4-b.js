// exercicio-4-b. Usar some para verificar se existe alguma tarefa de baixa prioridade completa

const hasLowPriorityCompleted = tasks.some(
  task => task.priority === "baixa" && task.completed
);
console.log("\nb. Existe tarefa de baixa prioridade completa:", hasLowPriorityCompleted);