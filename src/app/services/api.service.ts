import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl = ` https://jsonplaceholder.typicode.com/`;

  // methods to retrieve data for header component
  getTweetsData() {
    return this.http.get(this.baseUrl + `comments`);
  }

  getFollowingData() {
    return this.http.get(this.baseUrl + `photos`);
  }

  getFollowersData() {
    return this.http.get(this.baseUrl + `albums`);
  }

  // methods to retrieve data for side component

  getUsersListData() {
    return this.http.get(this.baseUrl + `users`);
  }

  getTrendingData() {
    return this.http.get(this.baseUrl + `posts`);
  }

  //methods to retrieve data for 4 tabs (home, notifications, discover, me)

  getHomeData() {
    return this.http.get(this.baseUrl + `posts`);
  }

  getNotificationData() {
    return this.http.get(this.baseUrl + `albums`);
  }

  getDiscoverData() {
    return this.http.get(this.baseUrl + `photos`);
  }

  getMyData() {
    return this.http.get(this.baseUrl + `posts?userId=1`);
  }

  //method to write new post
writeNewPost(newPostObject){
  return this.http.post(this.baseUrl + `posts`, newPostObject);
}

}
