import { Component, OnInit } from '@angular/core';
import { MyjsonApi } from 'src/app/services/myjson-api.service';


@Component({
  selector: 'app-fo-products',
  templateUrl: './fo-products.component.html',
  styleUrls: ['./fo-products.component.scss']
})
export class FoProductsComponent implements OnInit {
  public products: [];
  private loading:boolean = false;
  constructor(private myJsonAPI: MyjsonApi) { }

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.loading = true;
    this.myJsonAPI.getJsonAPI('cqffy')
      .subscribe((res: any) => {
        this.loading = false;
        this.products = res;
        console.log(res);
      }, (err) => {
        this.loading = false;
        console.warn("Error while fetching list", err);
      }, () => {
        console.log("Request completed");
      })
  }

}
