import { ethers } from 'https://cdn.skypack.dev/ethers';
import DarkForestABI from './abi.js';

export async function lobbyScoreBoard(address) {


    const lobbyAddress = address
    const rpcEndpoint = "https://rpc.xdaichain.com/";
    const provider = new ethers.providers.JsonRpcProvider(rpcEndpoint);
    const darkforest = new ethers.Contract(lobbyAddress, DarkForestABI, provider);

    let player_numbers = await darkforest.getNPlayers().then(async count => {
        return count.toNumber()
    })

    let scoreboard = await darkforest.bulkGetPlayers(0, player_numbers).then(async count => {
        let a = []
        for (let i = 0; i < count.length; i++) {
            a.push({ "address": `${count[i].player}`, "score": count[i].score.toNumber() })
        }

        a.sort(function(a, b) {
            return b.score - a.score
        });
        return a
    })
    return scoreboard
}