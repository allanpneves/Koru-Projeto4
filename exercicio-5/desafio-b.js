 //b. Filtrar produtos que estão em estoque (stock > 0)
 
 const produtosEmEstoque = inventory.filter(produto => produto.stock > 0);

console.log(produtosEmEstoque);
