export const emptyAddress = "0x0000000000000000000000000000000000000000";
// Testing only functions
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
