import { Component } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.css'
})
export class BrandComponent {
brands : string[];

constructor(){
  this.brands = ['google.png' , 'slack.png' , 'atlassian.png' , 'dropbox.png' , 'shopify.png']
}

}
