pragma solidity ^0.8.7;

contract MyFirstSmartContract {

    uint256 number;

    function setNumber(uint256 _number) public {
        number = _number;
    }

    function getNumber() public view returns (uint256){
        return number;
    }
}
