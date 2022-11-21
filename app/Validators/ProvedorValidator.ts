import { schema, CustomMessages, rules } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class ProvedorValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({
    cnpj: schema.string([
      rules.maxLength(18),
      rules.unique({ table: "provedores", column: "cnpj" }),
      rules.regex(/^[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2}$/),
    ]),
    nome: schema.string([
      rules.alpha({ allow: ["space"] }),
      rules.unique({ table: "provedores", column: "cnpj" }),
    ]),
  });

  public messages: CustomMessages = {
    unique: "{{ field }} já cadastrado",
    maxLength:
      "o número máximo de caractéres do campo {{ field }} é de {{ options.maxLength }}",
  };
}
