// formatDate
export const formatDate = (date) => {
    // Convert ISO date string (from variable 'date') to a Date object
    const formattedDate = new Date(date);

    // Get individual parts of the date
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true, // For 12-hour format with AM/PM
    };

    // Format the date using toLocaleString
    return formattedDate.toLocaleString("en-US", options);
};

//
export const format_Date = (date) =>
    new Intl.DateTimeFormat("en", {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(new Date(date));

//
export const formatDateCity = (date) =>
    new Intl.DateTimeFormat("en", {
        day: "numeric",
        month: "long",
        year: "numeric",
        weekday: "long",
    }).format(new Date(date));
