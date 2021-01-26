import { Brew } from './../brew';
import { BrewViewServiceService } from './../services/brew-view-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brew-view',
  templateUrl: './brew-view.component.html',
  styleUrls: ['./brew-view.component.css']
})
export class BrewViewComponent implements OnInit {
  brewViewList: any;
  selectedData: any;
  selectedCity: any;
  isSelected: boolean = false;
  isSelectedCity: boolean = false;
  dropDownList: any;
  dropDownListCity: any;
  dataList: any;
  cityList: any;
  stateData = [];
  stateCity = [];


  constructor(private BrewViewServiceService: BrewViewServiceService) { }

  ngOnInit(): void {
    this.BrewViewServiceService.getAllBrew().subscribe(data => {
      this.brewViewList = data;
      this.selectedData = this.brewViewList[1];
      this.dropDownList = [...new Set(this.brewViewList.map(data => data.state))];
    })
  }

  onChangeState(newObj: any) {
    this.selectedData = newObj;
    for (var i = 0; i < this.brewViewList.length; i++) {

      if (this.selectedData === this.brewViewList[i].state) {
        this.dataList = this.brewViewList[i];
        console.log(this.dataList);
        this.stateData.push(this.dataList);
       
        this.dropDownListCity = [...new Set(this.stateData.map(data => data.city))];
      }
    }
    // console.log("selectedData", this.selectedData);
    this.isSelected = true;
  }

  onChangeCity(newObj2: any) {
    this.selectedCity = newObj2;
    for (var i = 0; i < this.stateData.length; i++) {
      if (this.selectedCity === this.stateData[i].city) {
        this.cityList = this.stateData[i];
        console.log(this.cityList);
        this.stateCity.push(this.cityList);
      }
    }
    this.isSelectedCity = true;
  }

}







