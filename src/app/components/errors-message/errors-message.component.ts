import { FormControl } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-errors-message',
  templateUrl: './errors-message.component.html',
  styleUrls: ['./errors-message.component.scss'],
})
export class ErrorsMessageComponent {
  @Input() field!: FormControl<string | number | boolean | null>;

  constructor() {}
}
