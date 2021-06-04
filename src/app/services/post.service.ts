import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor( private http:HttpClient) { 
    console.log('post listo para usar')
  }

  public getpost(url:string){
    return this.http.get(url);
  }
  /*
  cargarPost(){
    const url='https://jsonplaceholder.typicode.com/posts';

    return this.http.get(url);
  }*/

}
