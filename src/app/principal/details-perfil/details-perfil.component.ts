import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestUser } from 'src/app/models/interface-user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-details-perfil',
  templateUrl: './details-perfil.component.html',
  styleUrls: ['./details-perfil.component.scss']
})
export class DetailsPerfilComponent implements OnInit {

  public respuser?:RequestUser;
  public listusernew:any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private listuserservice: UserService,
  ) {}

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((paramMap:any) =>{
      const {params}=paramMap
      console.log(params.variable);
      //this.cargardatauser(params.variable);
      this.getUser(parseInt(params.variable));

      
    })

  }
/*
  cargardatauser(id:string){
    this.listuserservice.getuserdatos(`https://jsonplaceholder.typicode.com/users/${id}`)
    .subscribe((respUser:RequestUser) =>{
      this.respuser=respUser ;
      console.log(respUser)
  })
  }
  */
  getUser(id:number){
    this.listuserservice.getuser('https://jsonplaceholder.typicode.com/users/')
    .subscribe((resp:RequestUser[]) => {
    this.listusernew=resp.filter((e)=> e.id===id);
    console.log(this.listusernew)
    })
  }


  Regresar(){
    this.router.navigate(['/usuarios']);
  }

}
