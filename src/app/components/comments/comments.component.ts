import { Component, OnInit } from '@angular/core';
import { RootService } from 'src/app/services/root.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  public comments : any = null;
  public displayedColumns: string[] =
  ['text', 'important', 'taskId'];

  constructor(private rootService: RootService) {
   }

  ngOnInit() {
  }

  filterComments(filter : string){
    this.rootService.getAllCommentsAndFilter(filter).subscribe(c => {
      this.comments = c;
      console.log(c);
    });
  }
}
