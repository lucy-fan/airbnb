import { Component, OnInit } from '@angular/core';
import { ServiceProvider } from '../../models/service-provider.model';
import { ServiceProviderService } from '../../services/service-provider.service';
@Component({
  selector: 'app-service-providers',
  templateUrl: './service-provider.component.html',
  styleUrls: ['./service-provider.component.scss']
})
export class ServiceProvidersComponent implements OnInit {

  serviceProviders: Array<ServiceProvider>;
  addButtonClicked: Boolean = false;

  sp: ServiceProvider = new ServiceProvider();
  fname: string;
  lname: string;
  email: string;
  cell: number;
  numListings: number;


  constructor(
    private spService: ServiceProviderService
  ) {

    this.serviceProviders = this.spService.getServiceProviders();

  }

  isAddSPClicked() {
    this.addButtonClicked = !this.addButtonClicked;
  }

  isAddClicked() {
    this.addButtonClicked = !this.addButtonClicked;
    this.sp.name = this.fname;
    this.sp.lastName = this.lname;
    this.sp.email = this.email;
    this.sp.cellPhone = this.cell;
    this.sp.numberOfListings = this.numListings;
    this.spService.addSP(this.sp);
  }

  ngOnInit() {
  }

}