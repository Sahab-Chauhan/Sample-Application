import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public baseUrl= "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  //Get all products
  public getProduct(): Observable<Product[]> {
    //debugger
    return this.http.get<Product[]>(`${this.baseUrl}product`)
    
  }

  //Create a new product
  public addProduct(data:Product):Observable<Product>{
    debugger
    return this.http.post<Product>(`${this.baseUrl}product`, data);
  }

  //Get Product by id
  public getProductById(id:number):Observable<Product[]>
  {
    debugger
    return this.http.get<Product[]>(`${this.baseUrl}product/${id}`);
  }

  //Edit Product by id
  public UpdateProductById(data:Product):Observable<Product>
  { 
    debugger
    return this.http.put<Product>(`${this.baseUrl}product/${data.id}`,data);

  }

  //Delete Product by id
  public DeleteProductById(id:number):Observable<Product>
  {
    return this.http.delete<Product>(`${this.baseUrl}product/${id}`);
  }

}
