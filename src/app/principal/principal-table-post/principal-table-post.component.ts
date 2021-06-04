import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-principal-table-post',
  templateUrl: './principal-table-post.component.html',
  styleUrls: ['./principal-table-post.component.scss']
})
export class PrincipalTablePostComponent implements OnInit {
  
  public listPost:any =[];

  /***PRUEBA** 
  listapost: any;
  listauser: any;
  */
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private postlistService: PostService,
  ) { }

  ngOnInit():void{
    /*post
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => {  return res.json() })
    .then(data => { 
      console.log(data),
      this.listapost=data,
      console.log(this.listapost)
    })
    */
   this.cargardata();
   
  }
  public cargardata(){
    this.postlistService.getpost('https://jsonplaceholder.typicode.com/posts').subscribe(resp =>{
      this.listPost=resp;
    })
  }

  Regresar(){
    this.router.navigate(['']);

  }
}
