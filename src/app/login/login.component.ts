import { Component, OnInit, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { Subscription } from 'rxjs';
import { ProfileModel } from '../service/profile.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  profile: ProfileModel;
  signInForm: FormGroup;
  submitError: string;
  authRedirectResult: Subscription;
  submitted = false;

  constructor(
    public angularFire: AngularFireAuth,
    public router: Router,
    private ngZone: NgZone,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
   
  }
  ngOnInit() {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  get f() { return this.signInForm.controls; }


  signInWithEmail() {
    this.submitted = true;

    if (this.signInForm.invalid) {
      return;
  }
    this.authService.signInWithEmail(this.signInForm.value['email'], this.signInForm.value['password'])
  }
}
