import { Component, OnInit } from '@angular/core';
import { TodoService } from '../shared/services/todo.service';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.scss']
})
export class ToDoFormComponent implements OnInit {

  constructor(private _todoService:TodoService) { }

  ngOnInit(): void {
  }
  onTodoAdd(items:HTMLInputElement){
    let val=items.value;
    if(val.length>0){
      this._todoService.addTodoItems(val)

    }
    items.value='';
  }
}
