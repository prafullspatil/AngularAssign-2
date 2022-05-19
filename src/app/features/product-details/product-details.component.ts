import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  displayProductData: any = [];
  constructor(private product: ApiService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params['id']);
    this.product.getProductById(this.router.snapshot.params['id']).subscribe((res)=>{
      console.log(res);
      this.displayProductData = res;
  })
  }
}
