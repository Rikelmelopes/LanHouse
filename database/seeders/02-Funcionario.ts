import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";

import Funcionario from "App/Models/Funcionario";

export default class extends BaseSeeder {
  public async run() {
    await Funcionario.createMany([
      {
        cpf: "081.135.961-17",
        salario: 2500,
        nome: "Diogo",
        telefone: "(55)61984654655",
        endereco: "QNO 7 Conjunto F",
        email: "diogo@gmail.com",
        dataNascimento: new Date(1995, 8, 6),
      },
    ]);
    // Write your database queries inside the run method
  }
}
