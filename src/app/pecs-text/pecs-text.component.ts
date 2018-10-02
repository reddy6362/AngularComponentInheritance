import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-pecs-text',
  templateUrl: './pecs-text.component.html',
})
export class PecsTextComponent extends BaseComponent {
  heading = 'PECS + Text Mode';
}
