import { Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  @Input() placeholders: {open: string, closed: string}
  @Input() items: {value: string, caption: string}[]  
  @Input() onChange: (selected: string) => void
  @Input() onOpen: () => void
  @Input() onClose: () => void

  selected: string
  panelExpanded: boolean
  title: string
  

  styles: {panel: {}, title: {}}

  constructor() {
    this.panelExpanded = false
    this.selected = ""
    
    this.placeholders = {
      closed: "Categories",
      open: "Select category",
    }
    this.items = []
    this.onChange = () => undefined
    this.onOpen = () => undefined
    this.onClose = () => undefined
    
    this.title = this.placeholders.closed
    this.styles = styles.normalStyles
  }

  ngOnInit() {
    this.items = [{value: "", caption: "None"}].concat(this.items)
  }

  myOnOpen() {
    this.updateTitle()
    this.onOpen()
  }

  myOnClose() {
    this.updateTitle()
  }

  onAfterCollapse() {
    this.onChange(this.selected)
    this.onClose()
  }
  
  onItemClick( itemValue: string) {
    this.selected = itemValue
    this.panelExpanded = false
    this.updateTitle()

    if (itemValue) { 
      this.styles = styles.selectedStyles 
    } else {
      this.styles = styles.normalStyles
    }
  }

  updateTitle() {
    const titleClosed = this.placeholders.closed
    const titleOpen = this.placeholders.open
    console.log(`titleClosed ${titleClosed}`)

    if (this.selected) {
      let caption = ""
      this.items.map( (item) => {
        if (item.value === this.selected)
          caption = item.caption
      })
      this.title = caption
    } else {
      this.title = (this.panelExpanded) ? titleOpen : titleClosed
    } 
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
