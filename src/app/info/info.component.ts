import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  jsonData!: string;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getJSON().subscribe(data => {
      this.jsonData = JSON.stringify(data, null, 2);
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get("./assets/data.json");
  }

}
