import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  public workExperiences = {
    viewExperiences: true,
    experience: [
      {
        role: "Software Engineer Tranee",
        company: "Cognizant",
        color: "#3781c2",
        companylogo: "../../../assets/images/Logo_Cognizant.png",
        date: "Sep 2023 - Current",
        // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        desc: "Currently working backend, database management, cloud technologies, creating and maintaining RESTful APIs for large-scale applications.",
        // descBullets: [
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        // ]
      },
      {
        role: "Software Engineer Intern",
        company: "Cognizant",
        color: "#3f703f",
        companylogo: "../../../assets/images/Logo_Cognizant.png",
        date: "Feb 2023 – Aug 2023",
        desc: "During the internship, I gained hands-on experience in full-stack development, encompassing frontend, backend, database management, cloud computing, and the implementation of RESTful APIs, focusing on best practices for large-scale applications.        ",
        // descBullets: [
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        // ]
      },
      {
        role: "Software Engineer Intern",
        company: "bizAmica Software Pvt Ltd",
        color: "#0886EC",
        companylogo: "../../../assets/images/Logo_Bizamica.png",
        date: "Jun 2022 – Feb 2023",
        desc: 
        "I completed an 8-month full-stack web development internship, contributing to various FinTech projects for multinational corporations.",
        },
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
