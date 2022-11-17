import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";

import Funcionario from "App/Models/Funcionario";

export default class extends BaseSeeder {
  public async run() {
    await Funcionario.createMany([
      {
        cpf: "081.135.961-17",
        salario: 3000,
        nome: "Maciel",
        telefone: "5561995037587",
        endereco: "QNO 7 Conjunto F",
        email: "diogo@gmail.com",
        dataNascimento: new Date(1995, 8, 6),
      },
    ]);
    // Write your database queries inside the run method
  }
}
