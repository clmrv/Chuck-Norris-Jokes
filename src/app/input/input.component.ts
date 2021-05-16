import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() inputControl: FormControl
  @Input() placeholder: string
  @Input() onChange: () => void
  @Input() hidePlaceholder: boolean

  styles: {
    label: {},
    input: {},
  }


  constructor() {
    this.inputControl = new FormControl("")
    this.placeholder = ""
    this.onChange = () => undefined
    this.hidePlaceholder = false
    
    this.styles = inactiveStyles
  }

  onFocus() {
    this.styles = activeStyles
  }

  onFocusOut(){
    if (this.inputControl.value.length == 0) {
      this.styles = inactiveStyles
    }
  }

}

const activeStyles = {
  input: {
    'border-color': 'var(--main-color)',
    'padding-top': '20px',
  },
  label: {
    'top': '8px',
    'font-size': '12px',
  },
}

const inactiveStyles = {
  input: {
    'border-color': 'var(--gray-1)',
    'padding-top': '0px',
  },
  label: {
    'top': '19px',
    'font-size': '16px',
  },
}
