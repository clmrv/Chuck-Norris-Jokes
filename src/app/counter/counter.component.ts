import { Component, Input, OnInit } from '@angular/core';
import { Form, FormControl } from '@angular/forms';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})

export class CounterComponent implements OnInit{
  @Input() parentCounter?: FormControl
  @Input() onChange?: () => void
  @Input() range?: [number, number]
  
  counter: FormControl
  counterStatus: string
  
  constructor() {
    this.counter = new FormControl(0)  
    this.counterStatus = "correct"
  }

  ngOnInit() {
    if (this.parentCounter)
      this.counter = this.parentCounter
  }

  addValue(value: number) {
    this.counter.setValue(this.counter.value + value)
    this.myOnChange()
  }
  
  myOnChange() {
    if (this.range)
      this.counterStatus = inRange(this.counter.value, this.range) ? "correct" : "error" 

    if (this.onChange !== undefined) {
      this.onChange()
    }
  }
}

function inRange(value: number, range: [number, number]) {
  if (value < range[0]) return false
  if (value > range[1]) return false
  return true
}

