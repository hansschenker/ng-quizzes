import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'hs-quiz-list',
  template: `
    <p>
      quiz-list works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
