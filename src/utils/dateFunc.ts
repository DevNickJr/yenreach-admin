
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

export const formatDate = (date: number) => {
    const newDate = new Date(date * 1000); // convert to milliseconds
    const day = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();
    // console.log("newDate", newDate, "day", day, "month", month, "year", year);
    return `${day} ${months[month-1]} ${year}`;
};
export const daysAgo = (date: number) => {
    // const newDate = new Date(date * 1000); // convert to milliseconds
    const newDate = date * 1000; // convert to milliseconds
    const today = Date.now();

    const diffTime = Math.abs(today - newDate);

    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays;
};

export const formatDate2 = (date: number) => {
    const newDate = new Date(date * 1000); // convert to milliseconds
    const day = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();
    // console.log("newDate", newDate, "day", day, "month", month, "year", year);
    return `${day}-${month}-${year}`;
};
  
export const expired = (date: number) => {
    if (!date) return true;
    
    const newDate = new Date(date * 1000); // convert to milliseconds
    const today = new Date();

    // console.log("newDate", newDate, "today", today);

    if (newDate < today) {
        return true;
    }
    return false;
};
  
  