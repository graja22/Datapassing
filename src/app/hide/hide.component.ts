import { Component, OnInit,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-hide',
  templateUrl: './hide.component.html',
  styleUrls: ['./hide.component.css']
})
export class HideComponent implements OnInit {
  @Output() childMsg= new EventEmitter()
  @Output() bolValue=new EventEmitter()
flag:boolean
info;
  constructor() { }
  sendMsg(){
    this.flag=true;
    this.info=this.childMsg.emit("you have received a msg from child component")
  this.bolValue.emit(this.flag)
  document.getElementById('para1').innerHTML="Data sent"
  
  }

  delMsg(){
   this.flag=false;
   this.bolValue.emit(this.flag)
   document.getElementById('para1').innerHTML=""
 
  }
  ngOnInit() {
  }

}
