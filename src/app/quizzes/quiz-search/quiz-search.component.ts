import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'hs-quiz-search',
  template: `
    <p>
      quiz-search works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
