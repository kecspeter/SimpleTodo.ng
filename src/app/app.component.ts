import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { NotesComponent } from './list/notes/notes.component';
import { MatCommonModule } from '@angular/material/core';
import { AddnoteComponent } from "../note/addnote/addnote.component";
import { Note } from './interfaces/note';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, NotesComponent, MatCommonModule, AddnoteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ToDoApp';

  notes : Note[] = [
    {
      id: 0,
      title: "Title1",
      text: "Text Text Text Text Text Text Text Text",
    },
    {
      id: 1,
      title: "Title2",
      text: "Long Long Long Long Long Long Long Long ",
    },
  ];

  constructor() {
    
  }

  addItem(item:Note)
  {
    //addToList();
    //reloadList();
    this.notes.push(item);
    console.log(this.notes);
  }
  removeItem(item:Note)
  {
    // remove by id
  }
}
