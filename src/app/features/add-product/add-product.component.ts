import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  maxDate: any = '2022-05-17';
  alphNumPattern = "^[a-zA-Z0-9]*";
  floatNumPattern = "[-+]?[0-9]*\.?[0-9]*";
  numPattern = "^[0-9]*$";
  succMessage : boolean=false;
  
  
  constructor(private product: ApiService) { }

  ngOnInit(): void {
  }
  saveData() {
    // let productdetails=this.addProduct.value;
    // productdetails.product_id=Number(productdetails.product_id)
    this.product.savedata(this.addProduct.value).subscribe((res) => {
      // console.log(this.addProduct);
      this.succMessage=true;
      this.addProduct.reset({});
    })
  }
  removeMessage(){
    this.succMessage=false;
  }

  addProduct = new FormGroup({
    product_id: new FormControl('', [Validators.required, Validators.pattern(this.alphNumPattern)]),
    product_name: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    category: new FormControl('', Validators.required),
    model_no: new FormControl('', [Validators.required, Validators.pattern(this.alphNumPattern)]),
    released_date: new FormControl('', Validators.required),
    stock_units: new FormControl('', [Validators.required, Validators.pattern(this.numPattern)]),
    description: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    price: new FormControl('', [Validators.required, Validators.pattern(this.floatNumPattern)]),
  });

  // get product_id(){
  //   return this.addProduct.get('product_id');
  // }

  // get price(){
  //   return this.addProduct.get('price');
  // }


  disableFutureDate() {
    var date: any = new Date();
    var todayDate: any = date.getDate();
    var month: any = date.getMonth() + 1;
    var year: any = date.getFullYear();
    if (todayDate < 10) {
      todayDate = '0' + todayDate;
    }
    if (month < 10) {
      month = '0' + month;
    }
    this.maxDate = year + '-' + month + '-' + todayDate;
    // console.log(this.maxDate); }
  }

}
