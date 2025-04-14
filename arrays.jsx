const Arrays = () => {
    const produtos = ['notebook', 'celular', 'tablet'];
  
    const empresas = [
      <li key="e1">Apple</li>,
      <li key="e2">Microsoft</li>,
    ];
  
    const filmes = [
      'piratas do caribe',
      'toy story',
      'titanic',
      'interestelar',
      'crepusculo',
    ];
  
    const livros = [
      { nome: 'Harry Potter e a pedra filosofal', ano: 1996 },
      { nome: 'Game of Thrones', ano: 1996 },
      { nome: '1984', ano: 1949 },
    ];
  
    return (
      <div>
        <h2>Empresas</h2>
        <ul>{empresas}</ul>
  
        <h2>Filmes</h2>
        <ul>
          {filmes.map((filme) => (
            <li key={filme}>{filme}</li>
          ))}
        </ul>
  
        <h2>Livros</h2>
        <ul>
          {livros.map((livro) => (
            <li key={livro.nome}>
              {livro.nome} - {livro.ano}
            </li>
          ))}
        </ul>
  
        <h2>Produtos</h2>
        <ul>
          {produtos.map((produto, index) => (
            <li key={index}>{produto}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Arrays;