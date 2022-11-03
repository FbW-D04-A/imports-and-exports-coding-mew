//TEAMS
//SHORTCUT: import {} + CTR + Space zeigt alles an
// teamA as firstTEam: benennt die funktion/variable beim import um
import {allTeams, teamA as firstTeam} from "./modules/teams.js"

// import {allTeams} from "./modules/teams.js"
console.log(allTeams)
console.log(allTeams)
// console.log(firstTeam)

//ACTIONS
// import * as actions from "./modules/actions.js"
import {getTeamNames, getHowManyTeams, getTeamPlayersFirstName} from "./modules/actions.js"
console.log("getTeamNames:", getTeamNames(allTeams));
console.log("getHowManyTeams:", getHowManyTeams(allTeams));
console.log("getTeamPlayersFirstName:", getTeamPlayersFirstName(firstTeam));

// statistics
import {teamsRanking, scores} from "./modules/statistics.js"
console.log(teamsRanking)
//bestTeam
import bestTeam from "./modules/bestTeam.js"

console.log("bestTeam:", bestTeam);

//side effeccts:
//wie importieren ohne variablennamen:
//macht einfach den alert.. 
// import "./modules/side-effects.js"
