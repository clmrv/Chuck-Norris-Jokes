import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() inputControl?: FormControl
  @Input() placeholder?: string
  @Input() onChange?: () => void

  _inputControl: FormControl
  _placeholder: string
  _onChange: () => void

  styles: {
    label: {},
    input: {},
  }


  constructor() {
    this._inputControl = new FormControl("")
    this._placeholder = ""
    this._onChange = () => undefined
    
    this.styles = inactiveStyles
  }

  ngOnInit(): void {
    if (this.inputControl) { this._inputControl = this.inputControl }
    if (this.placeholder) { this._placeholder = this.placeholder }
    if (this.onChange) { this._onChange = this.onChange }
  }

  onFocus() {
    this.styles = activeStyles
  }

  onFocusOut(){
    if (this._inputControl.value.length == 0) {
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
    'font-size': '16px'
  },
}
