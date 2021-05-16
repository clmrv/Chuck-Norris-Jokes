import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})

export class CounterComponent {
  @Input() counter: FormControl
  @Input() onChange: () => void
  @Input() range?: [number, number]
  
  counterStatus: string
  
  constructor() {
    this.counter = new FormControl(0)  
    this.counterStatus = "correct"
    this.onChange = () => undefined
  }

  addValue(value: number) {
    this.counter.setValue(this.counter.value + value)
    this.myOnChange()
  }
  
  myOnChange() {
    if (this.range) {
      this.counterStatus = inRange(this.counter.value, this.range) ? "correct" : "error" 
    }
    this.onChange()
  }
}

function inRange(value: number, range: [number, number]) {
  if (value < range[0]) return false
  if (value > range[1]) return false
  return true
}

