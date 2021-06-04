import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-principal-table-users',
  templateUrl: './principal-table-users.component.html',
  styleUrls: ['./principal-table-users.component.scss']
})
export class PrincipalTableUsersComponent implements OnInit {

  public listUser:any =[];
  /*
  listauser:any;
  */

  constructor(
    private router: Router,
    private listuserservice: UserService,
  ) { }

  ngOnInit(){
    /*user
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resUser => {  return resUser.json() })
    .then(dataUser => { 
      console.log(dataUser),
      this.listauser = dataUser
    })
    */
    this.cargardata();
  }
  public cargardata(){
    this.listuserservice.getuser('https://jsonplaceholder.typicode.com/users').subscribe(resp =>{
      this.listUser=resp;
    })
  }

  Regresar(){
    this.router.navigate(['']);
  }
}
