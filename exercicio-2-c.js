//Use map para criar um array com os preços de todos os produtos com impostos (15% a mais)

const pricesWithTax = products.map((product) => {
  return (product.price * 1.15).toFixed(2); 
});

console.log("\nPreços com 15% de imposto:", pricesWithTax);


