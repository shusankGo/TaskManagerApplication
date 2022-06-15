import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent  {
  public taskData =[];
  public taskName='';
  public status='';
  getTaskName(event){
  this.taskName=event.target.value;
  }
  getStatus(event){
    this.status=event.target.value;
  }
  onAddClick(){
  let obj={
    taskName:this.taskName,
    status:this.status,
  }
  this.taskData.push(obj);
  }
  onDeleteButton(taskName){
    let result = this.taskData.filter((TASK) => TASK.taskName !== taskName);
      this.taskData = result;
  }
  }
  
