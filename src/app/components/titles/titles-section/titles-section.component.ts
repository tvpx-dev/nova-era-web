import { Component, Input } from '@angular/core';

@Component({
  selector: 'new-titles-section',
  imports: [],
  templateUrl: './titles-section.component.html',
  styleUrl: './titles-section.component.scss',
})
export class TitlesSectionComponent {
  @Input()
  tituloSecao!: string;
}
