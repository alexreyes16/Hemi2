import { Component, OnInit } from '@angular/core';
import { CiudadService,Ciudad } from 'src/app/service/ciudad.service';
import {  FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactivos',
  templateUrl: './reactivos.component.html',
  styleUrls: ['./reactivos.component.css']
})
export class ReactivosComponent {
  ciudadess:Ciudad[]=[];
  verificar:number=0;
  regi!:FormGroup;
  ngOnInit(): void {
    this.ciudadess=this.ciudad.getCiudad();
    this.regi=this.fb.group({
      cedula:[''],
      nombre:[''],
      fecha:[''],
      ciudad:['']
    });
  }
  constructor(private ciudad:CiudadService,private fb:FormBuilder){}
  submit(){
    console.log("registro exitoso");
    this.verificar=10;
 alert(
   "Registro exitoso\n"+JSON.stringify(this.regi.value,null,4)
 );
  }
}
