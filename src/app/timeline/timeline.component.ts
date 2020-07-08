import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormControl, Validators} from '@angular/forms'

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
  public isValid:boolean=false;
  public isClicked:boolean=false; //ver se posso transformar em um evento

  userForm = new FormGroup({
    header: new FormControl('',[Validators.required, Validators.minLength(4)]),
    content: new FormControl()
});

  constructor() {
   }

  ngOnInit(): void {


  }
  addEntry(){

    let modalCheck = document.getElementById('modalButton')

    if(this.userForm.valid){

      this.isValid=true;
      this.onFormSubmit();
      modalCheck.removeAttribute('data-dismiss');
      modalCheck.setAttribute('data-dismiss', 'modal');

      this.getContentObj = {
        head:this.userForm.get('header').value,
        content:this.userForm.get('content').value
      };

      this.counterContentContainer = this.counterContentContainer+1;

      this.getContent.splice(0,0, this.getContentObj)


    }
    else{
      modalCheck.removeAttribute('data-dismiss');
      this.isClicked = true;
    }


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
  addNewEntry(){
    this.isClicked = false;
    this.userForm.reset();
  }


onFormSubmit(): void {
  console.log('Name:' + this.userForm.get('header').value);

}
get header() {
  return this.userForm.get('header');
}
get content() {
  return this.userForm.get('content');
}

}
