import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameUpper: string = 'UNAI';
  public nameLower: string = 'unai';
  public fullName: string = 'uNai LaRA maRTin';

  public customDate: Date = new Date();

}
