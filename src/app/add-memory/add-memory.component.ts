import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-memory',
  templateUrl: './add-memory.component.html',
  styleUrls: ['./add-memory.component.scss']
})
export class AddMemoryComponent implements OnInit {

  memory: any = {};

  constructor() { }

  ngOnInit() {

  }

  onSubmit() {
    console.log(this.memory);
  }
}
