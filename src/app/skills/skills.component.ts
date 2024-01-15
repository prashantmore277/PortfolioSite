import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillsSection = {
    title: "What I do💁‍♂️?",
    subTitle: "CRAZY FULL STACK DEVELOPER AND ADAPTABLE TO ANY TECH STACK",
    skills: [
      "⚡ Developing application backends using Django, Flask, Spring Boot, and Node.js.",
      "⚡ Proficient in building Progressive Web Applications (PWAs) using both normal and SPA stacks.",
      "⚡ Integration of third party services such as Firebase/ Heroku/ AWS.",
      "⚡ Extensive experience in creating Dashboards and similar interfaces."
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
