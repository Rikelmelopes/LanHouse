// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Funcionario from "App/Models/Funcionario";

export default class FuncionariosController {
  index() {
    return Funcionario.all();
  }

  store({ request }) {
    const dados = request.only([
      "cpf",
      "nome",
      "telefone",
      "endereco",
      "email",
      "dataNascimeto",
    ]);
    return Funcionario.create(dados);
  }

  show({ request }) {
    const id = request.param("id");
    return Funcionario.findOrFail(id);
  }

  async destroy({ request }) {
    const id = request.param("id");
    const funcionario = await Funcionario.findOrFail(id);
    return funcionario.delete();
  }

  async update({ request }) {
    const id = request.param("id");
    const funcionario = await Funcionario.findOrFail(id);

    const dados = request.only([
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
