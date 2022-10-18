import { FormControl } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-errors-message',
  templateUrl: './errors-message.component.html',
  styleUrls: ['./errors-message.component.scss'],
})
export class ErrorsMessageComponent {
  @Input() field?: FormControl<string | number | boolean | undefined | null>;

  errorMessageFromInput(inputCtrl: FormControl): string | void {
    if (inputCtrl.errors && inputCtrl.touched) {
      if (inputCtrl.errors['required']) {
        return 'This field is required';
      } else if (inputCtrl.errors['minlength']) {
        return `Please enter ${inputCtrl.errors['minlength']['requiredLength']} characters minimum`;
      } else if (inputCtrl.errors['pattern']) {
        return 'Email Adress invalid';
      }
    }
  }

  constructor() {}
}
