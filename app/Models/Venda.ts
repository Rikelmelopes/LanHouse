import { DateTime } from "luxon";
import {
  BaseModel,
  BelongsTo,
  belongsTo,
  column,
  HasMany,
  hasMany,
} from "@ioc:Adonis/Lucid/Orm";
import Cliente from "./Cliente";
import Computadore from "./Computadore";
import Funcionario from "./Funcionario";

export default class Venda extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public clienteId: number;

  @column()
  public funcionarioId: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Cliente)
  public cliente: BelongsTo<typeof Cliente>;

  @hasMany(() => Computadore)
  public computadores: HasMany<typeof Computadore>;

  @belongsTo(() => Funcionario)
  public funcionario: BelongsTo<typeof Funcionario>;
}
