"use strict";

function calculateTravelTime() {
    const _origin = 94546; //document.getElementById('_origin').value
    const _destination = 94014;
  
    const baseURL = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${_origin}&destinations=${_destination}&key=AIzaSyAIuqFg0I7_wH4krkPYfuXCELPx6NYbIVo&units=imperial`;
  
    fetch(baseURL)
      .then((result) => result.json()) // Converting the result into json
      .then((data) => {
        // Extract specific data from the response
        const destination = data.destination_addresses[0];
        const origin = data.origin_addresses[0];
        const distanceText = data.rows[0].elements[0].distance.text;
        const distanceValue = data.rows[0].elements[0].distance.value; // Value in meters
        const durationText = data.rows[0].elements[0].duration.text;
        const durationValue = data.rows[0].elements[0].duration.value; // Value in seconds
  
        // Convert the duration from seconds to minutes
        const durationInMinutes = durationValue / 60;
  
        // Log extracted information to the console
        console.log(`Origin: ${origin}`);
        console.log(`Destination: ${destination}`);
        console.log(`Distance: ${distanceText} (${distanceValue} meters)`);
        console.log(
          `Duration: ${durationText} (${durationInMinutes.toFixed(2)} minutes)`
        );
  
        // If you want to log the entire data object as well
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  calculateTravelTime();
  