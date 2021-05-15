import { Component, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  @Input() placeholders?: {open: string, closed: string}
  @Input() items?: {value: string, caption: string}[]  
  @Input() onChange?: (selected: string) => void
  
  _placeholders: {open: string, closed: string}
  _items: {value: string, caption: string}[]
  _onChange: (selected: string) => void

  selected: string
  panelExpanded: boolean
  title: string
  

  styles: {panel: {}, title: {}}

  constructor() {
    this.panelExpanded = false
    this.selected = ""
    
    this._placeholders = {
      closed: "Categories",
      open: "Select category",
    }
    this._items = [{value: "", caption: "None"}]
    this._onChange = () => undefined
    
    this.title = this._placeholders.closed
    this.styles = styles.normalStyles
  }

  ngOnInit(): void {
    if (this.placeholders) { this._placeholders = this.placeholders }
    if (this.items) { this._items = this._items.concat(this.items) }
    if (this.onChange) { this._onChange = this.onChange}
  }

  
  onItemClick( itemValue: string) {
    this.selected = itemValue
    this.title = this.getTitle()
    this.panelExpanded = false

    if (itemValue) { 
      this.styles = styles.selectedStyles 
    } else {
      this.styles = styles.normalStyles
    }

    this._onChange(this.selected)
  }

  getTitle(): string {
    const titleClosed = this._placeholders.closed
    const titleOpen = this._placeholders.open

    if (this.selected) {
      let caption = ""
      this._items.map( (item) => {
        if (item.value === this.selected)
          caption = item.caption
      })
      return caption
    }

    return (this.panelExpanded) ? titleOpen : titleClosed
  }

}

const styles = {
  selectedStyles: {
    panel: {
      'border-color': 'var(--main-color)',
    },
    title: {
      'color': 'var(--main-color)',
    }
  },
  normalStyles: {
    panel: {
      'border-color': 'var(--gray-1)',
    },
    title: {
      'color': 'var(--gray-1)',
    }
  }
}
