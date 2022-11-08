import { DateTime } from "luxon";
import { BaseModel, column, HasMany, hasMany } from "@ioc:Adonis/Lucid/Orm";
import Venda from "./Venda";

export default class Cliente extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public cpf: string;

  @column()
  public telefone: string;

  @column()
  public nome: string;

  @column()
  public endereco: string;

  @column()
  public dataNascimento: Date;

  @column()
  public email: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @hasMany(() => Venda)
  public compras: HasMany<typeof Venda>;
}
