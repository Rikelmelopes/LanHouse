// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Venda from "App/Models/Venda";

export default class VendasController {
  async index() {
    return await Venda.query()
      .preload("cliente")
      .preload("funcionario")
      .preload("computadores");
  }

  async store({ request }) {
    const dados = await request.only([
      "clienteId",
      "funcionarioId",
      "computadorId",
    ]);
    return await Venda.create(dados);
  }

  async show({ request }) {
    const id = await request.param("id");
    return await Venda.findOrFail(id);
  }

  async destroy({ request }) {
    const id = await request.param("id");
    const venda = await Venda.findOrFail(id);
    return venda.delete();
  }

  async update({ request }) {
    const id = await request.param("id");
    const venda = await Venda.findOrFail(id);

    const dados = await request.only([
      "clienteId",
      "funcionarioId",
      "computadorId",
    ]);

    venda.merge(dados).save();

    return venda;
  }
}
