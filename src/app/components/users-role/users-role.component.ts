import { Component, OnInit } from '@angular/core';
import { RootService } from 'src/app/services/root.service';

@Component({
  selector: 'app-users-role',
  templateUrl: './users-role.component.html',
  styleUrls: ['./users-role.component.scss']
})
export class UserRolesComponent implements OnInit {

  public userRoles: any = null;
  public displayedColumns: string[] =
   ['id','title'];

  constructor(private rootService: RootService) {
     this.getAllUserRoles();
    }

  ngOnInit() {
  }

  getAllUserRoles() {
      // this.users = []
    
      this.rootService.getAllUserRoles().subscribe(ur => {
        this.userRoles = ur;
        console.log(ur);
      });
  }
}
