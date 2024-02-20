console.log(returnSum(8, 10));

function returnSum(x, y) {
    console.log(sum); // Undefined Due to Hoisting
    var sum;
    sum = x + y;
    return sum;
}