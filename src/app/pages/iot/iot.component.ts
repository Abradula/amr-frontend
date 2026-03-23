import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { ReactiveFormsModule, FormGroup, FormControl, FormArray } from '@angular/forms';
import Swal from 'sweetalert2';
import { text } from 'stream/consumers';

@Component({
  selector: 'app-iot',
  imports: [ReactiveFormsModule, CommonModule],
  standalone: true,
  templateUrl: './iot.component.html',
  styleUrl: './iot.component.scss'
})
export class IotComponent {
  form: FormGroup;

  constructor(private apiService: ApiService) {
    this.form = new FormGroup({
      sensorId: new FormControl(''),
      type: new FormControl(''),
      value: new FormControl('')
    });
  }

  submit() {
    const payload = {
      sensor_id: this.form.value.sensorId,
      type: this.form.value.type,
      value: this.form.value.value
    };

    this.apiService.sendIoT(payload).subscribe({
      next: (res) => {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Data saved successfully!',
          confirmButtonColor: '#0d6efd'
        });

        this.form.reset();
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to save data. Please try again.',
          confirmButtonColor: '#0d6efd'
        });
      }
    });
  }

}
