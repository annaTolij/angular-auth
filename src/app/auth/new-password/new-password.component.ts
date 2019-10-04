import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MustMatch } from '../mast-math.validator';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss'],
})
export class NewPasswordComponent implements OnInit {
  newPasswordForm: FormGroup;
  submitted = false;
  // private register: Register;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.newPasswordForm = this.formBuilder.group(
      {
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirm: ['', [Validators.required]],
      },
      {
        validator: MustMatch('password', 'confirm'),
      },
    );
  }

  get f() { return this.newPasswordForm.controls; }

  onSubmit() {
      this.submitted = true;

      if (this.newPasswordForm.invalid) {
          return;
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.newPasswordForm.value, null, 4));
  }
}
