
import { Component, OnInit } from '@angular/core';
import { RootService } from 'src/app/services/root.service';



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  // public totalEntries : any = null;
  // public entries: any = null;
  public tasks: any = null;
  public displayedColumns: string[] =
   ['title', 'description', 'added','deadline','numberOfComments','closedAt','importance','state'];


  constructor(private rootService: RootService) {
     this.getAllTasks(0);
    }

  ngOnInit() {
    }

  getAllTasks(x: number) {
      // this.tasks = []
    
      this.rootService.getAllTasks(x).subscribe(t => {
        this.tasks = t;
        console.log(t);
      });
  
  }
  getAllFilterDate(startDate:Date,endDate:Date) {
    this.rootService.getAllFilterDate(startDate,endDate).subscribe(t => {
      this.tasks = t;
      console.log(t);
    });

}
 public handlePage(e: any){
    this.getAllTasks(e.pageIndex);
  }

 
}
