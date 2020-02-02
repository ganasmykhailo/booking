import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent implements OnInit {

  @Input() disabledFields: string[] = [];

  public form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.createForm();
    this.disableFormControls(this.form, this.disabledFields);
  }

  private createForm() {
    return this.fb.group({
      area: ['', Validators.required],
      postcode: ['', Validators.required]
    });
  }

  private disableFormControls(form: FormGroup, controls: string[]) {
    controls.forEach((control) => form.get(control).disable());
  }

}
