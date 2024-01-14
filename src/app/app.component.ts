import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularpass';
  password = '';
  
  getStrength(): string {
    const easyPattern = /^[a-zA-Z0-9]+$/i;
    const mediumPattern = /^(?=.*[a-zA-Z])(?=.*\d)|(?=.*[a-zA-Z])(?=.*[\W_])|(?=.*\d)(?=.*[\W_])/i;
    const strongPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_])/i;

    if (!this.password) {
      return 'empty';
    } else if (this.password.length < 8) {
      return 'short';
    } else if (strongPattern.test(this.password)) {
      return 'strong';
    } else if (mediumPattern.test(this.password)) {
      return 'medium';
    } else if (easyPattern.test(this.password)) {
      return 'easy';
    }  else {
      return 'empty';
    }
  }
}
