// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BadgeNFT is ERC721URIStorage, Ownable {
    constructor() ERC721("ReferralBadge", "RBADGE") Ownable(msg.sender) {}

    function mintBadge(address recipient, uint256 tokenId, string memory uri) public onlyOwner {
        _mint(recipient, tokenId);
        _setTokenURI(tokenId, uri);
    }
}
