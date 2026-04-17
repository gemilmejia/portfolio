import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  @Input() contact: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  @Output() submitForm = new EventEmitter<any>();

  onSubmit(form: any): void {
    this.submitForm.emit(form);
  }
}
