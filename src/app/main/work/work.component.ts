import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { options } from '../constant';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {
  public customOptions: OwlOptions = options;
}
