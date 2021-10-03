import { ethers } from "https://cdn.ethers.io/lib/ethers-5.2.esm.min.js";
import colossusABI from './abi.js'

const colossusAddress = '0xc71F6a0d1cB0949804d3cd8700CF9F4CAD2490EB'
const rpcEndpoint = "http://165.227.93.253:8545";
const provider = new ethers.providers.JsonRpcProvider(rpcEndpoint);
const colossus = new ethers.Contract(colossusAddress, colossusABI, provider);

colossus.playerCounter().then(async count => {
  for(let i = 0; i < count; i++) {
    const playerAddress = await colossus.players(i);
    const playerScore = await colossus.contributions(playerAddress);
    console.log(`addy ${playerAddress} score ${playerScore}`);
  }
})

