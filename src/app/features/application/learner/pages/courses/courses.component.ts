import {Component, OnInit} from '@angular/core';
import {NzMarks} from "ng-zorro-antd/slider";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit{

  marks: NzMarks = {
    0: '$0',
    50: '$50',
    100: '$100',
    2500: {
      style: {
        color: '#f50'
      },
      label: '<strong>$250</strong>'
    }
  };

  listOfOption: string[] = [];
  listOfSelectedValue = ['a10', 'c12'];

  ngOnInit(): void {
    const children: string[] = [];
    for (let i = 10; i < 36; i++) {
      children.push(`${i.toString(36)}${i}`);
    }
    this.listOfOption = children;
  }



}
