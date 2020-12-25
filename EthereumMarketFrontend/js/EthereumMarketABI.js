abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_numItems",
				"type": "uint256"
			}
		],
		"name": "finishRequest",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "kill",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_studentNum",
				"type": "uint256"
			}
		],
		"name": "modifyAccount",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_numItems",
				"type": "uint256"
			},
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_description",
				"type": "string"
			},
			{
				"name": "_reward",
				"type": "uint256"
			},
			{
				"name": "_googleDocID",
				"type": "string"
			},
			{
				"name": "_IPFSHash",
				"type": "string"
			}
		],
		"name": "modifyItem",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_numItems",
				"type": "uint256"
			}
		],
		"name": "ownerStop",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_numItems",
				"type": "uint256"
			}
		],
		"name": "receiveRequest",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_studentNum",
				"type": "uint256"
			}
		],
		"name": "registerAccount",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_numItems",
				"type": "uint256"
			},
			{
				"name": "_reputate",
				"type": "int256"
			}
		],
		"name": "reputate1",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_numItems",
				"type": "uint256"
			},
			{
				"name": "_reputate",
				"type": "int256"
			}
		],
		"name": "reputate2",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_numItems",
				"type": "uint256"
			}
		],
		"name": "sellerStop",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_numItems",
				"type": "uint256"
			}
		],
		"name": "setFinish",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_description",
				"type": "string"
			},
			{
				"name": "_reward",
				"type": "uint256"
			},
			{
				"name": "_googleDocID",
				"type": "string"
			},
			{
				"name": "_ipfsHash",
				"type": "string"
			}
		],
		"name": "setRequest",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_stopped",
				"type": "bool"
			}
		],
		"name": "toggleCircuit",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "accounts",
		"outputs": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "studentNum",
				"type": "uint256"
			},
			{
				"name": "numTransactions",
				"type": "uint256"
			},
			{
				"name": "reputations",
				"type": "int256"
			},
			{
				"name": "resistered",
				"type": "bool"
			},
			{
				"name": "numOrder",
				"type": "int256"
			},
			{
				"name": "numreceive",
				"type": "int256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "images",
		"outputs": [
			{
				"name": "googleDocID",
				"type": "string"
			},
			{
				"name": "ipfsHash",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "numItems",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "orderRequest",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "receiveRequest",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "refundFlags",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "requestInfos",
		"outputs": [
			{
				"name": "orderAddr",
				"type": "address"
			},
			{
				"name": "receiveAddr",
				"type": "address"
			},
			{
				"name": "client",
				"type": "string"
			},
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "description",
				"type": "string"
			},
			{
				"name": "reward",
				"type": "uint256"
			},
			{
				"name": "receiveFinish",
				"type": "bool"
			},
			{
				"name": "actFinish",
				"type": "bool"
			},
			{
				"name": "clientFinish",
				"type": "bool"
			},
			{
				"name": "clientReputate",
				"type": "bool"
			},
			{
				"name": "receiverReputate",
				"type": "bool"
			},
			{
				"name": "stopOrder",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "stopped",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]