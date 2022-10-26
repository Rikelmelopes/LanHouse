// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Provedore from "App/Models/Provedore";

export default class ProvedoresController {
  index() {
    return Provedore.all();
  }

  store({ request }) {
    const dados = request.only(["cnpj", "nome"]);
    return Provedore.create(dados);
  }

  show({ request }) {
    const id = request.param("id");
    return Provedore.findOrFail(id);
  }

  async destroy({ request }) {
    const id = request.param("id");
    const provedore = await Provedore.findOrFail(id);
    return provedore.delete();
  }

  async update({ request }) {
    const id = request.param("id");
    const provedore = await Provedore.findOrFail(id);

    const dados = request.only(["cnpj", "nome"]);

    provedore.merge(dados).save();

    return provedore;
  }
}
