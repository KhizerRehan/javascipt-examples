const seasons = {
  SUMMER: {
    BEGINNING: 'summer.beginning',
    ENDING: 'summer.ending',
  },
  WINTER: 'winter',
  SPRING: 'spring',
  AUTUMN: 'autumn',
}

let season = seasons.SUMMER.BEGINNING

if (!season) {
  throw new Error('Season is not defined')
}

switch (season) {
  case seasons.SUMMER.BEGINNING:
    // Do something for summer beginning
    console.log('Case Matched:', season)
    break
  case seasons.SUMMER.ENDING:
    // Do something for summer ending
    console.log('Case Matched:', season)
    break
  case seasons.SUMMER:
    // This will work if season = seasons.SUMMER
    console.log('Case Matched:', season)
    break
  case seasons.WINTER:
    //Do something for winter
    console.log('Case Matched:', season)
    break
  case seasons.SPRING:
    //Do something for spring
    console.log('Case Matched:', season)
    break
  case seasons.AUTUMN:
    //Do something for autumn
    console.log('Case Matched:', season)
    break

  default:
    console.log('Case Matched: Default')
}
