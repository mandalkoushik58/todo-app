import { Injectable } from '@angular/core';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
 todoList:Array<string>=["HTML","CSS","JAVASCRIPT"]
  constructor(private _SnackbarService : SnackbarService) { }

  getAllTodos() : Array<string>{
    return this.todoList
  }
   addTodoItems(todo:string){
    this.todoList.push(todo)
     this._SnackbarService.onOpensnackbar(`${todo} added successfully`)
   }



}
