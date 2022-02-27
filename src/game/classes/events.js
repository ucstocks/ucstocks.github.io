let Calendar = [
  [
    "BigMoney CEO somehow at large?",
    "Pear CEO Paul Podkin noted to have an affinity for alliteration and it’s absolutely astounding after all.",
    "Raspberry noted as saying that “Pear will never take off,” as they’re much too focused on stringing together similar sounding words."
  ],[
    "Cinema House, a longstanding movie company, has just come in with a brand new inventory of antiquated movies that they are convinced will pull in many customers.",
    "Concerns over Pear’s use of user data emerges in privacy lawsuit. Pear claims it’s only collecting the “delicious data” for a “super surprise.” Attempts to make CEO Podkin speak normally only resulting in cutting critical comments.",
    "Pete noted as saying that “a lot new gold been found ‘round these parts!” and that he expects “gold’ll be just as good as dollars for a good while yet.”"
  ],[
    "Johnson and Jeffery’s new CEO seems “grounded, down-to-earth, and overall just very rock steady.” Currently inquiring whether our interviewee is a hiker or geologist.",
    "BigMoney somehow falling?"
  ],[
    "Cinema House has reported losses for the financial quarter, but express faith in their ability to show digital consumers the power of casettes.",
    "Pete’s gold collection is just as shiny as last year, and Pete is saying that “he always keeps his gold up to par with the market.”"
  ],[
    "Brawlmart takes a punch to the gut as many of its shoppers claim that they “don’t really like being hit while grabbing gallons of milk.” Brawlmart merely said that they’re “wusses.”",
    "Raspberry’s new portable phones noted to constantly crash, though Raspberry prefers to say that they’re “intermittently nonfunctional.”",
    "Pear’s portable “pPod player” plows past prior predictions, rocketing by Raspberry, and creating countless customers."
  ],[
    "Brawlmart’s lawsuit is resolved in favor of the corporation, as it’s lawyer beats the prosecution’s in gladiatorial combat.",
    "Raspberry getting literally trounced by Pear. That’s a yikes.",
    "BigMoney somehow fooled millions and lost people their life savings?"
  ],[
    "Cinema House, in a last-ditch effort to attract customers, has taken massive losses, and is now trying to restock their store with more modern media. Investors, however, have lost faith in CNMA’s leadership.",
    "J&J have made a huge breakthrough in the field of hiccup curing, allowing an affordable way to stop sounding like they had one too many fruit punches.",
    "Pete is happy to offer financial advice to the consumers. “Buy my gold!” He could not be reached for further comment."
  ],[
    "Brawlmart back on the rise as Mike Tyson switches all of his shopping to the supermarket, as he’s able to snatch up every sale in the store due to his... shopping skill.",
    "J&J looking good as they continue to push forward into the field of hiccup treatment, and investors are more than willing to back them."
  ]

]
class Events{
    constructor(){

    }
    handleEvents(time){
        let events = [];
        let container = [];
        container.push(<h3>Breaking News!</h3>);
        for(let i = 0;i<Calendar[time].length;i++){
          container.push(<p>{Calendar[time][i]}</p>);
        }
        events.push(<div className="news">{container}</div>)
        return events;
    }
    calculateDate(time) {
        time += 3;
        let month = "";
        let year = Math.floor(time/4 + 2005);
        if (time % 4 == 0) {
          month="1";
        } else if (time % 4 == 1) {
          month = "4";
        } else if (time % 4 == 2) {
          month = "7";
        } else if (time % 4 == 3) {
          month = "10"
        }
        return (month + "/1/" + "0" + (year - 2000));
      }

}
export default Events