// @author: Amir Armion
// @version: V.01

function squareRoot(number)
{
    return Math.sqrt(number);
}

function square(number)
{
    return Math.pow(number, 2);
}

function distance(x1, y1, x2, y2)
{
    return (squareRoot(square(x2 - x1) + square(y2 - y1))).toFixed(2);
}

module.exports = { distance };
