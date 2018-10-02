import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-pecsonly',
  templateUrl: './pecsonly.component.html',
  // styleUrls: ['./pecsonly.component.css']
})
export class PecsonlyComponent extends BaseComponent{
  heading = "PECS Only Mode"
}
