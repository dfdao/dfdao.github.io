export default [{
        "anonymous": false,
        "inputs": [{
                "indexed": false,
                "internalType": "uint256",
                "name": "loc",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "enum ArtifactType",
                "name": "artifactType",
                "type": "uint8"
            }
        ],
        "name": "AdminGiveSpaceship",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": false,
                "internalType": "uint256",
                "name": "loc",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "AdminOwnershipChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
            "indexed": false,
            "internalType": "uint256",
            "name": "loc",
            "type": "uint256"
        }],
        "name": "AdminPlanetCreated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
            "indexed": false,
            "internalType": "bool",
            "name": "paused",
            "type": "bool"
        }],
        "name": "PauseStateChanged",
        "type": "event"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "playerAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "addScore",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "uint256",
                "name": "locationId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "enum ArtifactType",
                "name": "artifactType",
                "type": "uint8"
            }
        ],
        "name": "adminGiveSpaceShip",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "uint256",
                "name": "locationId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "perlin",
                "type": "uint256"
            }
        ],
        "name": "adminInitializePlanet",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "_newRadius",
            "type": "uint256"
        }],
        "name": "adminSetWorldRadius",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "newCooldown",
            "type": "uint256"
        }],
        "name": "changeLocationRevealCooldown",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "_newConstant",
            "type": "uint256"
        }],
        "name": "changeWorldRadiusMin",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "components": [{
                    "internalType": "uint256",
                    "name": "location",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "perlin",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "level",
                    "type": "uint256"
                },
                {
                    "internalType": "enum PlanetType",
                    "name": "planetType",
                    "type": "uint8"
                },
                {
                    "internalType": "bool",
                    "name": "requireValidLocationId",
                    "type": "bool"
                }
            ],
            "internalType": "struct AdminCreatePlanetArgs",
            "name": "args",
            "type": "tuple"
        }],
        "name": "createPlanet",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "playerAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "deductScore",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "pause",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            },
            {
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
        "name": "safeSetOwner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "uint256",
                "name": "planetId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "setOwner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "bool",
            "name": "enabled",
            "type": "bool"
        }],
        "name": "setPlanetTransferEnabled",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "newTokenMintEndTime",
            "type": "uint256"
        }],
        "name": "setTokenMintEndTime",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "unpause",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "ApprovalForAll",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": false,
                "internalType": "address",
                "name": "player",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "artifactId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "loc",
                "type": "uint256"
            }
        ],
        "name": "ArtifactActivated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": false,
                "internalType": "address",
                "name": "player",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "artifactId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "loc",
                "type": "uint256"
            }
        ],
        "name": "ArtifactDeactivated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": false,
                "internalType": "address",
                "name": "player",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "artifactId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "loc",
                "type": "uint256"
            }
        ],
        "name": "ArtifactDeposited",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": false,
                "internalType": "address",
                "name": "player",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "artifactId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "loc",
                "type": "uint256"
            }
        ],
        "name": "ArtifactFound",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": false,
                "internalType": "address",
                "name": "player",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "artifactId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "loc",
                "type": "uint256"
            }
        ],
        "name": "ArtifactWithdrawn",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": false,
                "internalType": "address",
                "name": "player",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "loc",
                "type": "uint256"
            }
        ],
        "name": "PlanetProspected",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [{
                "internalType": "uint256",
                "name": "locationId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "artifactId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "wormholeTo",
                "type": "uint256"
            }
        ],
        "name": "activateArtifact",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "components": [{
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "discoverer",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "planetId",
                    "type": "uint256"
                },
                {
                    "internalType": "enum ArtifactRarity",
                    "name": "rarity",
                    "type": "uint8"
                },
                {
                    "internalType": "enum Biome",
                    "name": "biome",
                    "type": "uint8"
                },
                {
                    "internalType": "enum ArtifactType",
                    "name": "artifactType",
                    "type": "uint8"
                },
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "controller",
                    "type": "address"
                }
            ],
            "internalType": "struct DFTCreateArtifactArgs",
            "name": "args",
            "type": "tuple"
        }],
        "name": "adminGiveArtifact",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "account",
            "type": "address"
        }],
        "name": "balanceOf",
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
            "components": [{
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "discoverer",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "planetId",
                    "type": "uint256"
                },
                {
                    "internalType": "enum ArtifactRarity",
                    "name": "rarity",
                    "type": "uint8"
                },
                {
                    "internalType": "enum Biome",
                    "name": "biome",
                    "type": "uint8"
                },
                {
                    "internalType": "enum ArtifactType",
                    "name": "artifactType",
                    "type": "uint8"
                },
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "controller",
                    "type": "address"
                }
            ],
            "internalType": "struct DFTCreateArtifactArgs",
            "name": "args",
            "type": "tuple"
        }],
        "name": "createArtifact",
        "outputs": [{
            "components": [{
                    "internalType": "bool",
                    "name": "isInitialized",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "planetDiscoveredOn",
                    "type": "uint256"
                },
                {
                    "internalType": "enum ArtifactRarity",
                    "name": "rarity",
                    "type": "uint8"
                },
                {
                    "internalType": "enum Biome",
                    "name": "planetBiome",
                    "type": "uint8"
                },
                {
                    "internalType": "uint256",
                    "name": "mintedAtTimestamp",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "discoverer",
                    "type": "address"
                },
                {
                    "internalType": "enum ArtifactType",
                    "name": "artifactType",
                    "type": "uint8"
                },
                {
                    "internalType": "uint256",
                    "name": "activations",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "lastActivated",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "lastDeactivated",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "wormholeTo",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "controller",
                    "type": "address"
                }
            ],
            "internalType": "struct Artifact",
            "name": "",
            "type": "tuple"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "locationId",
            "type": "uint256"
        }],
        "name": "deactivateArtifact",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "uint256",
                "name": "locationId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "artifactId",
                "type": "uint256"
            }
        ],
        "name": "depositArtifact",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        }],
        "name": "doesArtifactExist",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
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
                "internalType": "uint256[7]",
                "name": "_input",
                "type": "uint256[7]"
            }
        ],
        "name": "findArtifact",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        }],
        "name": "getApproved",
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
            "name": "tokenId",
            "type": "uint256"
        }],
        "name": "getArtifact",
        "outputs": [{
            "components": [{
                    "internalType": "bool",
                    "name": "isInitialized",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "planetDiscoveredOn",
                    "type": "uint256"
                },
                {
                    "internalType": "enum ArtifactRarity",
                    "name": "rarity",
                    "type": "uint8"
                },
                {
                    "internalType": "enum Biome",
                    "name": "planetBiome",
                    "type": "uint8"
                },
                {
                    "internalType": "uint256",
                    "name": "mintedAtTimestamp",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "discoverer",
                    "type": "address"
                },
                {
                    "internalType": "enum ArtifactType",
                    "name": "artifactType",
                    "type": "uint8"
                },
                {
                    "internalType": "uint256",
                    "name": "activations",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "lastActivated",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "lastDeactivated",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "wormholeTo",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "controller",
                    "type": "address"
                }
            ],
            "internalType": "struct Artifact",
            "name": "",
            "type": "tuple"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "idx",
            "type": "uint256"
        }],
        "name": "getArtifactAtIndex",
        "outputs": [{
            "components": [{
                    "internalType": "bool",
                    "name": "isInitialized",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "planetDiscoveredOn",
                    "type": "uint256"
                },
                {
                    "internalType": "enum ArtifactRarity",
                    "name": "rarity",
                    "type": "uint8"
                },
                {
                    "internalType": "enum Biome",
                    "name": "planetBiome",
                    "type": "uint8"
                },
                {
                    "internalType": "uint256",
                    "name": "mintedAtTimestamp",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "discoverer",
                    "type": "address"
                },
                {
                    "internalType": "enum ArtifactType",
                    "name": "artifactType",
                    "type": "uint8"
                },
                {
                    "internalType": "uint256",
                    "name": "activations",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "lastActivated",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "lastDeactivated",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "wormholeTo",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "controller",
                    "type": "address"
                }
            ],
            "internalType": "struct Artifact",
            "name": "",
            "type": "tuple"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "playerId",
            "type": "address"
        }],
        "name": "getPlayerArtifactIds",
        "outputs": [{
            "internalType": "uint256[]",
            "name": "",
            "type": "uint256[]"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "locationId",
            "type": "uint256"
        }],
        "name": "giveSpaceShips",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            }
        ],
        "name": "isApprovedForAll",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        }],
        "name": "ownerOf",
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
            "name": "locationId",
            "type": "uint256"
        }],
        "name": "prospectPlanet",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "status",
                "type": "bool"
            }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
        }],
        "name": "tokenByIndex",
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
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "tokenOfOwnerByIndex",
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
            "name": "tokenId",
            "type": "uint256"
        }],
        "name": "tokenURI",
        "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
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
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferArtifact",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [{
            "components": [{
                    "internalType": "bool",
                    "name": "isInitialized",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "planetDiscoveredOn",
                    "type": "uint256"
                },
                {
                    "internalType": "enum ArtifactRarity",
                    "name": "rarity",
                    "type": "uint8"
                },
                {
                    "internalType": "enum Biome",
                    "name": "planetBiome",
                    "type": "uint8"
                },
                {
                    "internalType": "uint256",
                    "name": "mintedAtTimestamp",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "discoverer",
                    "type": "address"
                },
                {
                    "internalType": "enum ArtifactType",
                    "name": "artifactType",
                    "type": "uint8"
                },
                {
                    "internalType": "uint256",
                    "name": "activations",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "lastActivated",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "lastDeactivated",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "wormholeTo",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "controller",
                    "type": "address"
                }
            ],
            "internalType": "struct Artifact",
            "name": "updatedArtifact",
            "type": "tuple"
        }],
        "name": "updateArtifact",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "uint256",
                "name": "locationId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "artifactId",
                "type": "uint256"
            }
        ],
        "name": "withdrawArtifact",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": false,
                "internalType": "address",
                "name": "player",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "loc",
                "type": "uint256"
            }
        ],
        "name": "PlanetCaptured",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": false,
                "internalType": "address",
                "name": "player",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "loc",
                "type": "uint256"
            }
        ],
        "name": "PlanetInvaded",
        "type": "event"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "locationId",
            "type": "uint256"
        }],
        "name": "capturePlanet",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "n",
            "type": "uint256"
        }],
        "name": "getIntFromUInt",
        "outputs": [{
            "internalType": "int256",
            "name": "",
            "type": "int256"
        }],
        "stateMutability": "pure",
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
                "internalType": "uint256[9]",
                "name": "_input",
                "type": "uint256[9]"
            }
        ],
        "name": "invadePlanet",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "uint256",
                "name": "x",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "y",
                "type": "uint256"
            }
        ],
        "name": "planetInCaptureZone",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": false,
                "internalType": "address",
                "name": "revealer",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "loc",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "x",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "y",
                "type": "uint256"
            }
        ],
        "name": "LocationRevealed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": false,
                "internalType": "address",
                "name": "player",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "loc",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "tohatLevel",
                "type": "uint256"
            }
        ],
        "name": "PlanetHatBought",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": false,
                "internalType": "address",
                "name": "player",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "loc",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "PlanetSilverWithdrawn",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": false,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "loc",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            }
        ],
        "name": "PlanetTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": false,
                "internalType": "address",
                "name": "player",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "loc",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "branch",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "toBranchLevel",
                "type": "uint256"
            }
        ],
        "name": "PlanetUpgraded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": false,
                "internalType": "address",
                "name": "player",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "loc",
                "type": "uint256"
            }
        ],
        "name": "PlayerInitialized",
        "type": "event"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "_location",
            "type": "uint256"
        }],
        "name": "buyHat",
        "outputs": [],
        "stateMutability": "payable",
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
                "internalType": "uint256[9]",
                "name": "_input",
                "type": "uint256[9]"
            }
        ],
        "name": "checkRevealProof",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "uint256",
                "name": "location",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "getRefreshedPlanet",
        "outputs": [{
                "components": [{
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "range",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "speed",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "defense",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "population",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "populationCap",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "populationGrowth",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "silverCap",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "silverGrowth",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "silver",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "planetLevel",
                        "type": "uint256"
                    },
                    {
                        "internalType": "enum PlanetType",
                        "name": "planetType",
                        "type": "uint8"
                    },
                    {
                        "internalType": "bool",
                        "name": "isHomePlanet",
                        "type": "bool"
                    }
                ],
                "internalType": "struct Planet",
                "name": "",
                "type": "tuple"
            },
            {
                "components": [{
                        "internalType": "bool",
                        "name": "isInitialized",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "createdAt",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "lastUpdated",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "perlin",
                        "type": "uint256"
                    },
                    {
                        "internalType": "enum SpaceType",
                        "name": "spaceType",
                        "type": "uint8"
                    },
                    {
                        "internalType": "uint256",
                        "name": "upgradeState0",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "upgradeState1",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "upgradeState2",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "hatLevel",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "hasTriedFindingArtifact",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "prospectedBlockNumber",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "destroyed",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "spaceJunk",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct PlanetExtendedInfo",
                "name": "",
                "type": "tuple"
            },
            {
                "components": [{
                        "internalType": "bool",
                        "name": "isInitialized",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "pausers",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "invader",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "invadeStartBlock",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "capturer",
                        "type": "address"
                    }
                ],
                "internalType": "struct PlanetExtendedInfo2",
                "name": "",
                "type": "tuple"
            },
            {
                "internalType": "uint256[12]",
                "name": "eventsToRemove",
                "type": "uint256[12]"
            },
            {
                "internalType": "uint256[12]",
                "name": "artifactsToAdd",
                "type": "uint256[12]"
            }
        ],
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
        "inputs": [{
            "internalType": "uint256",
            "name": "location",
            "type": "uint256"
        }],
        "name": "refreshPlanet",
        "outputs": [],
        "stateMutability": "nonpayable",
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
                "internalType": "uint256[9]",
                "name": "_input",
                "type": "uint256[9]"
            }
        ],
        "name": "revealLocation",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "uint256",
                "name": "_location",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_player",
                "type": "address"
            }
        ],
        "name": "transferPlanet",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "uint256",
                "name": "_location",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_branch",
                "type": "uint256"
            }
        ],
        "name": "upgradePlanet",
        "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "uint256",
                "name": "locationId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "withdrawSilver",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "locationId",
            "type": "uint256"
        }],
        "name": "adminFillPlanet",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "TOKEN_MINT_END_TIMESTAMP",
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
        "name": "adminAddress",
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
            "name": "key",
            "type": "uint256"
        }],
        "name": "artifactIdToPlanetId",
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
            "name": "key",
            "type": "uint256"
        }],
        "name": "artifactIdToVoyageId",
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
                "name": "startIdx",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "endIdx",
                "type": "uint256"
            }
        ],
        "name": "bulkGetArtifacts",
        "outputs": [{
            "components": [{
                    "components": [{
                            "internalType": "bool",
                            "name": "isInitialized",
                            "type": "bool"
                        },
                        {
                            "internalType": "uint256",
                            "name": "id",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "planetDiscoveredOn",
                            "type": "uint256"
                        },
                        {
                            "internalType": "enum ArtifactRarity",
                            "name": "rarity",
                            "type": "uint8"
                        },
                        {
                            "internalType": "enum Biome",
                            "name": "planetBiome",
                            "type": "uint8"
                        },
                        {
                            "internalType": "uint256",
                            "name": "mintedAtTimestamp",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "discoverer",
                            "type": "address"
                        },
                        {
                            "internalType": "enum ArtifactType",
                            "name": "artifactType",
                            "type": "uint8"
                        },
                        {
                            "internalType": "uint256",
                            "name": "activations",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "lastActivated",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "lastDeactivated",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "wormholeTo",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "controller",
                            "type": "address"
                        }
                    ],
                    "internalType": "struct Artifact",
                    "name": "artifact",
                    "type": "tuple"
                },
                {
                    "components": [{
                            "internalType": "uint256",
                            "name": "popCapMultiplier",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "popGroMultiplier",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "rangeMultiplier",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "speedMultiplier",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "defMultiplier",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct Upgrade",
                    "name": "upgrade",
                    "type": "tuple"
                },
                {
                    "components": [{
                            "internalType": "uint256",
                            "name": "popCapMultiplier",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "popGroMultiplier",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "rangeMultiplier",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "speedMultiplier",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "defMultiplier",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct Upgrade",
                    "name": "timeDelayedUpgrade",
                    "type": "tuple"
                },
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "locationId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "voyageId",
                    "type": "uint256"
                }
            ],
            "internalType": "struct ArtifactWithMetadata[]",
            "name": "ret",
            "type": "tuple[]"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256[]",
            "name": "ids",
            "type": "uint256[]"
        }],
        "name": "bulkGetArtifactsByIds",
        "outputs": [{
            "components": [{
                    "components": [{
                            "internalType": "bool",
                            "name": "isInitialized",
                            "type": "bool"
                        },
                        {
                            "internalType": "uint256",
                            "name": "id",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "planetDiscoveredOn",
                            "type": "uint256"
                        },
                        {
                            "internalType": "enum ArtifactRarity",
                            "name": "rarity",
                            "type": "uint8"
                        },
                        {
                            "internalType": "enum Biome",
                            "name": "planetBiome",
                            "type": "uint8"
                        },
                        {
                            "internalType": "uint256",
                            "name": "mintedAtTimestamp",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "discoverer",
                            "type": "address"
                        },
                        {
                            "internalType": "enum ArtifactType",
                            "name": "artifactType",
                            "type": "uint8"
                        },
                        {
                            "internalType": "uint256",
                            "name": "activations",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "lastActivated",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "lastDeactivated",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "wormholeTo",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "controller",
                            "type": "address"
                        }
                    ],
                    "internalType": "struct Artifact",
                    "name": "artifact",
                    "type": "tuple"
                },
                {
                    "components": [{
                            "internalType": "uint256",
                            "name": "popCapMultiplier",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "popGroMultiplier",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "rangeMultiplier",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "speedMultiplier",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "defMultiplier",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct Upgrade",
                    "name": "upgrade",
                    "type": "tuple"
                },
                {
                    "components": [{
                            "internalType": "uint256",
                            "name": "popCapMultiplier",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "popGroMultiplier",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "rangeMultiplier",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "speedMultiplier",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "defMultiplier",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct Upgrade",
                    "name": "timeDelayedUpgrade",
                    "type": "tuple"
                },
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "locationId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "voyageId",
                    "type": "uint256"
                }
            ],
            "internalType": "struct ArtifactWithMetadata[]",
            "name": "ret",
            "type": "tuple[]"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "uint256",
                "name": "startIdx",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "endIdx",
                "type": "uint256"
            }
        ],
        "name": "bulkGetPlanetArrivals",
        "outputs": [{
            "components": [{
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "player",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "fromPlanet",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "toPlanet",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "popArriving",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "silverMoved",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "departureTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "arrivalTime",
                    "type": "uint256"
                },
                {
                    "internalType": "enum ArrivalType",
                    "name": "arrivalType",
                    "type": "uint8"
                },
                {
                    "internalType": "uint256",
                    "name": "carriedArtifactId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "distance",
                    "type": "uint256"
                }
            ],
            "internalType": "struct ArrivalData[][]",
            "name": "",
            "type": "tuple[][]"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256[]",
            "name": "ids",
            "type": "uint256[]"
        }],
        "name": "bulkGetPlanetArrivalsByIds",
        "outputs": [{
            "components": [{
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "player",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "fromPlanet",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "toPlanet",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "popArriving",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "silverMoved",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "departureTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "arrivalTime",
                    "type": "uint256"
                },
                {
                    "internalType": "enum ArrivalType",
                    "name": "arrivalType",
                    "type": "uint8"
                },
                {
                    "internalType": "uint256",
                    "name": "carriedArtifactId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "distance",
                    "type": "uint256"
                }
            ],
            "internalType": "struct ArrivalData[][]",
            "name": "",
            "type": "tuple[][]"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256[]",
            "name": "planetIds",
            "type": "uint256[]"
        }],
        "name": "bulkGetPlanetArtifacts",
        "outputs": [{
            "components": [{
                    "components": [{
                            "internalType": "bool",
                            "name": "isInitialized",
                            "type": "bool"
                        },
                        {
                            "internalType": "uint256",
                            "name": "id",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "planetDiscoveredOn",
                            "type": "uint256"
                        },
                        {
                            "internalType": "enum ArtifactRarity",
                            "name": "rarity",
                            "type": "uint8"
                        },
                        {
                            "internalType": "enum Biome",
                            "name": "planetBiome",
                            "type": "uint8"
                        },
                        {
                            "internalType": "uint256",
                            "name": "mintedAtTimestamp",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "discoverer",
                            "type": "address"
                        },
                        {
                            "internalType": "enum ArtifactType",
                            "name": "artifactType",
                            "type": "uint8"
                        },
                        {
                            "internalType": "uint256",
                            "name": "activations",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "lastActivated",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "lastDeactivated",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "wormholeTo",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "controller",
                            "type": "address"
                        }
                    ],
                    "internalType": "struct Artifact",
                    "name": "artifact",
                    "type": "tuple"
                },
                {
                    "components": [{
                            "internalType": "uint256",
                            "name": "popCapMultiplier",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "popGroMultiplier",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "rangeMultiplier",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "speedMultiplier",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "defMultiplier",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct Upgrade",
                    "name": "upgrade",
                    "type": "tuple"
                },
                {
                    "components": [{
                            "internalType": "uint256",
                            "name": "popCapMultiplier",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "popGroMultiplier",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "rangeMultiplier",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "speedMultiplier",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "defMultiplier",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct Upgrade",
                    "name": "timeDelayedUpgrade",
                    "type": "tuple"
                },
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "locationId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "voyageId",
                    "type": "uint256"
                }
            ],
            "internalType": "struct ArtifactWithMetadata[][]",
            "name": "",
            "type": "tuple[][]"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "uint256",
                "name": "startIdx",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "endIdx",
                "type": "uint256"
            }
        ],
        "name": "bulkGetPlanetIds",
        "outputs": [{
            "internalType": "uint256[]",
            "name": "ret",
            "type": "uint256[]"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "uint256",
                "name": "startIdx",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "endIdx",
                "type": "uint256"
            }
        ],
        "name": "bulkGetPlanets",
        "outputs": [{
            "components": [{
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "range",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "speed",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "defense",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "population",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "populationCap",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "populationGrowth",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "silverCap",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "silverGrowth",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "silver",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "planetLevel",
                    "type": "uint256"
                },
                {
                    "internalType": "enum PlanetType",
                    "name": "planetType",
                    "type": "uint8"
                },
                {
                    "internalType": "bool",
                    "name": "isHomePlanet",
                    "type": "bool"
                }
            ],
            "internalType": "struct Planet[]",
            "name": "ret",
            "type": "tuple[]"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256[]",
            "name": "ids",
            "type": "uint256[]"
        }],
        "name": "bulkGetPlanetsByIds",
        "outputs": [{
            "components": [{
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "range",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "speed",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "defense",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "population",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "populationCap",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "populationGrowth",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "silverCap",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "silverGrowth",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "silver",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "planetLevel",
                    "type": "uint256"
                },
                {
                    "internalType": "enum PlanetType",
                    "name": "planetType",
                    "type": "uint8"
                },
                {
                    "internalType": "bool",
                    "name": "isHomePlanet",
                    "type": "bool"
                }
            ],
            "internalType": "struct Planet[]",
            "name": "ret",
            "type": "tuple[]"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256[]",
            "name": "ids",
            "type": "uint256[]"
        }],
        "name": "bulkGetPlanetsDataByIds",
        "outputs": [{
            "components": [{
                    "components": [{
                            "internalType": "address",
                            "name": "owner",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "range",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "speed",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "defense",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "population",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "populationCap",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "populationGrowth",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "silverCap",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "silverGrowth",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "silver",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "planetLevel",
                            "type": "uint256"
                        },
                        {
                            "internalType": "enum PlanetType",
                            "name": "planetType",
                            "type": "uint8"
                        },
                        {
                            "internalType": "bool",
                            "name": "isHomePlanet",
                            "type": "bool"
                        }
                    ],
                    "internalType": "struct Planet",
                    "name": "planet",
                    "type": "tuple"
                },
                {
                    "components": [{
                            "internalType": "bool",
                            "name": "isInitialized",
                            "type": "bool"
                        },
                        {
                            "internalType": "uint256",
                            "name": "createdAt",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "lastUpdated",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "perlin",
                            "type": "uint256"
                        },
                        {
                            "internalType": "enum SpaceType",
                            "name": "spaceType",
                            "type": "uint8"
                        },
                        {
                            "internalType": "uint256",
                            "name": "upgradeState0",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "upgradeState1",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "upgradeState2",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "hatLevel",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bool",
                            "name": "hasTriedFindingArtifact",
                            "type": "bool"
                        },
                        {
                            "internalType": "uint256",
                            "name": "prospectedBlockNumber",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bool",
                            "name": "destroyed",
                            "type": "bool"
                        },
                        {
                            "internalType": "uint256",
                            "name": "spaceJunk",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct PlanetExtendedInfo",
                    "name": "info",
                    "type": "tuple"
                },
                {
                    "components": [{
                            "internalType": "bool",
                            "name": "isInitialized",
                            "type": "bool"
                        },
                        {
                            "internalType": "uint256",
                            "name": "pausers",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "invader",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "invadeStartBlock",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "capturer",
                            "type": "address"
                        }
                    ],
                    "internalType": "struct PlanetExtendedInfo2",
                    "name": "info2",
                    "type": "tuple"
                },
                {
                    "components": [{
                            "internalType": "uint256",
                            "name": "locationId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "x",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "y",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "revealer",
                            "type": "address"
                        }
                    ],
                    "internalType": "struct RevealedCoords",
                    "name": "revealedCoords",
                    "type": "tuple"
                }
            ],
            "internalType": "struct PlanetData[]",
            "name": "ret",
            "type": "tuple[]"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "uint256",
                "name": "startIdx",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "endIdx",
                "type": "uint256"
            }
        ],
        "name": "bulkGetPlanetsExtendedInfo",
        "outputs": [{
            "components": [{
                    "internalType": "bool",
                    "name": "isInitialized",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "createdAt",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "lastUpdated",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "perlin",
                    "type": "uint256"
                },
                {
                    "internalType": "enum SpaceType",
                    "name": "spaceType",
                    "type": "uint8"
                },
                {
                    "internalType": "uint256",
                    "name": "upgradeState0",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "upgradeState1",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "upgradeState2",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "hatLevel",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "hasTriedFindingArtifact",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "prospectedBlockNumber",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "destroyed",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "spaceJunk",
                    "type": "uint256"
                }
            ],
            "internalType": "struct PlanetExtendedInfo[]",
            "name": "ret",
            "type": "tuple[]"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256[]",
            "name": "ids",
            "type": "uint256[]"
        }],
        "name": "bulkGetPlanetsExtendedInfo2ByIds",
        "outputs": [{
            "components": [{
                    "internalType": "bool",
                    "name": "isInitialized",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "pausers",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "invader",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "invadeStartBlock",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "capturer",
                    "type": "address"
                }
            ],
            "internalType": "struct PlanetExtendedInfo2[]",
            "name": "ret",
            "type": "tuple[]"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256[]",
            "name": "ids",
            "type": "uint256[]"
        }],
        "name": "bulkGetPlanetsExtendedInfoByIds",
        "outputs": [{
            "components": [{
                    "internalType": "bool",
                    "name": "isInitialized",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "createdAt",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "lastUpdated",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "perlin",
                    "type": "uint256"
                },
                {
                    "internalType": "enum SpaceType",
                    "name": "spaceType",
                    "type": "uint8"
                },
                {
                    "internalType": "uint256",
                    "name": "upgradeState0",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "upgradeState1",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "upgradeState2",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "hatLevel",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "hasTriedFindingArtifact",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "prospectedBlockNumber",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "destroyed",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "spaceJunk",
                    "type": "uint256"
                }
            ],
            "internalType": "struct PlanetExtendedInfo[]",
            "name": "ret",
            "type": "tuple[]"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "uint256",
                "name": "startIdx",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "endIdx",
                "type": "uint256"
            }
        ],
        "name": "bulkGetPlayerIds",
        "outputs": [{
            "internalType": "address[]",
            "name": "ret",
            "type": "address[]"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "uint256",
                "name": "startIdx",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "endIdx",
                "type": "uint256"
            }
        ],
        "name": "bulkGetPlayers",
        "outputs": [{
            "components": [{
                    "internalType": "bool",
                    "name": "isInitialized",
                    "type": "bool"
                },
                {
                    "internalType": "address",
                    "name": "player",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "initTimestamp",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "homePlanetId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "lastRevealTimestamp",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "score",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "spaceJunk",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "spaceJunkLimit",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "claimedShips",
                    "type": "bool"
                }
            ],
            "internalType": "struct Player[]",
            "name": "ret",
            "type": "tuple[]"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256[]",
            "name": "ids",
            "type": "uint256[]"
        }],
        "name": "bulkGetRevealedCoordsByIds",
        "outputs": [{
            "components": [{
                    "internalType": "uint256",
                    "name": "locationId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "x",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "y",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "revealer",
                    "type": "address"
                }
            ],
            "internalType": "struct RevealedCoords[]",
            "name": "ret",
            "type": "tuple[]"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "uint256",
                "name": "startIdx",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "endIdx",
                "type": "uint256"
            }
        ],
        "name": "bulkGetRevealedPlanetIds",
        "outputs": [{
            "internalType": "uint256[]",
            "name": "ret",
            "type": "uint256[]"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256[]",
            "name": "ids",
            "type": "uint256[]"
        }],
        "name": "bulkGetVoyagesByIds",
        "outputs": [{
            "components": [{
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "player",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "fromPlanet",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "toPlanet",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "popArriving",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "silverMoved",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "departureTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "arrivalTime",
                    "type": "uint256"
                },
                {
                    "internalType": "enum ArrivalType",
                    "name": "arrivalType",
                    "type": "uint8"
                },
                {
                    "internalType": "uint256",
                    "name": "carriedArtifactId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "distance",
                    "type": "uint256"
                }
            ],
            "internalType": "struct ArrivalData[]",
            "name": "ret",
            "type": "tuple[]"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "artifactId",
            "type": "uint256"
        }],
        "name": "getArtifactById",
        "outputs": [{
            "components": [{
                    "components": [{
                            "internalType": "bool",
                            "name": "isInitialized",
                            "type": "bool"
                        },
                        {
                            "internalType": "uint256",
                            "name": "id",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "planetDiscoveredOn",
                            "type": "uint256"
                        },
                        {
                            "internalType": "enum ArtifactRarity",
                            "name": "rarity",
                            "type": "uint8"
                        },
                        {
                            "internalType": "enum Biome",
                            "name": "planetBiome",
                            "type": "uint8"
                        },
                        {
                            "internalType": "uint256",
                            "name": "mintedAtTimestamp",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "discoverer",
                            "type": "address"
                        },
                        {
                            "internalType": "enum ArtifactType",
                            "name": "artifactType",
                            "type": "uint8"
                        },
                        {
                            "internalType": "uint256",
                            "name": "activations",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "lastActivated",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "lastDeactivated",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "wormholeTo",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "controller",
                            "type": "address"
                        }
                    ],
                    "internalType": "struct Artifact",
                    "name": "artifact",
                    "type": "tuple"
                },
                {
                    "components": [{
                            "internalType": "uint256",
                            "name": "popCapMultiplier",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "popGroMultiplier",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "rangeMultiplier",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "speedMultiplier",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "defMultiplier",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct Upgrade",
                    "name": "upgrade",
                    "type": "tuple"
                },
                {
                    "components": [{
                            "internalType": "uint256",
                            "name": "popCapMultiplier",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "popGroMultiplier",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "rangeMultiplier",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "speedMultiplier",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "defMultiplier",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct Upgrade",
                    "name": "timeDelayedUpgrade",
                    "type": "tuple"
                },
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "locationId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "voyageId",
                    "type": "uint256"
                }
            ],
            "internalType": "struct ArtifactWithMetadata",
            "name": "ret",
            "type": "tuple"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getArtifactPointValues",
        "outputs": [{
            "internalType": "uint256[6]",
            "name": "",
            "type": "uint256[6]"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "locationId",
            "type": "uint256"
        }],
        "name": "getArtifactsOnPlanet",
        "outputs": [{
            "components": [{
                    "components": [{
                            "internalType": "bool",
                            "name": "isInitialized",
                            "type": "bool"
                        },
                        {
                            "internalType": "uint256",
                            "name": "id",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "planetDiscoveredOn",
                            "type": "uint256"
                        },
                        {
                            "internalType": "enum ArtifactRarity",
                            "name": "rarity",
                            "type": "uint8"
                        },
                        {
                            "internalType": "enum Biome",
                            "name": "planetBiome",
                            "type": "uint8"
                        },
                        {
                            "internalType": "uint256",
                            "name": "mintedAtTimestamp",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "discoverer",
                            "type": "address"
                        },
                        {
                            "internalType": "enum ArtifactType",
                            "name": "artifactType",
                            "type": "uint8"
                        },
                        {
                            "internalType": "uint256",
                            "name": "activations",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "lastActivated",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "lastDeactivated",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "wormholeTo",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "controller",
                            "type": "address"
                        }
                    ],
                    "internalType": "struct Artifact",
                    "name": "artifact",
                    "type": "tuple"
                },
                {
                    "components": [{
                            "internalType": "uint256",
                            "name": "popCapMultiplier",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "popGroMultiplier",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "rangeMultiplier",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "speedMultiplier",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "defMultiplier",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct Upgrade",
                    "name": "upgrade",
                    "type": "tuple"
                },
                {
                    "components": [{
                            "internalType": "uint256",
                            "name": "popCapMultiplier",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "popGroMultiplier",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "rangeMultiplier",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "speedMultiplier",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "defMultiplier",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct Upgrade",
                    "name": "timeDelayedUpgrade",
                    "type": "tuple"
                },
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "locationId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "voyageId",
                    "type": "uint256"
                }
            ],
            "internalType": "struct ArtifactWithMetadata[]",
            "name": "ret",
            "type": "tuple[]"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getCumulativeRarities",
        "outputs": [{
            "internalType": "uint256[]",
            "name": "",
            "type": "uint256[]"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getDefaultStats",
        "outputs": [{
            "components": [{
                    "internalType": "string",
                    "name": "label",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "populationCap",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "populationGrowth",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "range",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "speed",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "defense",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "silverGrowth",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "silverCap",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "barbarianPercentage",
                    "type": "uint256"
                }
            ],
            "internalType": "struct PlanetDefaultStats[]",
            "name": "",
            "type": "tuple[]"
        }],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getGameConstants",
        "outputs": [{
            "components": [{
                    "internalType": "bool",
                    "name": "ADMIN_CAN_ADD_PLANETS",
                    "type": "bool"
                },
                {
                    "internalType": "bool",
                    "name": "WORLD_RADIUS_LOCKED",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "WORLD_RADIUS_MIN",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "MAX_NATURAL_PLANET_LEVEL",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "TIME_FACTOR_HUNDREDTHS",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "PERLIN_THRESHOLD_1",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "PERLIN_THRESHOLD_2",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "PERLIN_THRESHOLD_3",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "INIT_PERLIN_MIN",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "INIT_PERLIN_MAX",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "SPAWN_RIM_AREA",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "BIOME_THRESHOLD_1",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "BIOME_THRESHOLD_2",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256[10]",
                    "name": "PLANET_LEVEL_THRESHOLDS",
                    "type": "uint256[10]"
                },
                {
                    "internalType": "uint256",
                    "name": "PLANET_RARITY",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "PLANET_TRANSFER_ENABLED",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "PHOTOID_ACTIVATION_DELAY",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "LOCATION_REVEAL_COOLDOWN",
                    "type": "uint256"
                },
                {
                    "internalType": "uint8[5][10][4]",
                    "name": "PLANET_TYPE_WEIGHTS",
                    "type": "uint8[5][10][4]"
                },
                {
                    "internalType": "uint256",
                    "name": "SILVER_SCORE_VALUE",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256[6]",
                    "name": "ARTIFACT_POINT_VALUES",
                    "type": "uint256[6]"
                },
                {
                    "internalType": "bool",
                    "name": "SPACE_JUNK_ENABLED",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "SPACE_JUNK_LIMIT",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256[10]",
                    "name": "PLANET_LEVEL_JUNK",
                    "type": "uint256[10]"
                },
                {
                    "internalType": "uint256",
                    "name": "ABANDON_SPEED_CHANGE_PERCENT",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "ABANDON_RANGE_CHANGE_PERCENT",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "GAME_START_BLOCK",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "CAPTURE_ZONES_ENABLED",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "CAPTURE_ZONE_COUNT",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "CAPTURE_ZONE_CHANGE_BLOCK_INTERVAL",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "CAPTURE_ZONE_RADIUS",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256[10]",
                    "name": "CAPTURE_ZONE_PLANET_LEVEL_SCORE",
                    "type": "uint256[10]"
                },
                {
                    "internalType": "uint256",
                    "name": "CAPTURE_ZONE_HOLD_BLOCKS_REQUIRED",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "CAPTURE_ZONES_PER_5000_WORLD_RADIUS",
                    "type": "uint256"
                }
            ],
            "internalType": "struct GameConstants",
            "name": "",
            "type": "tuple"
        }],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getNPlanets",
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
        "name": "getNPlayers",
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
        "name": "getNRevealedPlanets",
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
            "name": "arrivalId",
            "type": "uint256"
        }],
        "name": "getPlanetArrival",
        "outputs": [{
            "components": [{
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "player",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "fromPlanet",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "toPlanet",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "popArriving",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "silverMoved",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "departureTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "arrivalTime",
                    "type": "uint256"
                },
                {
                    "internalType": "enum ArrivalType",
                    "name": "arrivalType",
                    "type": "uint8"
                },
                {
                    "internalType": "uint256",
                    "name": "carriedArtifactId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "distance",
                    "type": "uint256"
                }
            ],
            "internalType": "struct ArrivalData",
            "name": "",
            "type": "tuple"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "_location",
            "type": "uint256"
        }],
        "name": "getPlanetArrivals",
        "outputs": [{
            "components": [{
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "player",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "fromPlanet",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "toPlanet",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "popArriving",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "silverMoved",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "departureTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "arrivalTime",
                    "type": "uint256"
                },
                {
                    "internalType": "enum ArrivalType",
                    "name": "arrivalType",
                    "type": "uint8"
                },
                {
                    "internalType": "uint256",
                    "name": "carriedArtifactId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "distance",
                    "type": "uint256"
                }
            ],
            "internalType": "struct ArrivalData[]",
            "name": "ret",
            "type": "tuple[]"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "uint256",
                "name": "locationId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "idx",
                "type": "uint256"
            }
        ],
        "name": "getPlanetEvent",
        "outputs": [{
            "components": [{
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "internalType": "enum PlanetEventType",
                    "name": "eventType",
                    "type": "uint8"
                },
                {
                    "internalType": "uint256",
                    "name": "timeTrigger",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "timeAdded",
                    "type": "uint256"
                }
            ],
            "internalType": "struct PlanetEventMetadata",
            "name": "",
            "type": "tuple"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "locationId",
            "type": "uint256"
        }],
        "name": "getPlanetEventsCount",
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
        "name": "getPlanetLevelThresholds",
        "outputs": [{
            "internalType": "uint256[]",
            "name": "",
            "type": "uint256[]"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "playerId",
            "type": "address"
        }],
        "name": "getPlayerSpaceJunkLimit",
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
        "name": "getRevealCooldown",
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
            "name": "locationId",
            "type": "uint256"
        }],
        "name": "getRevealedCoords",
        "outputs": [{
            "components": [{
                    "internalType": "uint256",
                    "name": "locationId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "x",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "y",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "revealer",
                    "type": "address"
                }
            ],
            "internalType": "struct RevealedCoords",
            "name": "",
            "type": "tuple"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getSnarkConstants",
        "outputs": [{
            "components": [{
                    "internalType": "bool",
                    "name": "DISABLE_ZK_CHECKS",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "PLANETHASH_KEY",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "SPACETYPE_KEY",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "BIOMEBASE_KEY",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "PERLIN_MIRROR_X",
                    "type": "bool"
                },
                {
                    "internalType": "bool",
                    "name": "PERLIN_MIRROR_Y",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "PERLIN_LENGTH_SCALE",
                    "type": "uint256"
                }
            ],
            "internalType": "struct SnarkConstants",
            "name": "",
            "type": "tuple"
        }],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getTypeWeights",
        "outputs": [{
            "internalType": "uint8[5][10][4]",
            "name": "",
            "type": "uint8[5][10][4]"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getUpgrades",
        "outputs": [{
            "components": [{
                    "internalType": "uint256",
                    "name": "popCapMultiplier",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "popGroMultiplier",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "rangeMultiplier",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "speedMultiplier",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "defMultiplier",
                    "type": "uint256"
                }
            ],
            "internalType": "struct Upgrade[4][3]",
            "name": "",
            "type": "tuple[4][3]"
        }],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "paused",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "key",
            "type": "uint256"
        }],
        "name": "planetArrivals",
        "outputs": [{
            "components": [{
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "player",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "fromPlanet",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "toPlanet",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "popArriving",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "silverMoved",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "departureTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "arrivalTime",
                    "type": "uint256"
                },
                {
                    "internalType": "enum ArrivalType",
                    "name": "arrivalType",
                    "type": "uint8"
                },
                {
                    "internalType": "uint256",
                    "name": "carriedArtifactId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "distance",
                    "type": "uint256"
                }
            ],
            "internalType": "struct ArrivalData",
            "name": "",
            "type": "tuple"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "key",
            "type": "uint256"
        }],
        "name": "planetArtifacts",
        "outputs": [{
            "internalType": "uint256[]",
            "name": "",
            "type": "uint256[]"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "level",
            "type": "uint256"
        }],
        "name": "planetDefaultStats",
        "outputs": [{
            "components": [{
                    "internalType": "string",
                    "name": "label",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "populationCap",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "populationGrowth",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "range",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "speed",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "defense",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "silverGrowth",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "silverCap",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "barbarianPercentage",
                    "type": "uint256"
                }
            ],
            "internalType": "struct PlanetDefaultStats",
            "name": "",
            "type": "tuple"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "key",
            "type": "uint256"
        }],
        "name": "planetEvents",
        "outputs": [{
            "components": [{
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "internalType": "enum PlanetEventType",
                    "name": "eventType",
                    "type": "uint8"
                },
                {
                    "internalType": "uint256",
                    "name": "timeTrigger",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "timeAdded",
                    "type": "uint256"
                }
            ],
            "internalType": "struct PlanetEventMetadata[]",
            "name": "",
            "type": "tuple[]"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "planetEventsCount",
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
            "name": "idx",
            "type": "uint256"
        }],
        "name": "planetIds",
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
        "name": "planetLevelsCount",
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
            "name": "key",
            "type": "uint256"
        }],
        "name": "planets",
        "outputs": [{
            "components": [{
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "range",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "speed",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "defense",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "population",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "populationCap",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "populationGrowth",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "silverCap",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "silverGrowth",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "silver",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "planetLevel",
                    "type": "uint256"
                },
                {
                    "internalType": "enum PlanetType",
                    "name": "planetType",
                    "type": "uint8"
                },
                {
                    "internalType": "bool",
                    "name": "isHomePlanet",
                    "type": "bool"
                }
            ],
            "internalType": "struct Planet",
            "name": "",
            "type": "tuple"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "key",
            "type": "uint256"
        }],
        "name": "planetsExtendedInfo",
        "outputs": [{
            "components": [{
                    "internalType": "bool",
                    "name": "isInitialized",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "createdAt",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "lastUpdated",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "perlin",
                    "type": "uint256"
                },
                {
                    "internalType": "enum SpaceType",
                    "name": "spaceType",
                    "type": "uint8"
                },
                {
                    "internalType": "uint256",
                    "name": "upgradeState0",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "upgradeState1",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "upgradeState2",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "hatLevel",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "hasTriedFindingArtifact",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "prospectedBlockNumber",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "destroyed",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "spaceJunk",
                    "type": "uint256"
                }
            ],
            "internalType": "struct PlanetExtendedInfo",
            "name": "",
            "type": "tuple"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "key",
            "type": "uint256"
        }],
        "name": "planetsExtendedInfo2",
        "outputs": [{
            "components": [{
                    "internalType": "bool",
                    "name": "isInitialized",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "pausers",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "invader",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "invadeStartBlock",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "capturer",
                    "type": "address"
                }
            ],
            "internalType": "struct PlanetExtendedInfo2",
            "name": "",
            "type": "tuple"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "idx",
            "type": "uint256"
        }],
        "name": "playerIds",
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
            "internalType": "address",
            "name": "key",
            "type": "address"
        }],
        "name": "players",
        "outputs": [{
            "components": [{
                    "internalType": "bool",
                    "name": "isInitialized",
                    "type": "bool"
                },
                {
                    "internalType": "address",
                    "name": "player",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "initTimestamp",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "homePlanetId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "lastRevealTimestamp",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "score",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "spaceJunk",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "spaceJunkLimit",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "claimedShips",
                    "type": "bool"
                }
            ],
            "internalType": "struct Player",
            "name": "",
            "type": "tuple"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "key",
            "type": "uint256"
        }],
        "name": "revealedCoords",
        "outputs": [{
            "components": [{
                    "internalType": "uint256",
                    "name": "locationId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "x",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "y",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "revealer",
                    "type": "address"
                }
            ],
            "internalType": "struct RevealedCoords",
            "name": "",
            "type": "tuple"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "idx",
            "type": "uint256"
        }],
        "name": "revealedPlanetIds",
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
        "name": "worldRadius",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": false,
                "internalType": "address",
                "name": "ownerAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "lobbyAddress",
                "type": "address"
            }
        ],
        "name": "LobbyCreated",
        "type": "event"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "initAddress",
                "type": "address"
            },
            {
                "internalType": "bytes",
                "name": "initData",
                "type": "bytes"
            }
        ],
        "name": "createLobby",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": false,
                "internalType": "address",
                "name": "player",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "arrivalId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "from",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "to",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "artifactId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "abandoning",
                "type": "uint256"
            }
        ],
        "name": "ArrivalQueued",
        "type": "event"
    },
    {
        "inputs": [{
                "components": [{
                        "internalType": "bool",
                        "name": "isInitialized",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "planetDiscoveredOn",
                        "type": "uint256"
                    },
                    {
                        "internalType": "enum ArtifactRarity",
                        "name": "rarity",
                        "type": "uint8"
                    },
                    {
                        "internalType": "enum Biome",
                        "name": "planetBiome",
                        "type": "uint8"
                    },
                    {
                        "internalType": "uint256",
                        "name": "mintedAtTimestamp",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "discoverer",
                        "type": "address"
                    },
                    {
                        "internalType": "enum ArtifactType",
                        "name": "artifactType",
                        "type": "uint8"
                    },
                    {
                        "internalType": "uint256",
                        "name": "activations",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "lastActivated",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "lastDeactivated",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "wormholeTo",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "controller",
                        "type": "address"
                    }
                ],
                "internalType": "struct Artifact",
                "name": "artifact",
                "type": "tuple"
            },
            {
                "components": [{
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "range",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "speed",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "defense",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "population",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "populationCap",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "populationGrowth",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "silverCap",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "silverGrowth",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "silver",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "planetLevel",
                        "type": "uint256"
                    },
                    {
                        "internalType": "enum PlanetType",
                        "name": "planetType",
                        "type": "uint8"
                    },
                    {
                        "internalType": "bool",
                        "name": "isHomePlanet",
                        "type": "bool"
                    }
                ],
                "internalType": "struct Planet",
                "name": "planet",
                "type": "tuple"
            },
            {
                "components": [{
                        "internalType": "bool",
                        "name": "isInitialized",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "createdAt",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "lastUpdated",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "perlin",
                        "type": "uint256"
                    },
                    {
                        "internalType": "enum SpaceType",
                        "name": "spaceType",
                        "type": "uint8"
                    },
                    {
                        "internalType": "uint256",
                        "name": "upgradeState0",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "upgradeState1",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "upgradeState2",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "hatLevel",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "hasTriedFindingArtifact",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "prospectedBlockNumber",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "destroyed",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "spaceJunk",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct PlanetExtendedInfo",
                "name": "planetExtendedInfo",
                "type": "tuple"
            },
            {
                "components": [{
                        "internalType": "bool",
                        "name": "isInitialized",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "pausers",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "invader",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "invadeStartBlock",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "capturer",
                        "type": "address"
                    }
                ],
                "internalType": "struct PlanetExtendedInfo2",
                "name": "planetExtendedInfo2",
                "type": "tuple"
            }
        ],
        "name": "applySpaceshipDepart",
        "outputs": [{
                "components": [{
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "range",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "speed",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "defense",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "population",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "populationCap",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "populationGrowth",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "silverCap",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "silverGrowth",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "silver",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "planetLevel",
                        "type": "uint256"
                    },
                    {
                        "internalType": "enum PlanetType",
                        "name": "planetType",
                        "type": "uint8"
                    },
                    {
                        "internalType": "bool",
                        "name": "isHomePlanet",
                        "type": "bool"
                    }
                ],
                "internalType": "struct Planet",
                "name": "",
                "type": "tuple"
            },
            {
                "components": [{
                        "internalType": "bool",
                        "name": "isInitialized",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "createdAt",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "lastUpdated",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "perlin",
                        "type": "uint256"
                    },
                    {
                        "internalType": "enum SpaceType",
                        "name": "spaceType",
                        "type": "uint8"
                    },
                    {
                        "internalType": "uint256",
                        "name": "upgradeState0",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "upgradeState1",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "upgradeState2",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "hatLevel",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "hasTriedFindingArtifact",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "prospectedBlockNumber",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "destroyed",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "spaceJunk",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct PlanetExtendedInfo",
                "name": "",
                "type": "tuple"
            },
            {
                "components": [{
                        "internalType": "bool",
                        "name": "isInitialized",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "pausers",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "invader",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "invadeStartBlock",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "capturer",
                        "type": "address"
                    }
                ],
                "internalType": "struct PlanetExtendedInfo2",
                "name": "",
                "type": "tuple"
            }
        ],
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
                "internalType": "uint256[14]",
                "name": "_input",
                "type": "uint256[14]"
            }
        ],
        "name": "move",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "bytes32[]",
            "name": "hashes",
            "type": "bytes32[]"
        }],
        "name": "addKeys",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "toAdd",
            "type": "address"
        }],
        "name": "addToWhitelist",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "newDrip",
            "type": "uint256"
        }],
        "name": "changeDrip",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "bytes32[]",
            "name": "keys",
            "type": "bytes32[]"
        }],
        "name": "disableKeys",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "drip",
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
        "name": "getNAllowed",
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
            "internalType": "string",
            "name": "key",
            "type": "string"
        }],
        "name": "isKeyValid",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "_addr",
            "type": "address"
        }],
        "name": "isWhitelisted",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "toRemove",
            "type": "address"
        }],
        "name": "removeFromWhitelist",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "string",
                "name": "key",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "useKey",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [{
                "components": [{
                        "internalType": "address",
                        "name": "facetAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "enum IDiamondCut.FacetCutAction",
                        "name": "action",
                        "type": "uint8"
                    },
                    {
                        "internalType": "bytes4[]",
                        "name": "functionSelectors",
                        "type": "bytes4[]"
                    }
                ],
                "indexed": false,
                "internalType": "struct IDiamondCut.FacetCut[]",
                "name": "_diamondCut",
                "type": "tuple[]"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "_init",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bytes",
                "name": "_calldata",
                "type": "bytes"
            }
        ],
        "name": "DiamondCut",
        "type": "event"
    },
    {
        "inputs": [{
                "components": [{
                        "internalType": "address",
                        "name": "facetAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "enum IDiamondCut.FacetCutAction",
                        "name": "action",
                        "type": "uint8"
                    },
                    {
                        "internalType": "bytes4[]",
                        "name": "functionSelectors",
                        "type": "bytes4[]"
                    }
                ],
                "internalType": "struct IDiamondCut.FacetCut[]",
                "name": "_diamondCut",
                "type": "tuple[]"
            },
            {
                "internalType": "address",
                "name": "_init",
                "type": "address"
            },
            {
                "internalType": "bytes",
                "name": "_calldata",
                "type": "bytes"
            }
        ],
        "name": "diamondCut",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "bytes4",
            "name": "_functionSelector",
            "type": "bytes4"
        }],
        "name": "facetAddress",
        "outputs": [{
            "internalType": "address",
            "name": "facetAddress_",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "facetAddresses",
        "outputs": [{
            "internalType": "address[]",
            "name": "facetAddresses_",
            "type": "address[]"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "_facet",
            "type": "address"
        }],
        "name": "facetFunctionSelectors",
        "outputs": [{
            "internalType": "bytes4[]",
            "name": "_facetFunctionSelectors",
            "type": "bytes4[]"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "facets",
        "outputs": [{
            "components": [{
                    "internalType": "address",
                    "name": "facetAddress",
                    "type": "address"
                },
                {
                    "internalType": "bytes4[]",
                    "name": "functionSelectors",
                    "type": "bytes4[]"
                }
            ],
            "internalType": "struct IDiamondLoupe.Facet[]",
            "name": "facets_",
            "type": "tuple[]"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "bytes4",
            "name": "_interfaceId",
            "type": "bytes4"
        }],
        "name": "supportsInterface",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [{
            "internalType": "address",
            "name": "owner_",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "_newOwner",
            "type": "address"
        }],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]