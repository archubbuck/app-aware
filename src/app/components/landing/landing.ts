import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-landing',
  imports: [CommonModule, FormsModule],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing {
  email = signal('');
  isSubmitted = signal(false);

  onSubmit(): void {
    const emailValue = this.email().trim();
    if (emailValue && this.isValidEmail(emailValue)) {
      this.isSubmitted.set(true);
      // In a real app, you would send this to a backend
      console.log('Waitlist signup:', emailValue);
    }
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
