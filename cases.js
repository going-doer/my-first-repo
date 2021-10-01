const fact = (n) => {
    var returnVal = 1
    for(i=2; i<=n; i++){
        returnVal *= i
    }
    return returnVal
}

const combination = (n, r) => {
    return Math.floor(fact(n)/(fact(n-r)*fact(r)))
}
const multiCombination = (n, r) => {
    return combination(n+r-1, r)
}
const permutation = (n, r) => {
    return Math.floor(fact(n)/fact(n-r))
}
const multiPermutation = (n, r) => {
    return Math.pow(n, r)
}

module.exports = {
    combination,
    multiCombination,
    permutation,
    multiPermutation,
}