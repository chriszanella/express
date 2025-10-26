function get (req, res) {
  res.send(`<form action="/sobre" method="post">
        nome: <input type="text" name="nome">
        <button type="submit">Enviar</button>
    </form>`);
}
function post (req, res) {
  res.send(`Sobre: Recebido o nome: ${req.body.nome}`);
}

const sobreController = { get, post }
export default sobreController;