function parseScores(scoresString) {
   return scoresString.split(" ");
}

function buildDistributionArray(scoresArray) {
   var scoresDistrubution = [0, 0, 0, 0, 0];
   if (scoresArray.length === 0 
      && parseInt(scoresArray[0]) === NaN
      && parseInt(scoresArray[1]) === NaN
      && parseInt(scoresArray[2]) === NaN
      && parseInt(scoresArray[3]) === NaN
      && parseInt(scoresArray[4]) === NaN) {
      return scoresDistrubution;
   }
   else {
      for (var i = 0; i < scoresArray.length; i++) {
         var value = parseInt(scoresArray[i]);
         if (value <= 100 && value >= 90)
            scoresDistrubution[0]++;
         else if (value <= 89 && value >= 80)
            scoresDistrubution[1]++;
         else if (value <= 79 && value >= 70)
            scoresDistrubution[2]++;
         else if (value <= 69 && value >= 60)
            scoresDistrubution[3]++;
         else if (value <= 59 && value >= 0)
            scoresDistrubution[4]++;
      }
   }
   return scoresDistrubution;
}

function setTableContent(userInput) {
   var scores = parseScores(userInput);
   var table = '';
   if (scores == "") {
      document.getElementById("distributionTable").innerHTML = '<td>No graph to display</td>';
   }
   else if (scores.length > 0) {
      var scoresDistribution = buildDistributionArray(scores);
      table = '<tr>';
      for (var i = 0; i < scoresDistribution.length; i++) {
         table += '<td><div style="height:' + scoresDistribution[i] * 10 + 'px" class="bar' + i + '"></div></td>';
      }
      table += '</tr>';
      table += '<tr><td>A</td><td>B</td><td>C</td><td>D</td><td>F</td></tr>';
      for (var i = 0; i < scoresDistribution.length; i++) {
         table += '<td>' + scoresDistribution[i] + '</td>';
      }
      document.getElementById("distributionTable").innerHTML += table + '</tr>';
   }
}

// The argument can be changed for testing purposes
setTableContent("45 78 98 83 86 99 90 59");