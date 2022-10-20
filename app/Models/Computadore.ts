import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Computadore extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public preco: number;

  @column()
  public processador: string;

  @column()
  public placaVideo: string;

  @column()
  public placaMae: string;

  @column()
  public gabinete: string;

  @column()
  public fonte: string;

  @column()
  public memoriaRam: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
