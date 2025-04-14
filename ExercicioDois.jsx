// Organize os produtos de acordo com o apresentado em sala
// Mostre apenas os produtos que forem mais caros que R$ 1500

const produtos = [
    {
      id: 1,
      nome: "smartphone",
      preco: "R$ 2000",
      cores: ["#29d8d5", "#252a34", "#fc3766"],
    },
    {
      id: 2,
      nome: "notebook",
      preco: "R$ 3000",
      cores: ["#ffd045", "#d4394b", "#f37c59"],
    },
    {
      id: 3,
      nome: "tablet",
      preco: "R$ 1500",
      cores: ["#365069", "#47c1c8", "#f95786"],
    },
  ];
  
  const ExercicioDois = () => {
    const produtosFiltrados = produtos.filter((produto) => {
      const precoNumerico = Number(produto.preco.replace("R$ ", ""));
      return precoNumerico > 1500;
    });
  
    return (
      <div>
        <h2>Produtos mais caros que R$ 1500</h2>
        <ul>
          {produtosFiltrados.map((produto) => (
            <li key={produto.id}>
              <h3>{produto.nome}</h3>
              <p>Preço: {produto.preco}</p>
              <ul>
                {produto.cores.map((cor, index) => (
                  <li key={index} style={{ background: cor }}>
                    {cor}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ExercicioDois;