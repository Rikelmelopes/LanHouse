import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";

import Provedore from "App/Models/Provedore";

export default class extends BaseSeeder {
  public async run() {
    await Provedore.createMany([
      {
        cnpj: "00.360.305/0001-04",
        nome: "DIGITECH TELECOM",
      },
    ]);
    // Write your database queries inside the run method
  }
}
