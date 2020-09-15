import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class MagicBallService {
  public answers: string[] = [
    "Yes",
    "No",
    "Maybe"
  ];

  getAnswers() {
    return this.answers;
  }

  getRandomAnswer() {
    return this.answers[this.getRandomInt(0, this.answers.length - 1)];
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}