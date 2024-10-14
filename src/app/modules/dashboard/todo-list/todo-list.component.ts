import { Component } from '@angular/core';
import { ListModel } from 'src/app/models/store.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {

  addTaskFlag: boolean = false;
  taskTitle:string = "";

  taskList: ListModel[] = [];


  addTask(){
    this.addTaskFlag = !this.addTaskFlag;
  }

  saveTask(){
    let newtask: ListModel ={
      id: new Date().getTime(),
      title: this.taskTitle,
      completed: false
    }

    this.taskList.push(newtask);

    this.addTaskFlag = !this.addTaskFlag;
    this.taskTitle = '';
  }

  taskConfig(){
    console.log("TaskConfig")
  }
}
