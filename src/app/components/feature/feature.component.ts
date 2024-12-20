import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feature',
  standalone : true,
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.css'
})
export class FeatureComponent {
@Input() title !: string;
@Input() text !: string;
}
