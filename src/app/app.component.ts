import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Jokes } from './jokes';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'rec-task-chuck-norris';
  
  banner: {src: string, srcset: string}
  joke: string

  categories: {value: string, caption: string}[]
  selectedCategory: string

  impersonate : { firstName:string, lastName:string }
  impersonateControl: FormControl
  impersonateHideLabel: boolean
  drawButtonLabel: string

  counter: {
    formControl: FormControl,
    range: [number,number],
  }

  saveButtonState: string
  boundedUpdateSaveButtonState: () => void
  boundedOnImpersonateChange: () => void
  boundedOnCategoryChange: (selected: string) => void
  boundedOnCategoryOpen: () => void
  boundedOnCategoryClose: () => void


  constructor(private http: HttpClient) {
    this.banner = bannerUrls.chuck
    this.joke = "Loading..."
    
    this.impersonate = {
      firstName: "",
      lastName: "",
    }
    this.impersonateControl = new FormControl("")
    this.impersonateHideLabel = false
    this.categories = [
      {
        value: "explicit",
        caption: "Explicit",
      },
      {
        value: "nerdy",
        caption: "Nerdy",
      },
    ]

    this.selectedCategory = ""
    this.drawButtonLabel = this.getDrawButtonLabel()
    
    this.counter = {
      formControl: new FormControl(0),
      range: [0,100],
    }

    this.boundedOnCategoryChange = this.onCategoryChange.bind(this)
    this.boundedOnImpersonateChange = this.onImpersonateChange.bind(this)
    this.saveButtonState = "saveButtonOff"
    this.boundedUpdateSaveButtonState = this.updateSaveButtonState.bind(this)
    this.boundedOnCategoryOpen = this.onCategoryOpen.bind(this)
    this.boundedOnCategoryClose = this.onCategoryClose.bind(this)

    this.handleDrawButton()
  }

  handleDrawButton() {

    const url = getIcndbUrl(this.impersonate, this.selectedCategory)
    this.http.get<Jokes>(url)
    .subscribe((data: Jokes) => {
      this.joke = data.value[0].joke
    })
  }

  downloadJokes(count: number) {
    const url = getIcndbUrl(this.impersonate, this.selectedCategory, count)
    this.http.get<Jokes>(url)
    .subscribe((data: Jokes) => {
      let textToSave = ""
      data.value.map((joke) => {
        textToSave += `${joke.joke}\n\n`
      })

      downloadToFile(textToSave, "My jokes", "txt")
    })
  }

  onCategoryOpen() {
    this.impersonateHideLabel = true
  }

  onCategoryClose() {
    this.impersonateHideLabel = false
  }

  onCategoryChange(newCategoryValue: string) {
    this.selectedCategory = newCategoryValue
  }

  onImpersonateChange() {
    this.impersonate.firstName = getFirstName(this.impersonateControl.value)
    this.impersonate.lastName = getLastName(this.impersonateControl.value)
    this.drawButtonLabel = this.getDrawButtonLabel()
    this.banner = (this.impersonate.firstName) ? bannerUrls.unknown : bannerUrls.chuck
  }

  handleSaveButton() {
    if (this.saveButtonState == "saveButtonOff")
      return

    this.downloadJokes(this.counter.formControl.value)
  }

  getDrawButtonLabel() {
    let firstName = getFirstName(this.impersonateControl.value)
    let lastName = getLastName(this.impersonateControl.value)

    if (firstName === "") { firstName = "Chuck" }
    if (lastName === "") { lastName = "Norris" }

    return `Draw a random ${firstName} ${lastName} joke`
  }


  updateSaveButtonState() {
    const counter = this.counter.formControl.value
    if (counter > 0 && counter <= 100)
      this.saveButtonState = "saveButtonOn"
    else
      this.saveButtonState = "saveButtonOff"
  }
}

const downloadToFile = (content: string, filename: string, contentType: string) => {
  const a = document.createElement('a');
  const file = new Blob([content], {type: contentType});
  a.href= URL.createObjectURL(file);
  a.download = filename;
  a.click();
	URL.revokeObjectURL(a.href);
};

function getIcndbUrl(impersonate: {firstName: string, lastName: string}, category: string, count=1) {  
  let firstName = impersonate.firstName
  let lastName = impersonate.lastName
  
  let url = `https://api.icndb.com/jokes/random/${count}?escape=javascript&`

  if (firstName !== "") { url += `firstName=${firstName}&` }
  if (lastName !== "") { url += `lastName=${lastName}&` }
  if (category !== "") { url += `limitTo=${[category]}&` }
  
  return url
}


function getFirstName(text: string): string {
  const trimmed = text.trim()
  const space = trimmed.indexOf(" ")

  if (space === -1) {
    return trimmed
  }

  return trimmed.substr(0, space)
}

function getLastName(text: string): string {
  const trimmed = text.trim()
  const space = trimmed.indexOf(" ")

  if (space === -1) {
    return ""
  }
  const lastName = trimmed.substr(space, trimmed.length)
  return lastName.trim()
}

const bannerUrls = {
  chuck: {
    src: "assets/img/Chuck-Norris-photo.png",
    srcset: `assets/img/Chuck-Norris-photo@2x.png 2x,
            assets/img/Chuck-Norris-photo@3x.png 3x`
  },
  unknown: {
    src: "assets/img/Random-photo.png",
    srcset: `assets/img/Random-photo@2x.png 2x,
            assets/img/Random-photo@3x.png 3x`
  }
}
