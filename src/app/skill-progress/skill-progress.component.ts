import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-progress',
  templateUrl: './skill-progress.component.html',
  styleUrls: ['./skill-progress.component.scss']
})
export class SkillProgressComponent implements OnInit {

  techStack = {
    viewSkillBars: true,
    experience: [
      
      {
        Stack: "Programming",
        progressPercentage: "75%%"
      },
      {
        Stack: "Frontend/Design",
        progressPercentage: "75%"
      },
      {
        Stack: "Backend",
        progressPercentage: "70%"
      },
      {
        Stack: "DBMS",
        progressPercentage: "75%"
      }
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

  progressStyle(percentage:string){
    return {    width: percentage}
  }

}
