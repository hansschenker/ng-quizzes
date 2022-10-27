import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'hs-quiz-form',
  template: `
    <p>
      quiz-form works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
