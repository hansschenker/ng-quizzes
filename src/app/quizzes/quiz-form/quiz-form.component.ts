import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'quiz-form',
  template: `
    <h2>Form</h2>
    <form >
      <div>
    
          <label for="title">Title</label>
          <input type="text" id="title" />
    
      </div>
    </form>
  `,
  styles: [
   `
   :host {
    background-color: orange;
   }
   `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
