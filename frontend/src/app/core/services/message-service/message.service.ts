import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private snackBar: MatSnackBar) { }

  openSnackbar(text: string): any {
    this.snackBar.open(text, '', {
      duration: 3000,
      horizontalPosition: "center"
    });
  }
}
