

const planetCleaner = (data) => {
  const array = data.results;
  // console.log(array);
  const planets =  array.reduce((acc, planet) => {
    if(!acc[planet.name]) {
      acc[planet.name] = {name: planet.name, terrain: planet.terrain, population: planet.population, climate: planet.climate, residents: planet.residents}
    }
    return acc;
  }, {})
  return planets;
}

export default planetCleaner;
//name, terrain, population, climate, residents
