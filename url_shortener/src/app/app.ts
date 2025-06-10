import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
 
 url = '';
 key = '';
async getUrl(){
 await fetch('http://localhost:3000/createKey', {
     method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
     body: JSON.stringify({url: this.url}),
 })
    .then(response => response.text())
    .then(data => {
      this.key = data;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}}
 /*
   
  }*/