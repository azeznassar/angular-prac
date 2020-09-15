import { TestBed } from '@angular/core/testing';

import { MagicBallService } from './magic-ball.service';

//UNIT TESTS 
//Based on https://www.joshmorony.com/how-to-unit-test-an-ionic-2-application/
// https://way2programming.com/angular/unit-testing


// ARTICLE ON e2e: https://www.joshmorony.com/e2e-end-to-end-testing-in-ionic-2-an-introduction/
// https://www.protractortest.org/#/tutorial

describe('MagicBallService', () => {
  let service: MagicBallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MagicBallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should return a non empty array", () => {
    let result = service.getAnswers();

    expect(Array.isArray(result)).toBeTruthy;
    expect(result.length).toBeGreaterThan(0);
  });

  it("should return one random answer as a string", () => {
    expect(typeof service.getRandomAnswer()).toBe("string");
  });

  it("should have both yes and no available in result set", () => {
    let result = service.getAnswers();

    expect(result).toContain("Yes");
    expect(result).toContain("No");
  });

  it("should have maybe available in the result set", () => {
    let result = service.getAnswers();
    expect(result).toContain("Maybe");
  })
});

