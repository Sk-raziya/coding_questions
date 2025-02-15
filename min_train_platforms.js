function minPlatforms(arrivals, departures) {
  arrivals.sort((a, b) => a - b);
  departures.sort((a, b) => a - b);

  let platformsNeeded = 1;
  let result = 1;
  let i = 1;
  let j = 0;

  while (i < arrivals.length && j < departures.length) {
    if (arrivals[i] <= departures[j]) {
      platformsNeeded++;
      i++;
    } else if (arrivals[i] > departures[j]) {
      platformsNeeded--;
      j++;
    }

    if (platformsNeeded > result) {
      result = platformsNeeded;
    }
  }

  return result;
}

// Helper function to convert time string to minutes
function timeToMinutes(time) {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
}

// Test the function
const arrivals = ['9:00', '9:40', '9:50', '11:00', '15:00', '18:00'].map(timeToMinutes);
const departures = ['9:10', '12:00', '11:20', '11:30', '19:00', '20:00'].map(timeToMinutes);

console.log(minPlatforms(arrivals, departures));