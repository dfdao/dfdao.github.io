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

export async function lobbiesCreated() {


    const rpcEndpoint = "https://rpc.xdaichain.com/";
    const provider = new ethers.providers.JsonRpcProvider(rpcEndpoint);
    const contract = new ethers.Contract("0x5da117b8ab8b739346f5edc166789e5afb1a7145", DarkForestABI, provider);
    let lobbies = []
    let eventsFilter = await contract.filters.LobbyCreated();
    let events = await contract.queryFilter(eventsFilter);
    console.log(events[0])
    events.forEach((i) => {
        lobbies.push({ "id": events.indexOf(i) + 2, "name": `game ${events.indexOf(i)} `, "address": i.args.lobbyAddress, "owner": i.args.ownerAddress })
    })
    return lobbies
}