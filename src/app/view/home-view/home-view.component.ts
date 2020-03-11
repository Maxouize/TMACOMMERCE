import { AxiosService } from './../../service/axios.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {

  constructor(private axiosService: AxiosService) { }

  ngOnInit() {
    this.axiosService.getDataTestAxios().then(data => {
      console.log(data);
    });
  }

}
