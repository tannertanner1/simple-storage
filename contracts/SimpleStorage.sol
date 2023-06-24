// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.17;

contract SimpleStorage {
  uint256 public value;

  function get() public view returns(uint256) {
    return value;
  }

  function set(uint256 x) public {
    value = x;
  }
}