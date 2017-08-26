import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: User;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Make the HTTP request:
    this.http.get<User>('http://localhost:8000/auth').subscribe(data => {
      console.log(data);
      this.user = data;
    });
  }
}
