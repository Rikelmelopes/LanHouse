// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Provedore from "App/Models/Provedore";
import ProvedorValidator from "App/Validators/ProvedorValidator";

export default class ProvedoresController {
  async index() {
    return await Provedore.query();
  }

  async store({ request }) {
    const dados = await request.validate(ProvedorValidator);
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

    const dados = await request.validate(ProvedorValidator);

    provedore.merge(dados).save();

    return provedore;
  }
}
