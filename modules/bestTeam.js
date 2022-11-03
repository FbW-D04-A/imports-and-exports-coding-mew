import {teamsRanking, scores} from "./statistics.js"
//BEST TEAM
  const bestTeam = {
    name: teamsRanking.first,
    scores: scores.teamA,
  };

  //geht auch, exportiert allerdings die function
// export default() => {
//   name: teamsRanking.first,
//   scores: scores.teamA,
// }

export default bestTeam;