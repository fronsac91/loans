export const convertSecIntoDays = (seconds) => {
    const nowDate = new Date();
    const endDate = new Date(nowDate.getTime() + (seconds * 1000));
  
    return numberOfDaysBetween(nowDate.getTime(), endDate.getTime());
  }
  
  export const numberOfDaysBetween = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
  
    const miliseconds = endDate.getTime() - startDate.getTime();
    const seconds = miliseconds / 1000;
    const minutes = seconds / 60;
    const hours = minutes / 60;
    const days = Math.floor(hours / 24);
  
    let response = "";
    if (days <= 1) {
      response = response.concat(days + " day");
    } else if (days > 1) {
      response += days + " days";
    }
  
    return response;
  };