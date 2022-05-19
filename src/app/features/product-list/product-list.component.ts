import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productData: any = [];
  constructor(private product: ApiService) { }

  ngOnInit(): void {
    this.product.getAllProduct().subscribe((allData) => {
      console.log(allData);
      this.productData = allData;
    });
  }
  deleteProduct(id:any){
    // console.log(id);
    // this.product.deletedata(id).subscribe((res)=>{
    //   // console.log(res);
    //   this.ngOnInit();
      var result = confirm(' Do you really want to delete?');
    if (result) {
      //Logic to delete the item
      this.product
        .deletedata(id)
        .subscribe((result) => {
          this.ngOnInit();
        });
    } else {
      alert('Delete Operation Canceled !!!');
    }
    }
}
