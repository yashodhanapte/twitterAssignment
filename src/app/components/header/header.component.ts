import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private api:ApiService) { }
  tweetsCount:number;
  followersCount:number;
  followingCount:number;
  ngOnInit() {
    this.getTweetsCount();
    this.getFollowersCount();
    this.getFollowingCount();
  }

  getTweetsCount(){
    this.api.getTweetsData().subscribe((response:any)=>{
      this.tweetsCount = response.length;
    },(err)=>{
      console.log(`error occured`,err);
    })
  }
  getFollowersCount(){
    this.api.getFollowersData().subscribe((response:any)=>{
      this.followersCount = response.length;
    },(err)=>{
      console.log(`error occured`,err);
    })
  }
  getFollowingCount(){
    this.api.getFollowingData().subscribe((response:any)=>{
      this.followingCount = response.length;
    },(err)=>{
      console.log(`error occured`,err);
    })
  }

}
