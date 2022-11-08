// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Computadore from "App/Models/Computadore";

export default class ComputadoresController {
  async index() {
    return Computadore.query().preload("marca").preload("venda");
  }

  async store({ request }) {
    const dados = await request.only([
      "preco",
      "processador",
      "placaVideo",
      "placaMae",
      "gabinete",
      "fonte",
      "memoriaRam",
    ]);
    return await Computadore.create(dados);
  }

  async show({ request }) {
    const id = await request.param("id");
    return await Computadore.findOrFail(id);
  }

  async destroy({ request }) {
    const id = await request.param("id");
    const computadore = await Computadore.findOrFail(id);
    return computadore.delete();
  }

  async update({ request }) {
    const id = await request.param("id");
    const computadore = await Computadore.findOrFail(id);

    const dados = await request.only([
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
