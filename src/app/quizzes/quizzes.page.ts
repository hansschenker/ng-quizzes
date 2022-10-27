import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'hs-quizzes',
  template: `
    <p>
      quizzes works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizzesPage implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
