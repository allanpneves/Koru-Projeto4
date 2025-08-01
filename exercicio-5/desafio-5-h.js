function buscarProdutos(produtos, termo) {
  // Deixa o termo em minúsculas para buscar ignorando case
  const termoMinusculo = termo.toLowerCase();

  // Filtra produtos cujo nome contenha o termo
  return produtos.filter(produto => 
    produto.nome.toLowerCase().includes(termoMinusculo)
  );
}

// Exemplo de uso:
const produtos = [
  { id: 1, nome: "Camiseta azul", preco: 29.99 },
  { id: 2, nome: "Calça jeans", preco: 89.99 },
  { id: 3, nome: "Tênis esportivo", preco: 129.99 },
  { id: 4, nome: "Camisa branca", preco: 39.99 }
];

const resultado = buscarProdutos(produtos, "cam");

console.log(resultado);