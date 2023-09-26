pragma solidity >=0.4.0 <0.9.0;

contract Identity {
    uint age = 22;
    string username = "agismandala";
    string private _email = "agisdrive13@gmail.com";

    struct Blockchain {
        uint id;
        string name;
    }

    Blockchain[] public blockchains;

    function getEmail() public view returns (string memory) {
        return _email;
    }

    function _createBlockchain(uint _id, string memory _name) private {
        blockchains.push(Blockchain(_id, _name));
    }
}


