import { Component, Input } from '@angular/core';
import { Note } from '../../interfaces/note';
import {ChangeDetectionStrategy} from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-note-card',
  standalone: true,
  imports: [MatCardModule, MatChipsModule, MatProgressBarModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './note-card.component.html',
  styleUrl: './note-card.component.scss'
})
export class NoteCardComponent 
{
  @Input() item!: Note;
}
