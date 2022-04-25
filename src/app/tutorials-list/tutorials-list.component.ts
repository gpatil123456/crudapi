import { Component, OnInit } from '@angular/core';
import { TutorialService } from '../tutorial.service';
import { Tutorial } from '../models/tutorial'; 

@Component({
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  styleUrls: ['./tutorials-list.component.css']
})
// export class TutorialsListComponent implements OnInit {
// tutorial?:Tutorial[]
//   constructor(private tutoria:TutorialService) { }

//   ngOnInit(): void {
//    this.retrieve()
//   }
  
//   retrieve(){
//     this.tutoria.getAll().subscribe(data=>{
//    this.tutorial=data;
//    console.log(data); 
//   },
//   error=>{
//     console.log(error);
//  });


 
export class TutorialsListComponent implements OnInit {
  tutorial?: Tutorial[];
  currentTutorial: Tutorial = {
    id: undefined,
    title: undefined,
    description: undefined
  };
  currentIndex = -1;
  title = '';
  constructor(private tutorialService: TutorialService) { }
  ngOnInit(): void {
    //this.retrieve()
    this.retrieveTutorials();
  }
  retrieveTutorials(): void {
    this.tutorialService.getAll()
      .subscribe(
        data => {
          this.tutorial = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  refreshList(): void {
    this.retrieveTutorials();
    this.currentTutorial = {
      id:'',
      title:'',
      description:'',
      published:''
    };
    this.currentIndex = -1;
  }
  setActiveTutorial(tutorial: Tutorial, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }
  removeAllTutorials(): void {
    this.tutorialService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }
  searchTitle(): void {
    this.currentTutorial = {id:'',
    title:'',
    description:'',
    published:''
  };
    this.currentIndex = -1;
    this.tutorialService.findByTitle(this.title)
      .subscribe(
        data => {
          this.tutorial= data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  
}
