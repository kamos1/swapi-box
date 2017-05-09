import planetCleaner from './planetCleaner'
const peopleCleaner = (data) => {
  const array = data.results;
  const people =  array.reduce((acc, person) => {
    if(!acc[person.name]) {
      acc[person.name] = {name: person.name, homeworld: person.homeworld, species: person.species[0]}
   }



      // planetCleaner(obj))
      // .then(planets => acc[person.name].homeworld = planets[person.homeworld])
      //

    return acc;
  }, {})
  return people;
}

export default peopleCleaner;
