import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-whonet',
  imports: [ReactiveFormsModule, CommonModule],
  standalone: true,
  templateUrl: './whonet.component.html',
  styleUrl: './whonet.component.scss'
})
export class WhonetComponent {
  form: FormGroup;
  result: any;

  constructor() {
    this.form = new FormGroup({
      sampleName: new FormControl(''),  // form control name
      sampleDate: new FormControl('')
    });
  }

  submit() {
    console.log(this.form.value);
  }
}
