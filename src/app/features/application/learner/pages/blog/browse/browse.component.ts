import { Component } from '@angular/core';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent {

  items = ["Item 1"];

  add() {
    this.items.push("Item " + (this.items.length + 1));
  }

  remove() {
    this.items.pop();
  }

}
