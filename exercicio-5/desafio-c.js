//c. Filtrar produtos da categoria "Eletrônicos" com preço < 1000

const eletronicosAbaixoDe1000 = inventory.filter(produto => 
    produto.category === "Eletrônicos" && produto.price < 1000
);

console.log(eletronicosAbaixoDe1000);
