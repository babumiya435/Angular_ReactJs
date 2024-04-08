import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  // primitive types
  title!: string;
  name: string = "Babu Miya";
  age: number = 30;
  isMale: boolean = true;

  // non primitive type

  list : string[] = ['india','usa','uk','uae'];
  listNumbers:number[] = [1,2,3,4,5];
  object:object = {name: 'sameer', age: 30};

  //other types


  constructor() {

  }

  ngOnInit(): void {
    //this.title = true; //Type 'boolean' is not assignable to type 'string'.
    this.title = "Basics Of Type Script";
    console.log(this.title);
  }

}
