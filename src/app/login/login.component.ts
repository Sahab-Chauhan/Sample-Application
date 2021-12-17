import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from './login';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFormGroup!: FormGroup;
  public model!: Login;
  showLoginWarningMessage: boolean = false;
  returnUrl: string = '';
  issubmitted=false;

  constructor(private auth: LoginService, private router: Router, private route: ActivatedRoute,private formbuilder:FormBuilder) 
  { 
    //this.model = new Login();
    this.loginFormGroup=this.formbuilder.group({
    username:['', [Validators.required]],
    password:['', Validators.required],
  }) 
  }

  get loginFormControl() {
    return this.loginFormGroup.controls;
  }

  ngOnInit(): void {
    // if (this.auth.validateUserTocken()) {
    //   //update your logic accordingly
    //   //this will trigger while user clicks on back button, 
    //   //before naviagting to login page
    //   alert('You will be logged out');
    // }
    // this.auth.logout();
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'dashboard';
  }

  login() {
    debugger
    this.showLoginWarningMessage = false;
    if (this.auth.validateUserDetails(this.loginFormGroup.value)) {
      debugger
        // this.auth.setTocken();
        this.router.navigate(['/dashboard']);
        alert("login successful")
    } else {
        alert("Invalid username or password")
        this.showLoginWarningMessage = true;
    }
}
//reset login form
resetLogin()
{ return this.loginFormGroup.reset(); }


}
