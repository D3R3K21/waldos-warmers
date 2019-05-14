import { Component } from '@angular/core';
import { Page } from './page';
@Component({
  selector: 'app-page',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent {
pages: Page[] = [
{
  message: 'This is not the message',
  pageId: '123456'
},
{
  message: 'This is the message',
  pageId: '246810'
},
{
  message: 'This is not the message either',
  pageId: '98765'
}];

}
