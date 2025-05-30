import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { field, fieldtype } from '../../models/field';
import { CommonModule } from '@angular/common';

@Component({
  standalone : true,
  imports : [
    ReactiveFormsModule,
    CommonModule
  ],
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss',
})
export class DynamicFormComponent {

  @Input() fields: field[] = [];
  @Input()
  form!: FormGroup;

  
  constructor(private fb : FormBuilder){
    
  }


  ngOnInit(): void {
    for (const field of this.fields) {
      if(this.form != undefined){
        this.form.addControl(
          field.nombre,
          this.fb.control(field.valorInicial || '', field.validaciones || [])
        );
      }
      
    }
  }
}
