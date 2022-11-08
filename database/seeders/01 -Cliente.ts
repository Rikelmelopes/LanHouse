import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";

import Cliente from "App/Models/Cliente";

export default class extends BaseSeeder {
  public async run() {
    await Cliente.createMany([
      {
        cpf: "08113596119",
        telefone: "5561981760878",
        nome: "Rikelme lopes de lima",
        endereco: "Rua 12 Cj C lote 12 Novo Horizonte",
        dataNascimento: new Date(2001, 7, 7),
        email: "Rikelme@gmail.com",
      },
    ]);
    // Write your database queries inside the run method
  }
}
