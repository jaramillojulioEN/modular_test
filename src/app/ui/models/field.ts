export interface field {
    nombre: string;
    tipo: fieldtype.text | fieldtype.numeric |fieldtype.mail | fieldtype.password;
    label: string;
    valorInicial?: any;
    validaciones?: any[];
  }

export enum fieldtype
{
    text = 'text',
    numeric = 'number',
    mail = 'email',
    password = 'password'
}
  