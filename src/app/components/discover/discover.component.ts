import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {

  constructor(private api: ApiService) { }
  discoverInfoObject: any;
  ngOnInit() {
    this.discoverData();
  }

  /**
  * @description - method to call data from api for Discover tab main section
  */
  discoverData() {
    this.api.getDiscoverData().subscribe((res) => {
      this.discoverInfoObject = res;
      console.log(`discover data`, this.discoverInfoObject);
    }, (err) => {
      console.log(`error occured`, err);
    })
  }

}
