import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  timeline = [
    // {
    //   heading: "Infosys",
    //   duration: "Present",
    //   subtitle: "",
    //   content: "Upcoming Full stack develover at Infosys!",
    //   className1: "mar-left",
    //   className2: "prt_about_learnbox_right"
    // },
    {
      heading: "B.Tech - Computer Science & Engineering",
      duration: "2023",
      subtitle: "GHRCEM, Pune",
      content: "Successfully completed my B.tech in Computer science from SSPU University, Pune.",
      className1: "mar-right",
      className2: "prt_about_learnbox_left"
    },
    {
      heading: "Higher Secondary(12th)",
      duration: "2018",
      subtitle: "State Board",
      content: "Successfully completed my intermediate studies in 2018 from Deogiri College, Chatrapati Sambhaji Nagar.\n" +
        "\n" + "Major: PCM,CS",
      className1: "mar-left",
      className2: "prt_about_learnbox_right"
    },
    {
      heading: "Secondary Stage(10th)",
      duration: "2016",
      subtitle: "State Board",
      content: "Successfully completed my high school studies in 2016 from MV, Wadwani.",
      className1: "mar-right",
      className2: "prt_about_learnbox_left"
    }
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
