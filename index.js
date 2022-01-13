const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];


 
  function findMatching(array, name){
      return array.filter(
          possibleMatch => possibleMatch.toLowercase() === name.toLowerCase()
      );

  }

  console.log(findMatching);