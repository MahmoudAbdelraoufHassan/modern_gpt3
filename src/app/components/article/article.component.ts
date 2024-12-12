import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.css',
  standalone : true,
})
export class ArticleComponent {
@Input() img !: string;
@Input() title !: string;
@Input() date !: string;
}
