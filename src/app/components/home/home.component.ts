import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private api:ApiService) { }
  homeInfoObject:any;
  ngOnInit() {
    this.homeData();
  }

  homeData(){
    this.api.getHomeData().subscribe((res)=>{
      this.homeInfoObject = res;
      console.log(`home data`,this.homeInfoObject);
    },(err)=>{
      console.log(`error occured`,err);
    })
  }
}
