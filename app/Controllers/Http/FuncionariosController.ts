// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Funcionario from "App/Models/Funcionario";

export default class FuncionariosController {
  async index() {
    return Funcionario.query().preload("vendas");
  }

  async store({ request }) {
    const dados = await request.only([
      "cpf",
      "nome",
      "telefone",
      "endereco",
      "email",
      "dataNascimeto",
    ]);
    return await Funcionario.create(dados);
  }

  async show({ request }) {
    const id = await request.param("id");
    return await Funcionario.findOrFail(id);
  }

  async destroy({ request }) {
    const id = await request.param("id");
    const funcionario = await Funcionario.findOrFail(id);
    return funcionario.delete();
  }

  async update({ request }) {
    const id = await request.param("id");
    const funcionario = await Funcionario.findOrFail(id);

    const dados = await request.only([
      "cpf",
      "salario",
      "nome",
      "telefone",
      "endereco",
      "email",
      "dataNascimeto",
    ]);

    funcionario.merge(dados).save();

    return funcionario;
  }
}
