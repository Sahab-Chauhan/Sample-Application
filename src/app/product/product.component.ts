import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public products: Product[]=[];
  public productform!: FormGroup;
  issubmitted=false;

  constructor(private service: ProductService, private formbuilder: FormBuilder) { 
    this.getproduct();

    this.productform = new FormGroup({
      name: new FormControl(),
      description:new FormControl(),
      category: new FormControl()
  });
  
    this.productform=this.formbuilder.group({
      id:[''],
      name:[''],
      description:[''],
      category:['']
    }); 
  }



  get productformcontrol() {
    return this.productform.controls;
  }

  ngOnInit(): void {
  }

  //Get all products list
  public getproduct()
  {
    return this.service.getProduct().subscribe((data:Product[])=>{
      this.products=data;
    })
  }


  //Create a new product
  public CreateNewProduct()
  {
    debugger
    if(this.productform.value.id !='' && this.productform.value.id)
    {
      debugger
      //Update produt by id
      return this.service.UpdateProductById(this.productform.value).subscribe((data:Product)=>{
        alert("Product updated successfully");
        this.getproduct();
      })
    }
    else
    { 
      return this.service.addProduct(this.productform.value).subscribe((data:Product)=>{
        alert("Product Create Successfully");
        this.getproduct();
      })
    }
    
  }

  //Get a list of products by id
  public getProductById(id:number){
    debugger
    this.service.getProductById(id).subscribe((data:Product[])=>{
      //let result = this. femaleCondition();
      this.productform.patchValue(data);
      alert("Product added to form Successfully");
    })
   }

   //Delete a product by id
   public deleteProductById(id:number)
   { 
     return this.service.DeleteProductById(id).subscribe((data:Product)=>{
       alert("Product deleted successfully");
        this.getproduct();
     })
   }

   //Reset the product
   public resetProduct()
   { 
     this.productform.reset;
   }



}
