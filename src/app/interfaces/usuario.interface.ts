export interface Usuario{
  nickname : string;
  nombre : string;
  email : string;
  sexo : string;
  localidad : string;
  socialId : string;
  imagen : string;
  puntuacion : number;
  descripcion?:string;
  fecha_nacimiento?:string;
  contrasenya:string;
  key?:string;
}
