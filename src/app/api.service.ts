import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:any='http://localhost:3000/Products';
  constructor(private http: HttpClient,private router :Router) { }

   
  getAllProduct(){
    return this.http.get(this.url)
   }
   savedata(data:any){
     return this.http.post<any>(this.url,data)
   }
   deletedata(id:any){
     return this.http.delete<any>(`${this.url}/${id}`);
   }
   getProductById(id:Number){
     return this.http.get(`${this.url}/${id}`)
   }

  //  getLoginDetails() {
  //   return this.http.get<any>('http://localhost:3000/login');
    
  // }
  isLoggedIn = false;
  getLoginDetails(userEmail:any, userPass : any) {
    this.http.get<any>('http://localhost:3000/login ').subscribe(
      (res) => {
        const user = res.find((a: any) => {
          return a.email === userEmail && a.password === userPass;
        });
        if (user) {
          // alert("login success")
          this.isLoggedIn = true;
          console.log('Inside service :', this.isLoggedIn);
          this.router.navigate(['welcome-screen']);
        } else {
         
        }
      },
      (err) => {
       alert('Something went wrong !!!');
      }
    );
  }

  authenticateUser() {
    return this.isLoggedIn;
  }
}
