alert ("welcome to my domaian");




// Display the arrays
console.log("jssOne:", jssOne);
console.log("jssTwo:", jssTwo);
console.log("jssThree:", jssThree);

function checkPassOrFail(score) {
    if (score >= 180) {
        console.log("Passed");
    } else {
        console.log("Failed");
    }
}

// Example usage
checkPassOrFail(200); // Logs: Passed
checkPassOrFail(150); // Logs: Failed





function checkVotingEligibility(age) {
    if (age >= 18) {
        return "You are eligible to vote";
    } else {
        return "Not eligible";
    }
}

// Example usage
console.log(checkVotingEligibility(20)); // Logs: You are eligible to vote
console.log(checkVotingEligibility(16)); // Logs: Not eligible








function checkVotingEligibility(age) {
    if (age >= 18) {
        return "You are eligible to vote";
    } else {
        return "Not eligible";
    }
}

// Example usage
console.log(checkVotingEligibility(20)); // Logs: You are eligible to vote
console.log(checkVotingEligibility(16)); // Logs: Not eligible






function checkAccess(hasID, isAbove18) {
    if (hasID && isAbove18) {
        return "Access granted";
    } else {
        return "Access denied";
    }
}

// Example usage
console.log(checkAccess(true, true));  // Logs: Access granted
console.log(checkAccess(true, false)); // Logs: Access denied
console.log(checkAccess(false, true)); // Logs: Access denied
console.log(checkAccess(false, false)); // Logs: Access denied








const studentScores = [45, 67, 89, 32, 50, 76, 49];

for (let i = 0; i < studentScores.length; i++) {
    if (studentScores[i] > 50) {
        console.log("Pass");
    } else {
        console.log("Fail");
    }
}

const didPassBothSubjects = (mathScore, englishScore) => {
    return mathScore >= 50 && englishScore >= 50 ? "Yes" : "No";
};

// Example usage
console.log(didPassBothSubjects(60, 70)); // Logs: Yes
console.log(didPassBothSubjects(45, 55)); // Logs: No
console.log(didPassBothSubjects(50, 49)); // Logs: No



function canSignUp(email, phoneNumber) {
    if (email || phoneNumber) {
        return "Sign-up allowed";
    } else {
        return "Sign-up not allowed";
    }
}

// Example usage
console.log(canSignUp("user@example.com", null)); // Logs: Sign-up allowed
console.log(canSignUp(null, "1234567890"));       // Logs: Sign-up allowed
console.log(canSignUp(null, null));              // Logs: Sign-up not allowed

function validateCredentials(username, password) {
    if (!username || !password) {
        return "Invalid input";
    } else {
        return "Valid input";
    }
}

// Example usage
console.log(validateCredentials("user123", "pass123")); // Logs: Valid input
console.log(validateCredentials("", "pass123"));        // Logs: Invalid input
console.log(validateCredentials("user123", ""));        // Logs: Invalid input
console.log(validateCredentials("", ""));               // Logs: Invalid input

