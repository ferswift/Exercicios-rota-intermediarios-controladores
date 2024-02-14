const carros = require("../bancodedados"); // buscando carro no banco de dados

function listarCarros(req, res) {
  const { marca, cor } = req.query; // criando parametros de consulta

  let resultado = carros;

  if (marca) {
    resultado = resultado.filter((carro) => {
      return carro.marca === marca;
    });
  }

  if (cor) {
    resultado = resultado.filter((carro) => {
      return carro.cor === cor;
    });
  }

  res.send(resultado);
}

function obterCarro(req, res) {
  const { id } = req.params; // criando parametros

  const carroEncontrado = carros.find((carro) => {
    return carro.id === Number(id);
  });

  res.send(carroEncontrado);
}

module.exports = {
  // exportando os controladores que serão ultilizados.
  listarCarros,
  obterCarro,
};
