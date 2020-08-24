import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {
  signUpForm: FormGroup;
  submitError: string;
  authRedirectResult: Subscription;
  submitted = false;

  validation_messages = {
    'email': [
      { type: 'required', message: 'Email em branco.' },
      { type: 'pattern', message: 'Email invalido' }
    ],
    'password': [
      { type: 'required', message: 'Senha em branco.' },
      { type: 'minlength', message: 'Senha precisa ter mais de 6 caracteres.' }
    ],
    'nome': [
      { type: 'required', message: 'Nome em branco.' }
    ]
  };

  constructor(
    public router: Router,
    private ngZone: NgZone,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {

  }
  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      nome:['',[Validators.required]]
    });
  }
  get f() { return this.signUpForm.controls; }




  signUpWithEmail() {
    this.submitted = true;

    if (this.signUpForm.invalid) {
      return;
  }
    this.authService.signUpWithEmail(
      this.signUpForm.value['email'],
      this.signUpForm.value['password'],
      this.signUpForm.value['nome']
      ).catch(error => {
        this.submitError = error.message;
      });
  }

}
