export const COLOSSUS_ABI = [{
        "inputs": [{
                "internalType": "address",
                "name": "_owner",
                "type": "address"
            },
            {
                "internalType": "contract IDarkForestCore",
                "name": "_coreContract",
                "type": "address"
            },
            {
                "internalType": "contract IDarkForestTokens",
                "name": "_tokensContract",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "player",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "points",
                "type": "uint256"
            }
        ],
        "name": "Contribution",
        "type": "event"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "name": "ARTIFACT_POINT_VALUES",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "name": "contributions",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "coreContract",
        "outputs": [{
            "internalType": "contract IDarkForestCore",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "uint256[2]",
                "name": "_a",
                "type": "uint256[2]"
            },
            {
                "internalType": "uint256[2][2]",
                "name": "_b",
                "type": "uint256[2][2]"
            },
            {
                "internalType": "uint256[2]",
                "name": "_c",
                "type": "uint256[2]"
            },
            {
                "internalType": "uint256[8]",
                "name": "_input",
                "type": "uint256[8]"
            }
        ],
        "name": "initializePlayer",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "name": "planetOwners",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "playerCounter",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "name": "players",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "uint256[]",
                "name": "_spacetimeRipIds",
                "type": "uint256[]"
            },
            {
                "components": [{
                        "internalType": "uint256[2]",
                        "name": "a",
                        "type": "uint256[2]"
                    },
                    {
                        "internalType": "uint256[2][2]",
                        "name": "b",
                        "type": "uint256[2][2]"
                    },
                    {
                        "internalType": "uint256[2]",
                        "name": "c",
                        "type": "uint256[2]"
                    },
                    {
                        "internalType": "uint256[7]",
                        "name": "input",
                        "type": "uint256[7]"
                    }
                ],
                "internalType": "struct DaoContractPlayer.FoundryData[]",
                "name": "_foundriesData",
                "type": "tuple[]"
            }
        ],
        "name": "processAndReturnPlanets",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "_owner",
            "type": "address"
        }],
        "name": "setOwner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "tokensContract",
        "outputs": [{
            "internalType": "contract IDarkForestTokens",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256[]",
            "name": "_planetIds",
            "type": "uint256[]"
        }],
        "name": "updatePlanetOwners",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "stateMutability": "payable",
        "type": "receive"
    }
]