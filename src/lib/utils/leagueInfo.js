/*   STEP 1   */
export const leagueID = "1257477525592883200"; // your league ID
export const leagueName = "The Gentlemen"; // your league name
export const dues = 250; // (optional) used in template constitution page
export const dynasty = false; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  export const homepageText = `
Welcome to The Gentlemen Fantasy Football League!

Established in Fort Worth, Texas, The Gentlemen League brings together 10 competitive managers each year for the ultimate test of fantasy football skill, strategy, and luck. From epic trade battles and shrewd waiver pickups to dramatic Monday night comebacks, our league is built on true sportsmanship, savvy team-building, and a healthy dose of smack talk.

**2025 Season Highlights:**
- Custom half-PPR scoring and FAAB waivers create a dynamic, tactical league experience.
- Six-team playoff chase begins week 15, with every matchup and move counting down the stretch.
- Full manager bios, live matchups, power rankings, transaction history, and weekly performance analytics keep everyone in-the-know.
- Recent innovations include team management grading, optimal draft comparisons, and league-wide activity metrics using Sleeper data.

Whether you’re here to scout rivals, reminisce over legendary weeks, track your win percentage, or simply keep the trophy dreams alive, this site is your one-stop destination for everything Gentlemen League.

**Good luck to all managers in the 2025 season—may the best roster win!**
`;
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
     {
 managerID: "188815879448829952", // Your Sleeper ID for MambaKyler
    name: "Bennett Smith",
    location: "Fort Worth, TX",
    bio: "Creator of the Fantasy Metrics tool. Strategy: maximum upside, all gas no brakes.",
    photo: "/managers/bennett_smith.jpg", // Make sure this exists in static/managers/
    fantasyStart: 2013,
    favoriteTeam: "lar", // Must be lowercase, e.g. dal for Dallas, phi for Philadelphia, etc.
    mode: "Win Now",
    rival: {
      name: "Sakunaa",
      link: 1, // Index of this rival in the array
      image: "/managers/Sakunaa.jpg"
    },
    valuePosition: "RB",
    rookieOrVets: "Vets",
    philosophy: "Draft winners, play the matchups, keep calm and collect waivers.",
    tradingScale: 7,
    preferredContact: "Sleeper"
  },
  {
    managerID: "",
    name: "RiverRat72",
    location: "Arlington, TX",
    bio: "League champ, trade wizard, and connoisseur of wild Sunday night comebacks.",
    photo: "/managers/riverrat72.jpg",
    fantasyStart: 2012,
    favoriteTeam: "phi",
    mode: "Win Now",
    rival: {
      name: "Bennett Smith",
      link: 0,
      image: "/managers/MambaKyler.jpg"
    },
    valuePosition: "WR",
    rookieOrVets: "Rookies",
    philosophy: "Aggressively seek waiver gems and shake up the standings.",
    tradingScale: 9,
    preferredContact: "Text"
  },
  // Add more manager objects following this template for all league members
];

  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
