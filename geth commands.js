
abi=[{"constant":false,"inputs":[{"name":"contractAddress","type":"address"},{"name":"investorAddress","type":"address"}],"name":"issuerTransfer","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"myid","type":"bytes32"},{"name":"result","type":"string"}],"name":"__callback","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"myid","type":"bytes32"},{"name":"result","type":"string"},{"name":"proof","type":"bytes"}],"name":"__callback","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getRequests","outputs":[{"name":"","type":"address[]"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"pIssuance","type":"address"},{"name":"pFaceValue","type":"uint256"},{"name":"pValueDate","type":"uint256"},{"name":"pMaturityDate","type":"uint256"}],"name":"addPaper","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getPapers","outputs":[{"name":"","type":"address[]"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"contractAddress","type":"address"}],"name":"investorReject","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"contractAddress","type":"address"}],"name":"investorAccept","outputs":[],"payable":true,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"action","type":"string"},{"indexed":false,"name":"result","type":"string"},{"indexed":false,"name":"contractAddress","type":"address"}],"name":"Event","type":"event"}]
address="0xd23e5697766cd500574b78c18b412e180c0153e6"
cp=web3.eth.contract(abi).at(address);

issuer="0xca843569e3427144cead5e4d5999a3d0ccf92b8e";
contract=""
investor="0x0638e1574728b6d862dd5d3a3e0942c3be47d996"
 web3.eth.defaultAccount=eth.accounts[0]
 
 cp.addPaper(issuer,1000,1495775455,1495775555)