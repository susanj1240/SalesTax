import { Component, OnInit } from '@angular/core';
import { ɵangular_packages_platform_browser_dynamic_platform_browser_dynamic_a } from '@angular/platform-browser-dynamic';
import {StoreService} from './store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  //store contains list of items in the store
  store: Array<string>;

  constructor(private storeService: StoreService) {
    this.store = this.storeService.completeList;
   }

  ngOnInit(): void {
  }



}
