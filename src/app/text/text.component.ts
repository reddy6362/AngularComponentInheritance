import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
})
export class TextComponent extends BaseComponent{
heading = 'Text Only Mode';
}
