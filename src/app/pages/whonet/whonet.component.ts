import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-whonet',
  imports: [ReactiveFormsModule, CommonModule],
  standalone: true,
  templateUrl: './whonet.component.html',
  styleUrl: './whonet.component.scss'
})
export class WhonetComponent {
  form: FormGroup;
  selectedFile!: File;

  constructor(private apiService: ApiService) {
    this.form = new FormGroup({
      uploadFile: new FormControl('')
    });
  }

  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
  }

  submit() {

    const formdata = new FormData();
    formdata.append('upload_file', this.selectedFile);

    this.apiService.sendWhonet(formdata).subscribe({
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
          text: 'Failed to send data!',
          confirmButtonColor: '#0d6efd'
        });
      }
    });
  }
}
