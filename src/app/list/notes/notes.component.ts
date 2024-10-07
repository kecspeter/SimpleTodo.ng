import { Component, Input } from '@angular/core';
import { NoteCardComponent } from "../note-card/note-card.component";
import { Note } from '../../interfaces/note';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [NoteCardComponent],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})
export class NotesComponent {
  @Input() cards: Note[]=[]; 


}
