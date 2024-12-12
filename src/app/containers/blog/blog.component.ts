import { Component } from '@angular/core';

type article = {
  title : string,
  img : string,
  date : string
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
articles : article[];

constructor(){
  this.articles = [
    {title : "GPT-3 and Open  AI is the future. Let us exlore how it is?",
      img : "assets/blog02.png",
      date : "Sep 26, 2021"
    },

    {title : "GPT-3 and Open  AI is the future. Let us exlore how it is?",
      img : "assets/blog03.png",
      date : "Sep 26, 2021"
    },

    {title : "GPT-3 and Open  AI is the future. Let us exlore how it is?",
      img : "assets/blog04.png",
      date : "Sep 26, 2021"
    },

    {title : "GPT-3 and Open  AI is the future. Let us exlore how it is?",
      img : "assets/blog05.png",
      date : "Sep 26, 2021"
    },

  ]
}
}
