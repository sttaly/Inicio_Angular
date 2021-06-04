import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

 page :any;
 token :any;

  constructor( 
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(){
    this.token = this.activatedRoute.snapshot.paramMap.get('token');
  }
  openTablePost(){
    this.router.navigate(['/posts']);
  }
  openTableUsuarios(){
    this.router.navigate(['/usuarios']);
  }

}
