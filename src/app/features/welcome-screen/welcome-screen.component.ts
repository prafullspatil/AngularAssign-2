import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.scss']
})
export class WelcomeScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showGreetings() {
    const date = new Date();
    let hours = date.getHours();
    this.ngOnInit();
    console.log(hours);
    if (hours >= 5 && hours <= 12) {
      return "Good Morning";
    }
    else if (hours > 12 && hours < 18) {
      return "Good Afternoon";
    }
    else if (hours >= 18 && hours < 22) {
      return "Good Evening";
    }
    else {
      return "Good Night";
    }

  }
  username = 'Aman';
}
