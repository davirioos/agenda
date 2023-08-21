const Contato = require('../models/ContatoModel')

exports.index = async (req, res) => {
  const contatos = await Contato.buscarContato()
  res.render('index', { contatos })
}
