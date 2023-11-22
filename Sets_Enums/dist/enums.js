"use strict";
// Enums
var Priority;
(function (Priority) {
    Priority[Priority["Lowest"] = 0] = "Lowest";
    Priority[Priority["Low"] = 1] = "Low";
    Priority[Priority["Medium"] = 2] = "Medium";
    Priority[Priority["High"] = 3] = "High";
    Priority[Priority["Urgent"] = 4] = "Urgent";
})(Priority || (Priority = {}));
function addTicket(details, priority) {
    if (priority === 0) {
        console.log("Lowest Priority");
    }
    if (priority === 1) {
        console.log("Lowe Priority");
    }
    if (priority === 2) {
        console.log("Medium Priority");
    }
    if (priority === 3) {
        console.log("High Priority");
    }
    if (priority === 4) {
        console.log("Urgent Priority");
    }
}
addTicket("Fix Your Life", Priority.Urgent);
