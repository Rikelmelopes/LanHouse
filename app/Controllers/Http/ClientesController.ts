// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Cliente from "App/Models/Cliente";

export default class ClientesController {
  async index() {
    return Cliente.query().preload("compras");
  }

  async store({ request }) {
    const dados = await request.only([
      "cpf",
      "telefone",
      "nome",
      "endereco",
      "dataNascimento",
      "email",
    ]);
    return Cliente.create(dados);
  }

  async show({ request }) {
    const id = await request.param("id");
    return Cliente.findOrFail(id);
  }

  async destroy({ request }) {
    const id = await request.param("id");
    const cliente = await Cliente.findOrFail(id);
    return cliente.delete();
  }

  async update({ request }) {
    const id = await request.param("id");
    const cliente = await Cliente.findOrFail(id);

    const dados = await request.only([
      "cpf",
      "telefone",
      "nome",
      "endereco",
      "dataNascimento",
      "email",
    ]);

    cliente.merge(dados).save();

    return cliente;
  }
}
