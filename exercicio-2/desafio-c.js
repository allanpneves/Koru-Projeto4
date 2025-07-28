//Combine forEach com um acumulador externo para calcular o valor total de todos os produtos


let total = 0;
products.forEach((product) => {
  total += product.price;
});

console.log("\nValor total de todos os produtos: R$" + total.toFixed(2));
