import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { RequestPost } from 'src/app/models/interface-post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  
  public lsitapostnew : any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postlistService: PostService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap:any) =>{
      const {params}=paramMap
      console.log(params.variable);
      //this.cargardatapost(params.variable);
      this.getPost(parseInt(params.variable));
    })
    
  }
/*
  cargardatapost(id:string){
    this.postlistService.getpost(`https://jsonplaceholder.typicode.com/posts?userId=${id}`).subscribe(resp =>{
      this.resp=resp;
  })
  }
*/
  getPost(id:number){
    this.postlistService.getpost('https://jsonplaceholder.typicode.com/posts/')
    .subscribe((resp: RequestPost[]) => {
      this.lsitapostnew=resp.filter((e)=> e.userId===id);
      console.log(this.lsitapostnew)
      })
  }

  Regresar(){
    this.router.navigate(['/usuarios']);
  }

}
