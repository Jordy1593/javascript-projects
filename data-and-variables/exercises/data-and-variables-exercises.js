// Declare and assign the variables below

// Use console.log to print the 'typeof' each variable. Print one item per line.

let shuttleName = "Determination"
console.log(typeof shuttleName)

let shuttleSpeedMph = (17500)
console.log(typeof shuttleSpeedMph)

let distance_of_mars_km = (225000000)
console.log(typeof distance_of_mars_km)

let distance_to_moon_km = (3844000)
console.log(typeof distance_to_moon_km)

const miles_per_kilometer = (0.621)
console.log(typeof miles_per_kilometer)

// Calculate a space mission below

let miles_to_mars = (distance_of_mars_km * miles_per_kilometer) 
console.log(miles_to_mars)

let hours_to_mars = (miles_to_mars / shuttleSpeedMph)
console.log(hours_to_mars)

let days_to_mars = (hours_to_mars / 24)
console.log(days_to_mars)

// Print the results of the space mission calculations below

console.log(shuttleName , 'will take', days_to_mars, 'days to reach to mars.')

// Calculate a trip to the moon below

let miles_to_moon = (distance_to_moon_km * miles_per_kilometer)
console.log(miles_to_moon)

let hours_to_moon =(miles_to_moon / shuttleSpeedMph)
console.log(hours_to_moon)

let days_to_moon = (hours_to_moon / 24)
console.log(days_to_moon)

// Print the results of the trip to the moon below

console.log(shuttleName, 'will take', days_to_moon, 'days to reach to moon.')

