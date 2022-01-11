function distanceFromHqInBlocks(num) {
    return Math.abs(42-num);
}

function distanceFromHqInFeet(endLocation) {
    return distanceFromHqInBlocks(endLocation) * 264;
}

function distanceTravelledInFeet (startLoc, endLoc) {
    return (Math.abs(endLoc - startLoc) * 264);
}

function calculatesFarePrice (startLoc, endLoc) {
    let distanceTraveledInFeet = distanceTravelledInFeet(startLoc, endLoc);
    if (distanceTraveledInFeet <= 400) {
        return 0;
    } else if (distanceTraveledInFeet > 400 && distanceTraveledInFeet < 2000) {
        return (distanceTraveledInFeet - 400) * .02;
    } else if (distanceTraveledInFeet >= 2000 && distanceTraveledInFeet < 2500) {
        return 25;
    } else if (distanceTraveledInFeet >= 2500) {
        return 'cannot travel that far';
    }
}