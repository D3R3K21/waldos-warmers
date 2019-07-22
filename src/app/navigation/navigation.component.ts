import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  clicked(event: MouseEvent) {
    var current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace('active', '');
    event.currentTarget.className += ' active';
    console.log('clicked');
  }

}
