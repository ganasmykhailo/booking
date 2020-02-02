import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.createFormGroup();
  }

  public submitForm() {
    console.log(this.form.value);
  }

  private createFormGroup(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}
