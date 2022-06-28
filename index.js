function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!` ;
}

function mondayWork(workPlace = "go to the office") {
    return `This Monday, I will ${workPlace}.`;
}

function wrapAdjective(flair = "*") {
    function message (adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`
    }
    return message;
}