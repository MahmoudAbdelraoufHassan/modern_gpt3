import { Component } from '@angular/core';

type Links = {
  href : string , 
  label : string
};

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
activeMenu :boolean;
links : Links[];
constructor(){
  this.activeMenu = false;
  this.links = [ 
    { href: '#home', label: 'Home' },
    { href: '#wgpt3', label: 'What is GPT3?' },
    { href: '#possbility', label: 'Open AI' },
    { href: '#case-studies', label: 'Case Studies' },
    { href: '#library', label: 'Library' }
  ];
}

toggleMenu(){
  if(!this.activeMenu){
    this.activeMenu = true;
  }
  else {
    this.activeMenu = false;
  }
}
}
