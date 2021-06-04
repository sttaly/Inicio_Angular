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

  public respuser:any=[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private listuserservice: UserService,
  ) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((paramMap:any) =>{
      const {params}=paramMap
      console.log(params.variable);
      this.cargardatauser(params.variable);
      
    })

  }

  cargardatauser(id:string){
    this.listuserservice.getuserdatos(`https://jsonplaceholder.typicode.com/users/${id}`).subscribe((respUser:RequestUser[]) =>{
      this.respuser=Object.values(respUser) ;
      console.log(this.respuser[2])
  })
  }


  Regresar(){
    this.router.navigate(['/usuarios']);
  }

}
