import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 
  submitted = false;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  passwordPattern =
    '(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:{\\}\\[\\]\\|\\+\\-\\=\\_\\)\\(\\)\\`\\/\\\\\\]])[A-Za-z0-9d$@].{7,}';

    constructor(private loginService:ApiService,private router : Router,private formBuilder: FormBuilder,) { }
    loginForm =new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
        password:new FormControl('',[Validators.required, Validators.pattern(this.passwordPattern)])
    });

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
      password: new FormControl('', [Validators.required, Validators.pattern(this.passwordPattern)]),
    });
  }
  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }
  
  login() {
    this.submitted = true;
    console.log(this.loginForm.value);
    //this.httpClient.get<any>("http://localhost:3000/login")
    this.loginService.getLoginDetails(this.loginForm.value.email, this.loginForm.value.password); 
  }
  }


