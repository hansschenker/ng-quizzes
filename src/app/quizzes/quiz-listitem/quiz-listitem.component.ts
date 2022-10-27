import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'hs-quiz-listitem',
  template: `
    <p>
      quiz-listitem works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizListitemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
