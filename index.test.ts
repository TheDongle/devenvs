import { describe } from "mocha";
import { main } from "./index.js";
import { expect } from "chai";

describe("Main", () => {
  it("is true", () => {
    expect(main()).to.equal(true)
  })
})