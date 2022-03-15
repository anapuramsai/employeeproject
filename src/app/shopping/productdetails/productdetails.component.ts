import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  @Input() product:any={}
  @Output() e:EventEmitter<any>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  delete()
  {
   this.e.emit(this.product.id)
  }
  addtocart()
  {
    alert("added")
  }

}
