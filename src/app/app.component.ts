import { Component } from '@angular/core';
// import { Option } from './interfaces';

const options: string[] = [ 'yellow', 'green', 'red', 'blue']

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mode = 1;
  options = options
  selectedOption = options[0];

  title = 'inheritance';

  constructor() { }

  ngOnInit() { }

  selectAnswer(option: string) {
    this.selectedOption = option;
  }
}
