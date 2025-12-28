import { Component } from '@angular/core';
import { TitlesSectionComponent } from '../../components/titles/titles-section/titles-section.component';

@Component({
  selector: 'new-login',
  imports: [TitlesSectionComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {}
