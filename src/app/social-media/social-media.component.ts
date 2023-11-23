import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {
  socialMediaLinks = {

    github: "https://github.com/prashantmore277",
    linkedin: "https://www.linkedin.com/in/prashant-more-55950518b/",
    gmail: "prashantmore277@gmail.com",
    instagram : "https://www.instagram.com/prashant_more_277/",
    twitter: "https://twitter.com/Prashantmore999"
  };
  constructor() { }

  ngOnInit(): void {
  }

}
