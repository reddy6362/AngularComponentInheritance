import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
})
export class BaseComponent{
  @Input() options: string[] = [];
  @Output() select = new EventEmitter();

  heading = 'Base Class Heading'

  selectAnswer(option: string) {
    this.select.emit(option);
  }
}
