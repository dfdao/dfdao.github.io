import {
  canHaveArtifact,
  hasArtifact,
  countPlanetArtifactRarity,
} from 'https://plugins.zkga.me/utils/utils.js';

import { ArtifactRarity } from 'https://dfdao.github.io/utils/enums.js';



// heldArtifactIds = []


const countArtifacts = (artifactRarity) => {
	let count = 0
  	df.getMyPlanets()
	    .filter(hasArtifact)
	    // map artifact ids -> level of artifact
	    .map(p => {
	    	count += countPlanetArtifactRarity(p, artifactRarity)
	    })
	return count;
}

