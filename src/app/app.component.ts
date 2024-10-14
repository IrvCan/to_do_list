import { Component } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private themeService: ThemeService) {}

  theme: string = 'lara-dark-blue';
  themeMode: string = 'dark mode';


  toggleTheme() {
    this.theme = this.theme === 'lara-dark-blue' ? 'lara-light-blue' : 'lara-dark-blue';
    this.themeMode = this.theme === 'lara-dark-blue' ? 'dark mode' : 'light mode';

    this.themeService.switchTheme(this.theme);
  }
}
