const produtos = [
  { nome: "Notebook", preco: 3000 },
  { nome: "Camiseta", preco: 50 },
  { nome: "Café", preco: 20 }
];

// Calcula os preços com 15% de imposto usando .map()
const precosComImposto = produtos.map(produto => {
  const precoComImposto = produto.preco * 1.15;
  return precoComImposto.toFixed(2); // arredonda para 2 casas decimais
});

console.log(precosComImposto);
