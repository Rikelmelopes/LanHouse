import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Venda extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public clienteId: number;

  @column()
  public funcionarioId: number;

  @column()
  public computadorId: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
