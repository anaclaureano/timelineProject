import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  public counterContentContainer:number =0;

  public getContent: any[] = [];
  public edit:boolean=false;
  public getContentObj:object;

  userForm = new FormGroup({
    header: new FormControl(),
    content: new FormControl()
});

  constructor() {
   }

  ngOnInit(): void {


  }
  addEntry(){


    this.getContentObj = {
      head:this.userForm.get('header').value,
      content:this.userForm.get('content').value
    };

    this.counterContentContainer = this.counterContentContainer+1;

    this.getContent.splice(0,0, this.getContentObj)

  }
  enableEdit(i){
    this.edit=true;
  }
  desableEdit(i){
    this.getContent[i]  = {
      head:this.getContent[i].head,
      content:this.userForm.get('content').value
    };
    this.edit=false;
    console.log(i);

  }


  onFormSubmit(): void {
    console.log('Name:' + this.userForm.get('name').value);
}


}
