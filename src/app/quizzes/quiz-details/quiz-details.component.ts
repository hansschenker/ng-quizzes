import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'hs-quiz-details',
  template: `
    <p>
      quiz-details works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
