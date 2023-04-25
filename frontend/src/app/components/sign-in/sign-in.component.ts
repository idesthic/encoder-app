import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EncoderService} from "../../core/services/encoder-service/encoder.service";
import {Router} from "@angular/router";
import {MessageService} from "../../core/services/message-service/message.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  submittedSignInForm: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private encoderService: EncoderService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.pattern('^(?=.*?[0-9]).{6,}$')])],
    });
  }

  get validateSignInForm() {
    return this.signInForm.controls;
  }

  submitSignIn() {
    this.submittedSignInForm = true;

    if (this.signInForm.invalid) {
      return;
    }

    this.encoderService.signIn(this.signInForm.value).subscribe(
      response => {
       localStorage.setItem('token', Object.values(response)[0]);
        this.encoderService.saveToken(Object.values(response)[0]);
        this.submittedSignInForm = false;
        this.signInForm.reset();
        this.router.navigateByUrl('/encoder').then(() => {
            this.messageService.openSnackbar('Successfully signed-in!');
          }
        );
      }, error => {
        this.messageService.openSnackbar('Incorrect email or password.');
      }
    );
  }
}
