import { DateTime } from "luxon";
import { BaseModel, BelongsTo, belongsTo, column } from "@ioc:Adonis/Lucid/Orm";
import Venda from "./Venda";
import Marca from "./Marca";

export default class Computadore extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public vendaId: number;

  @column()
  public marcaId: number;

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

  @belongsTo(() => Venda)
  public venda: BelongsTo<typeof Venda>;

  @belongsTo(() => Marca)
  public marca: BelongsTo<typeof Marca>;
}
