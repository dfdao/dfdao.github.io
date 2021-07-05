import { QuadrantType } from './enums.js'

export const emptyAddress = "0x0000000000000000000000000000000000000000";
// Only functions work

export const distance = (from, to) => {
  let fromloc = from.location;
  let toloc = to.location;
  return Math.sqrt((fromloc.coords.x - toloc.coords.x) ** 2 + (fromloc.coords.y - toloc.coords.y) ** 2);
}
export let isUnowned = (planet) => planet.owner === emptyAddress;
export let isMine = (planet) => planet.owner === df.account;

export let getPlanetRank = (planet) => {
    if (!planet)
        return 0;
    return planet.upgradeState.reduce((a, b) => a + b);
};
export let getSilverNeeded = (planet) => {
    if (!planet)
        return 0;
    let totalLevel = planet.upgradeState.reduce((a, b) => a + b);
    return Math.floor((totalLevel + 1) * 0.2 * planet.silverCap);
};
export let getSilver = (planet) => {
    if (!planet)
        return 0;
    return Math.floor(planet.silver);
};
// From main client
export let getPlanetShortHash = (planet) => {
    if (!planet)
        return '00000';
    else
        return planet.locationId.substring(4, 9);
};
export let getPlayerShortHash = (address) => {
    return address.substring(0, 6);
};
export let coords = (planet) => {
    return `(${planet.location.coords.x}, ${planet.location.coords.y})`;
};
export let energyPercent = (planet) => {
    return Math.floor(planet.energy / planet.energyCap * 100);
};
export let isAsteroid = (planet) => planet.planetResource === 1;

// Returns the energyPercentage (out of 100) of the planet such that the remaining %
// is minEnergyRemainingPct. minEnergyRemainingPct should be out of 100
export let getMaxEnergyPct = (planet, energyRemainingPct) => {
  const floor = (energyRemainingPct / 100) * planet.energyCap;
  const amountToSend = planet.energy > floor ? planet.energy - floor : 0;
  return (amountToSend / planet.energyCap) * 100;
}

// Gets amount of a energy a planet can spend. minEnergyRemainingPct is a number between 1 and 100.
export let calcEnergyBudget = (planet, energyRemainingPct) => {
  const percentToSpend = getMaxEnergyPct(planet, energyRemainingPct);
  return Math.floor(planet.energy * (percentToSpend / 100))
}



// Ignore the planet if current planet has pending outbound moves
export const noOutgoingMoves = (planet) => {
  const unconfirmed = df.getUnconfirmedMoves().filter(move => move.from === planet.locationId);
  if (unconfirmed.length !== 0) {
    df.terminal.current.println(`${name} has pending moves. Ignoring... `)
  }
  // Returns true if planet has no Outgoing Moves.
  return unconfirmed.length == 0;
}

export let getAngleDeg = (ax,ay,bx,by) => {
  var angleRad = Math.atan((by-ay)/(bx-ax));
  var angleDeg = Math.floor(angleRad * 180 / Math.PI)
  return (angleDeg > 0 ? angleDeg : 360 + angleDeg)
}
// Gets the degree between planet 1 and planet 2
export let getPlanetDeg = (p1,p2) => {
    const p1X = p1.location.coords.x
    const p1Y = p1.location.coords.y
    const p2X = p2.location.coords.x
    const p2Y = p2.location.coords.y
    return getAngleDeg(p1X, p1Y, p2X, p2Y)
}

export let getQuadrant = (angle) => {
  const quadType = (Math.floor(angle / 90))
  return QuadrantType[(quadType).toString()];
}



const calcNearBig = (candidate, planet)=> {
	// Score = candidate level * % of energy that planet can add to candidate
	let amountArriving = // amount planet will send to candidate
	// check to prevent planet overload
	let currEnergyPercent = candidate.energy / candidate.energyCap
	let newEnergyPercent = min((candidate.energy + amountArriving), candidate.energyCap) / candidate.energyCap
	let percentToContribute = newEnergypercent - currEnergyPercent
	let score = candidate.planetLevel * percentToContribute
	return score
}

const nearestBiggest = (planet) => {
  const fromId = planet.locationId
  // Need to understand planetsInRange better
  const candidates = df.getPlanetsInRange(fromId, maxDistributeEnergyPercent)
      .filter(c => (
  			// redundant?
        c.owner !== df.account &&
        c.owner === "0x0000000000000000000000000000000000000000" &&
        // Similar but minCaptureLevel is a function of the planet
        c.planetLevel >= minCaptureLevel
      ))
      .map(c => {
        //returns composite planet score
  			return calcNearBig(c, planet)
      })
  		// sort near close ascending.
      .sort((a, b) => b - a);
  	return candidates[0];
}
