import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Computadore from "App/Models/Computadore";

export default class extends BaseSeeder {
  public async run() {
    await Computadore.createMany([
      {
        preco: 2500.0,
        processador: "I7",
        placaVideo: "GTX 1050",
        placaMae: "AsRock X670E",
        gabinete: "RedDragon",
        fonte: "Px850 V",
        memoriaRam: "8Gb",
      },
    ]);
    // Write your database queries inside the run method
  }
}
