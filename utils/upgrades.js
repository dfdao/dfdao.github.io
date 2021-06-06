export let canPlanetUpgrade = (planet) => {
  if (!planet) {
    return false;
  }
  return df.entityStore.constructor.planetCanUpgrade(planet)
};

export let canStatUpgrade = (planet, stat) => {
  if (!planet) {
    return false;
  }
  // [defenseCan, rangeCan, speedCan]
  let canUpgrade = planet.upgradeState.map((level, i) => {
    if (
      i === UpgradeBranchName.Defense &&
      planet.spaceType === SpaceType.DEEP_SPACE
    )
      return level < 2;
    return level < 4;
  });

  return canUpgrade[stat];
}
