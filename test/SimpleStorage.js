const { expect } = require("chai"); // imports asserting functions
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers"); // shares code between tests

describe("SimpleStorage", function () {
  async function deployFixture() {
    // creates, deploys, and returns instance of smart contract to interact with
    const Contract = await ethers.getContractFactory("SimpleStorage");
    const contract = await Contract.deploy();
    await contract.deployed();
    return { contract };
  }

  // nests describe calls to create subsections
  describe("", function () {
    it("should return the initial value", async function () {
      const { contract } = await loadFixture(deployFixture);

      const value = await contract.get(); // calls get function
      expect(value).to.equal(0); // asserts initial value is 0
    });

    it("should set a new value and retrieve it", async function () {
      const { contract } = await loadFixture(deployFixture);

      const newValue = 1; // sets new value
      await contract.set(newValue); // calls set function

      const value = await contract.get(); // calls get function
      expect(value).to.equal(newValue); // asserts value is new value
    });
  });
});