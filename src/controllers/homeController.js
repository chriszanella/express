function get (req, res) {
  res.render('home');
}

function post (req, res) {
  res.send(`Recebido o nome: ${req.body.nome}`);
}

const homeController = { get, post }
export default homeController;