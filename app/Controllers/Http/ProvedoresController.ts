// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Provedore from "App/Models/Provedore";

export default class ProvedoresController {
  async index() {
    return await Provedore.query();
  }

  async store({ request }) {
    const dados = await request.only(["cnpj", "nome"]);
    return await Provedore.create(dados);
  }

  async show({ request }) {
    const id = await request.param("id");
    return await Provedore.findOrFail(id);
  }

  async destroy({ request }) {
    const id = request.param("id");
    const provedore = await Provedore.findOrFail(id);
    return provedore.delete();
  }

  async update({ request }) {
    const id = await request.param("id");
    const provedore = await Provedore.findOrFail(id);

    const dados = await request.only(["cnpj", "nome"]);

    provedore.merge(dados).save();

    return provedore;
  }
}
