// Functions

export let unlockTimestamp = (planet) => {
  return (planet.artifactLockedTimestamp + (12 * 60 * 60)) * 1000;
}

export let unlockTime = (planet) => {
  return (new Date(unlockTimestamp(planet))).toLocaleString();
}

export let canWithdraw = (planet) => {
  if (planet && planet.artifactLockedTimestamp) {
    return Date.now() > unlockTimestamp(planet)
  } else {
    return false;
  }
}

export let canHaveArtifact = (planet) => {
  return df.isPlanetMineable(planet) && !planet.hasTriedFindingArtifact
}

export let canFindArtifact = (planet) => energy(planet) >= 96;
//export let hasArtifact = (planet) => planet.heldArtifactId != null;

let hasArtifact = (planet) => { return planet.heldArtifactIds.length != 0 };


export let countPlanetArtifactRarity = (planet, artifactRarity) => {
  let count = 0;
  const heldArtifactIds = planet.heldArtifactIds;
  if (heldArtifactIds) {
    for (let id of heldArtifactIds) {
      const artifact = df.entityStore.getArtifactById(id)
      artifact.rarity == artifactRarity ? count +=1 : null
    }
  }
  return count;
}

