import { Component, EventEmitter, Output } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { Note } from '../../app/interfaces/note';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-addnote',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatIcon],
  templateUrl: './addnote.component.html',
  styleUrl: './addnote.component.css'
})
export class AddnoteComponent 
{
  @Output() addItemEvent = new EventEmitter<Note>();
  
  item:Note = {
    title: "",
    text: "",
    id: 0,
  };


  updateItem(event: any)
  {
    console.log(this.item);
    
    this.addItemEvent.emit(this.item);
    
    this.item = {
      title: "",
      text: "",
      id: 0,
    };
    //this.item.title = event.target.value;
    //console.log(event.target.value);
  }
}
