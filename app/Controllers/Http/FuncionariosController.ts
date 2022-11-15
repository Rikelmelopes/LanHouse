// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Funcionario from "App/Models/Funcionario";
import FuncionariosUpdateValidator from "App/Validators/FuncionariosUpdateValidator";
import FuncionarioValidator from "App/Validators/FuncionarioValidator";

export default class FuncionariosController {
  async index() {
    return Funcionario.query().preload("vendas");
  }

  async store({ request }) {
    const dados = await request.validate(FuncionarioValidator);
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

    const dados = await request.validate(FuncionariosUpdateValidator);

    funcionario.merge(dados).save();

    return funcionario;
  }
}
