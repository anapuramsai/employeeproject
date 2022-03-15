import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ShoppingService } from 'src/app/shopping.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
   products:any=[];
   selectedProduct={};
  constructor(private httpClient:HttpClient,private shoppingService:ShoppingService) 
  { 
    this.shoppingService.shopping().subscribe(
      (data:any)=>
      {
        this.products=data;
      },
      (error:any)=>
      {
       alert("not accept")
      }
      
    )
  }

  ngOnInit(): void {
  }
  view(product:any)
  {
    this.selectedProduct=product;
  }
  catch(value:any){
    this.selectedProduct={};
    this.products=this.products.filter((data:any)=>data.id!=value);
  }

}
