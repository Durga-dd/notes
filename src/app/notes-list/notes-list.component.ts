import { Component } from '@angular/core';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css'],
})
export class NotesListComponent {
  notelist = [
    { id: 1, title: 'Dream' },
    { id: 1, title: 'Journey' },
    { id: 1, title: 'Life' },
  ];
}
