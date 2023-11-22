// Enums

enum Priority {
    Lowest = 0,
    Low = 1,
    Medium = 2,
    High = 3,
    Urgent = 4
}

function addTicket(details: string, priority: Priority) {
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
 addTicket("Fix Your Life", Priority.Urgent)