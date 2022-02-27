let Calendar = [[
    
]]
class Events{
    constructor(){

    }
    genericEvent(time){
        let events = [];
        events.push(<p>{this.calculateDate(time)} <b>&gt;</b> Ali has earned $12 dollars</p>);
        events.push(<p>{this.calculateDate(time)} <b>&gt;</b> Ali is goofy.</p>);
        return events;
    }
    handleEvents(time){
        let events = [];
        events.push(...this.genericEvent(time));
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