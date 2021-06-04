import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public resp:any=[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private postlistService: PostService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap:any) =>{
      const {params}=paramMap
      console.log(params.variable);
      this.cargardatapost(params.variable);
    })
    
  }

  cargardatapost(id:string){
    this.postlistService.getpost(`https://jsonplaceholder.typicode.com/posts?userId=${id}`).subscribe(resp =>{
      this.resp=resp;
  })
  }

  Regresar(){
    this.router.navigate(['/usuarios']);
  }

}
