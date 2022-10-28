import { Injectable } from '@angular/core';
import {quizzes } from './api/quizzes';
import { Quiz } from './quiz.types';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  
  constructor() { }
  getQuizzes(): Quiz[] { { 
    return quizzes;
  }
}
}
