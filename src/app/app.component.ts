import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
//import { ButtonComponent } from './button/button.component'
import { Jokes } from './jokes';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'rec-task-chuck-norris';
  joke: string
  impersonate : {
    firstName:string, 
    lastName:string
  }

  impersonateControl: FormControl
  categoryControl: FormControl

  drawButtonLabel: string

  counter: {
    formControl: FormControl,
    range: [number,number],
  }

  saveButtonState: string
  boundedUpdateSaveButtonState: () => void


  constructor(private http: HttpClient) {
    this.joke = "Loading..."
    
    this.impersonate = {
      firstName: "",
      lastName: "",
    }
    
    this.impersonateControl = new FormControl("")
    this.categoryControl = new FormControl("")

    this.drawButtonLabel = this.getDrawButtonLabel()
    
    this.counter = {
      formControl: new FormControl(0),
      range: [0,100],
    }

    this.saveButtonState = "saveButtonOff"
    this.boundedUpdateSaveButtonState = this.updateSaveButtonState.bind(this)

    this.handleDrawButton()
  }

  handleDrawButton() {
    const url = getIcndbUrl(this.impersonate, this.categoryControl.value)
    this.http.get<Jokes>(url)
    .subscribe((data: Jokes) => {
      this.joke = data.value[0].joke
    })
  }

  downloadJokes(count: number) {
    const url = getIcndbUrl(this.impersonate, this.categoryControl.value, count)
    this.http.get<Jokes>(url)
    .subscribe((data: Jokes) => {
      let textToSave = ""
      data.value.map((joke) => {
        textToSave += `${joke.joke}\n\n`
      })

      downloadToFile(textToSave, "My jokes", "txt")
    })
  }

  onImpersonateChange() {
    this.impersonate.firstName = getFirstName(this.impersonateControl.value)
    this.impersonate.lastName = getLastName(this.impersonateControl.value)
    this.drawButtonLabel = this.getDrawButtonLabel()
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
    if (counter > 0 && counter < 100)
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
  
  let url = `http://api.icndb.com/jokes/random/${count}?escape=javascript&`

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