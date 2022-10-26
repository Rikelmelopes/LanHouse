// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Computadore from "App/Models/Computadore";

export default class ComputadoresController {
  index() {
    return Computadore.all();
  }

  store({ request }) {
    const dados = request.only([
      "preco",
      "processador",
      "placaVideo",
      "placaMae",
      "gabinete",
      "fonte",
      "memoriaRam",
    ]);
    return Computadore.create(dados);
  }

  show({ request }) {
    const id = request.param("id");
    return Computadore.findOrFail(id);
  }

  async destroy({ request }) {
    const id = request.param("id");
    const computadore = await Computadore.findOrFail(id);
    return computadore.delete();
  }

  async update({ request }) {
    const id = request.param("id");
    const computadore = await Computadore.findOrFail(id);

    const dados = request.only([
      "preco",
      "processador",
      "placaVideo",
      "placaMae",
      "gabinete",
      "fonte",
      "memoriaRam",
    ]);

    computadore.merge(dados).save();

    return computadore;
  }
}
