abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_numItems",
				"type": "uint256"
			},
			{
				"name": "_comment",
				"type": "string"
			}
		],
		"name": "answer",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
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
		"name": "checked",
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
		"name": "provRegister",
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
		"name": "question",
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
		"name": "reputateQuestioner",
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
		"name": "reputateRespondent",
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
				"name": "numQuestion",
				"type": "int256"
			},
			{
				"name": "numAnswer",
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
				"type": "address"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "answer",
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
		"name": "question",
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
		"name": "questionInfos1",
		"outputs": [
			{
				"name": "questionerAddr",
				"type": "address"
			},
			{
				"name": "respondentAddr",
				"type": "address"
			},
			{
				"name": "questioner",
				"type": "string"
			},
			{
				"name": "respondent",
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
				"name": "comment",
				"type": "string"
			},
			{
				"name": "reward",
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
		"name": "questionInfos2",
		"outputs": [
			{
				"name": "provRegistration",
				"type": "bool"
			},
			{
				"name": "answered",
				"type": "bool"
			},
			{
				"name": "checked",
				"type": "bool"
			},
			{
				"name": "questionerReputation",
				"type": "bool"
			},
			{
				"name": "respondentReputation",
				"type": "bool"
			},
			{
				"name": "stopQuestion",
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
