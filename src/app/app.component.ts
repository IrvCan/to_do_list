import { Component } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private themeService: ThemeService) {}

  theme: string = 'lara-dark-blue';


  toggleTheme() {
    this.theme = this.theme === 'lara-dark-blue' ? 'lara-light-blue' : 'lara-dark-blue';

    this.themeService.switchTheme(this.theme);
  }
}
