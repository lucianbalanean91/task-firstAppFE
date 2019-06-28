import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    
  }

  home() {
    this.router.navigate(['']);
  }
  tasksManagement(){
   this.router.navigate(['/tasks'])
   
  }
  usersManagement(){
  this.router.navigate(['/users'])
  // console.log(result);
  }
  userRolesManagement(){
    this.router.navigate(['/userRoles'])
  }
  commentsManagement(){
    this.router.navigate(['/comments'])
  }
  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
    window.location.reload();
  }

}
