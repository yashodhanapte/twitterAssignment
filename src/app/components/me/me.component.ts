import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {

  constructor(private api:ApiService) { }
  meInfoObject:any;
  ngOnInit() {
    this.meData();
  }
  meData(){
    this.api.getMyData().subscribe((res)=>{
      this.meInfoObject = res;
      console.log(`me data`,this.meInfoObject);
    },(err)=>{
      console.log(`error occured`,err);
    })
  }

}
