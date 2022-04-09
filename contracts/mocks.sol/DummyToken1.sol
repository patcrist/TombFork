// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DummyToken1 is ERC20 {

    constructor() public ERC20("DummyToken1", "DUM1"){
        _mint(msg.sender, 100_000_000 * decimals());
    }

}