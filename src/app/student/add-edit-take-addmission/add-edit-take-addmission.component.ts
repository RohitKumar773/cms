import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { AddEditAddmissionComponent } from 'src/app/institute/add-edit-addmission/add-edit-addmission.component';

@Component({
  selector: 'app-add-edit-take-addmission',
  templateUrl: './add-edit-take-addmission.component.html',
  styleUrls: ['./add-edit-take-addmission.component.css']
})


export class AddEditTakeAddmissionComponent implements OnInit {
  addparty: any;

  onSubmit() {
    throw new Error('Method not implemented.');
  }
  resetparty() {
    throw new Error('Method not implemented.');
  }
  disableSelect = new FormControl(false);
  selector: 'radio-overview-example' | undefined
  InstForm!: FormGroup;
  upload: any;
  actionBtn: string = 'Submit'
  admin_id: any;
  constructor(
    private fb: FormBuilder,
    private matref: MatDialogRef<AddEditAddmissionComponent>,

  ) { }

  ngOnInit(): void {
    this.InstForm = this.fb.group({
      std_name: ['',Validators.required],
      course_name: ['', ],
      Father_name: ['', ],
      Father_occuption: ['',],
      Moblie: ['', Validators.required],
      institute_country: ['',],
      Aadhar: ['',],
      Gender: ['', Validators.required],
      Dob: ['', ],
      Email: ['',],
      Address: ['', Validators.required],
      state: ['', ],
      District: ['', ],
      Date: ['', ],
      course_date: ['',]
    }
    )}
    addstd(){

    }
}