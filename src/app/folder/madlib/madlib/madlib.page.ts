import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-madlib',
  templateUrl: './madlib.page.html',
  styleUrls: ['./madlib.page.scss'],
})
export class MadlibPage implements OnInit {

  story;

  constructor() { }

  ngOnInit() {

    let container = prompt('Please enter a container');
    



    this.story = `Make sure your lunch ${container} `
  }

}
