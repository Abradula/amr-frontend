import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { ReactiveFormsModule, FormGroup, FormControl, FormArray } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-amu',
  imports: [ReactiveFormsModule, CommonModule],
  standalone: true,
  templateUrl: './amu.component.html',
  styleUrl: './amu.component.scss',
})
export class AmuComponent {
  form: FormGroup;
  facilities: any[] = [];

  constructor(private apiService: ApiService) {
    this.form = new FormGroup({
      facilityId: new FormControl(''),
      drugName: new FormControl(''),
      quantity: new FormControl(''),
      reportDate: new FormControl(''),
      reason: new FormControl(''),
    });
  }

  ngOnInit() {
    this.loadFacilities();
  }

  loadFacilities() {
    this.apiService.getFacilities().subscribe({
      next: (res) => {
        this.facilities = res as any[];
      },
      error: (err) => {
        console.error('Error fetching facilities:', err);
      }
    });
  }

  submit() {

    const payload = {
      drug_name: this.form.value.drugName,
      facility_id: this.form.value.facilityId,
      quantity: this.form.value.quantity,
      report_date: this.form.value.reportDate,
      reason: this.form.value.reason
    };

    this.apiService.sendAmu(payload).subscribe({
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
