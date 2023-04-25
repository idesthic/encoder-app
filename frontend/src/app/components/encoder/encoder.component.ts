import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {EncoderService} from "../../core/services/encoder-service/encoder.service";
import {MessageService} from "../../core/services/message-service/message.service";

@Component({
  selector: 'app-encoder',
  templateUrl: './encoder.component.html',
  styleUrls: ['./encoder.component.scss']
})
export class EncoderComponent implements OnInit {
  encoderOutput: string = '';
  userString: string = '';

  constructor(
    private router: Router,
    private encoderService: EncoderService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

  encodeString() {
    if (this.userString === '') {
      return this.messageService.openSnackbar('Missing input.');
    }

    this.encoderService.encodeString({userInput: this.userString}).subscribe(
      (response: any) => {
        this.encoderOutput = response.output;
      }, (error: any) => {
        this.messageService.openSnackbar('Incorrect format');
      })
  }

  clear() {
    this.encoderOutput = '';
    this.userString = '';
  }

  signOut() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/sign-in').then(() => {
        this.messageService.openSnackbar('Successfully signed-out!');
      }
    );
  }
}
