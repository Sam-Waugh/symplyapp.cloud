import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'symply-coming-soon';
  email = '';
  isSubmitted = false;

  onSubmit() {
    if (this.email) {
      this.isSubmitted = true;
      // Here you would typically send the email to your backend
      console.log('Email submitted:', this.email);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        this.isSubmitted = false;
        this.email = '';
      }, 3000);
    }
  }
}
