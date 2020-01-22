import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-miss',
  templateUrl: './miss.component.html',
  styleUrls: ['./miss.component.css']
})
export class MissComponent implements OnInit {
  Curcount=0
  Totalcount=0
 
     increment() {
      
    
        document.getElementById('p1').innerHTML+="You Incremented me"+"<br>"
        this.Curcount++;
        this.Totalcount++;


     
      }
    decrement() {
     
      document.getElementById('p2').innerHTML+="You Decremented me"+"<br>"
        this.Curcount--;
        this.Totalcount++;

    
    }

    change(){
      document.getElementById('changecol').style.color='blue'
    }
    rechange(){
      document.getElementById('changecol').style.color='black'
    }
  constructor() { }


  ngOnInit() {
  }

}
