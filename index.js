function parseScores(scoresString) {
   return toString(scoresString).split(" ");
}

function buildDistributionArray(scoresArray) {
   var scoresDistrubution = [0, 0, 0, 0, 0];
   if (scoresArray.length === 0) {
      return scoresDistrubution;
   }
   else {
      for (var i = 0; i < scoresArray.length; i++) {
         if (scoresArray[i] <= 100 && scoresArray[i] >= 90)
            scoresDistrubution[0]++;
         else if (scoresArray[i] <= 89 && scoresArray[i] >= 80)
            scoresDistrubution[1]++;
         else if (scoresArray[i] <= 79 && scoresArray[i] >= 70)
            scoresDistrubution[2]++;
         else if (scoresArray[i] <= 69 && scoresArray[i] >= 60)
            scoresDistrubution[3]++;
         else if (scoresArray[i] <= 59 && scoresArray[i] >= 0)
            scoresDistrubution[4]++;
      }
   }
   return scoresDistrubution;
}

function setTableContent(userInput) {
   // TODO: Compete the function
}

// The argument can be changed for testing purposes
setTableContent("45 78 98 83 86 99 90 59");