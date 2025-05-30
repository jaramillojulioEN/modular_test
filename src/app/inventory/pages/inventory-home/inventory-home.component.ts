import { Component, OnInit } from '@angular/core';
import { field, fieldtype } from '../../../ui/models/field';
import { DynamicFormComponent } from '../../../ui/components/dynamic-form/dynamic-form.component';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  standalone : true,
  selector: 'app-inventory-home',
  imports: [
    DynamicFormComponent
  ],
  templateUrl: './inventory-home.component.html',
  styleUrl: './inventory-home.component.scss'
})
export class InventoryHomeComponent implements OnInit
{
  contactform: field[] = [
    { nombre: 'nombre', tipo: fieldtype.text, label: 'Nombre', valorInicial: '', validaciones: [] },
    { nombre: 'edad', tipo: fieldtype.numeric, label: 'Edad', valorInicial: 18 },
    { nombre: 'correo', tipo: fieldtype.mail, label: 'Correo Electrónico' }
  ];
  form: FormGroup;

  constructor(private fb : FormBuilder){
    this.form = this.fb.group({})
  }


  ngOnInit(): void {
      
  }

  hide(){
    this.form.get('correo')?.disable();
  }

}
