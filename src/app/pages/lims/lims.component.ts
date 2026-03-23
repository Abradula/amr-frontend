import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { ReactiveFormsModule, FormGroup, FormControl, FormArray } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lims',
  templateUrl: './lims.component.html',
  styleUrls: ['./lims.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class LimsComponent {
  form: FormGroup;
  result: any;
  facilities: any[] = [];
  showResultForm = false;
  tempForm = new FormGroup({
    organism: new FormControl(''),
    antibiotic: new FormControl(''),
    resistance_level: new FormControl('')
  });

  constructor(private apiService: ApiService) {
    this.form = new FormGroup({
      sampleCode: new FormControl(''),
      facilityId: new FormControl(''),
      collectionType: new FormControl(''),
      collectionDate: new FormControl(''),
      results: new FormArray([])
    });
  }

  ngOnInit() {
    this.loadFacilities();
  }

  get results(): FormArray {
    return this.form.get('results') as FormArray;
  }

  openResultForm() {
    this.showResultForm = true;
  }

  closeResultForm() {
    this.showResultForm = false;
    this.tempForm.reset();
  }

  saveResult() {
    this.results.push(new FormGroup({
      organism: new FormControl(this.tempForm.value.organism),
      antibiotic: new FormControl(this.tempForm.value.antibiotic),
      resistance_level: new FormControl(this.tempForm.value.resistance_level)
    }));

    this.closeResultForm();
  }

  removeResult(index: number) {
    this.results.removeAt(index);
  }

  submit() {

    const payload = {
      sample_code: this.form.value.sampleCode,
      facility_id: this.form.value.facilityId,
      type: this.form.value.collectionType,
      collection_date: this.form.value.collectionDate,
      results: this.form.value.results
    };

    this.apiService.sendLims(payload).subscribe({
      next: (res) => {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Data saved successfully!',
          confirmButtonColor: '#0d6efd'
        });

        this.closeResultForm();
        this.form.reset();
        this.results.clear();
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
}