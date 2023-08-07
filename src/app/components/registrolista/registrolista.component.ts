import { Component } from '@angular/core';
import { CiudadService,Ciudad } from 'src/app/service/ciudad.service';
interface Registro{
  cedula:string;
  nombre:string;
  fecha:string;
  ciudad:string;
}

@Component({
  selector: 'app-registrolista',
  templateUrl: './registrolista.component.html',
  styleUrls: ['./registrolista.component.css']
})
export class RegistrolistaComponent {
   ciu:Ciudad[]=[];
   verificar:number=0;
registro:Registro={
  cedula:"",
  nombre:"",
  fecha:"",
  ciudad:""
}
ngOnInit(): void {
  this.ciu=this.ciudad.getCiudad();
}
constructor(private ciudad:CiudadService){}
  submit(){
console.log(
"Datos de Registro\n"+this.registro.cedula+"\n"+this.registro.nombre+"\n"+this.registro.fecha+"\n"+this.registro.ciudad
);
alert(
  "Registro exitoso\n"+JSON.stringify(this.registro,null,4)
 );
this.verificar=10;
  }

}
