import { Given, When, Then } from "cucumber";
import assert from "assert";

function isItFriday(today: string) {
  return today === "Friday" ? "Yes" : "Nope";
}

Given("today is {string}", function (this: any, expectedDay: string) {
  this.today = expectedDay;
});

When("I ask whether it's Friday yet", function (this: any) {
  this.actualAnswer = isItFriday(this.today);
});

Then("I should be told {string}", function (this: any, expectedAnswer: string) {
  assert.equal(this.actualAnswer, expectedAnswer);
});
