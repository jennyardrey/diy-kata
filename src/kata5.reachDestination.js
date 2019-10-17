const reachDestination = (distance, speed) => {
    let arrival = distance/speed;
    result = Math.round(arrival*2)/2;
    return 'I should be there in ' + result + ' hours.';
};

module.exports = reachDestination;
