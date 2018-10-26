import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent implements OnInit {

  constructor(private api: ApiService) { }

  // variable declarations
  usersList: Array<any> = [];
  trendingPosts: Array<any> = [];

  ngOnInit() {
    this.getUsers();
    this.getTrendingPosts();
  }

  /** 
   * @description - method to retrieve list of users for left side section of page
  */
  getUsers() {
    this.api.getUsersListData().subscribe((response: any) => {
      this.usersList = response;
      console.log(`got users list from api response: `, this.usersList);
    }, (err) => {
      console.log(`error occured`, err);
    })
  }

  /** 
  * @description - method to retrieve list of trending posts for left side section of page
  */
  getTrendingPosts() {
    this.api.getTrendingData().subscribe((response: any) => {
      this.trendingPosts = response;
      console.log(`got trending posts list from api response: `, this.trendingPosts);
    }, (err) => {
      console.log(`error occured`, err);
    })
  }

}
