import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
emailto  = 'ibadurrehman@yahoo.com';
headername = 'Hello, I’m Ibadur. Front End Web Developer, And Graphics Designer.';
headerpara = 'I am a very passionate Front end developer. I love learning new things every day and keeping up with new technologies.';
crLocation = 'Jabalpur, India';
constructor() { }

  ngOnInit() {
  }

}

