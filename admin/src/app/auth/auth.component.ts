import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) { }

  onSubmit(formData: NgForm) {
    console.log(formData.value);
    this.router.navigate(['dashboard']);
  }

}
