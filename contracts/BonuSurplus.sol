// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract BonuSurplus is ERC20, ERC20Burnable {
    constructor() ERC20("Surplus Token", "BNSY") {
        // Mint 10 trillion tokens (10_000_000_000_000) with 18 decimals to deployer
        _mint(msg.sender, 10_000_000_000_000 * 10 ** decimals());
    }
}
