const revFac = require("../factorialTask");

const { expect } = require("chai");

describe("factorial tests", () => {
    it("should be 5!", () => {
        expect(revFac(120)).to.equal(5+"!")
    })
});