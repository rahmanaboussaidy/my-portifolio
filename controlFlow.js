function categorizeGrade(score) {
    if (score >= 90) {
        console.log("Grade: A");
    } else if (score >= 80) {
        console.log("Grade: B");
    } else if (score >= 70) {
        console.log("Grade: C");
    } else {
        console.log("Grade: D");
    }
}

// Test the function
categorizeGrade(85);  
categorizeGrade(92);  
categorizeGrade(75);



function checkDay(day) {
    switch (day) {
        case "Sunday":
            console.log("Weekend");
            break;
        default:
            console.log("Weekday");
    }
}

// Test the function
checkDay("Monday");   
checkDay("Sunday");