// Lista de produtos
const produtos = [
  { nome: "Notebook", categoria: "Eletrônicos" },
  { nome: "Camiseta", categoria: "Vestuário" },
  { nome: "Café", categoria: "Alimentos" }
];

// Usando map para formatar os produtos
const produtosFormatados = produtos.map(produto => {
  return `${produto.nome} - ${produto.categoria}`;
});

// Exibindo o resultado
console.log(produtosFormatados);
