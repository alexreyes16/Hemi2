import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {
private ciudad:Ciudad[]=[
  {Nombre:"Quito"},
  {Nombre:"Guayaquil"},
  {Nombre:"Cuenca"},
  {Nombre:"Manta"},
  {Nombre:"Ambato"},
  {Nombre:"Loja"},
  {Nombre:"Portoviejo"},
  {Nombre:"Riobamba"},
  {Nombre:"Esmeraldas"},
  {Nombre:"Santo Domingo"},
  {Nombre:"Machala"},
  {Nombre:"Ibarra"},
  {Nombre:"Durán"},
  {Nombre:"Quevedo"},
  {Nombre:"Salinas"},
  {Nombre:"Latacunga"},
  {Nombre:"Eloy Alfaro"},
  {Nombre:"Sangolquí"},
  {Nombre:"Santa Elena"},
  {Nombre:"Tulcán"}
]
getCiudad(){
  return this.ciudad;
}
}
export interface Ciudad{
  Nombre:string
}
