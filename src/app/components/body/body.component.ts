import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(private api:ApiService) { }
  newPostData:postRequest = {
    userId:0,
    id:0,
    title:'',
    body:''
  }
  showForm:boolean = false;
  ngOnInit() {
  }

  //method to write new post using http.post method in api service
  writeNewPost(){
    this.showForm = !this.showForm;
    console.log(`NEW POST DATA`,this.newPostData);
    this.api.writeNewPost(this.newPostData).subscribe((res)=>{
      console.log(`response after POST call`,res);
      this.showForm = false;
    },(err)=>{
      console.log(`error in writing new post`,err);
      this.showForm = false;
    })
  }
}
//creating interface to typecast object as per the requirement
export interface postRequest{

    userId:number;
    id:number;
    title:string;
    body:string;
}