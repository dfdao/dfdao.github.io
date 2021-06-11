import { QuadrantType } from './enums.js'

export const emptyAddress = "0x0000000000000000000000000000000000000000";
// Only functions work
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

// Returns the energyPercentage (out of 1000) of the planet such that the remaining %
// is minEnergyRemaining. minEnergyRemainingPct should be out of 100
export let getMaxEnergyPct = (planet, minEnergyRemainingPct) => {
  const floor = (minEnergyRemainingPct / 100) * planet.energyCap;
  const amountToSend = planet.energy > floor ? planet.energy - floor : 0;
  return (amountToSend / planet.energyCap) * 100;
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
