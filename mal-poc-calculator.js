/**
 * Sums two numbers.
 * @author Ricardo Malnati.
 * @param {number} n1 First number.
 * @param {number} n2 Second number.
 * @throws Exception Unexpected exception.
 * @return {Promise} The promise of result.
 */
function sum(n1, n2) {
    let promise = new Promise(function(resolve, reject) {
        try {
            console.log(`Executing sum(${n1} and ${n2}){...}`);
            resolve(n1 + n2);
        } catch (e) {
            reject(e);
        }
    });
    return promise;
}

/**
 * Subtracts two numbers.
 * @author Ricardo Malnati.
 * @param {number} n1 First number.
 * @param {number} n2 Second number.
 * @throws Exception Unexpected exception.
 * @return {Promise} The promise of result.
 */
function reduce(n1, n2) {
    let promise = new Promise(function(resolve, reject) {
        try {
            console.log(`Executing reduce(${n1} and ${n2}){...}`);
            resolve(n1 - n2);
        } catch (e) {
            reject(e);
        }
    });
    return promise;
}

/**
 * Multiplies two numbers.
 * @author Ricardo Malnati.
 * @param {number} n1 First number.
 * @param {number} n2 Second number.
 * @throws Exception Unexpected exception.
 * @return {Promise} The promise of result.
 */
function multiply(n1, n2) {
    let promise = new Promise(function(resolve, reject) {
        try {
            console.log(`Executing multiply(${n1} and ${n2}){...}`);
            resolve(n1 * n2);
        } catch (e) {
            reject(e);
        }
    });
    return promise;
}

/**
 * Divides two numbers.
 * @author Ricardo Malnati.
 * @param {number} n1 First number.
 * @param {number} n2 Second number.
 * @throws Exception Unexpected exception.
 * @return {Promise} The promise of result.
 */
function divides(n1, n2) {
    let promise = new Promise(function(resolve, reject) {
        try {
            console.log(`Executing divides(${n1} and ${n2}){...}`);
            resolve(n1 / n2);
        } catch (e) {
            reject(e);
        }
    });
    return promise;
}

/**
 * Calculates.
 * @author Ricardo Malnati.
 * @param {number} n1 First number.
 * @param {number} n2 Second number.
 * @param {string} op Operation ( -, +, *, / ).
 * @throws Error For operation tor found.
 * @throws Exception Unexpected exception.
 * @return {Promise} The promise of result.
 */
function calculator(n1, n2, op) {
    let promisse = new Promise(function(resolve, reject) {
        try {
            if (!n1 || !n2 || !op) {
                reject(new Error(`All arguments must be shall.`));
            }
            if (op === '+') {
                resolve(sum(n1, n2));
            }
            if (op === '-') {
                resolve(reduce(n1, n2));
            }
            if (op === '*') {
                resolve(multiply(n1, n2));
            }
            if (op === '/') {
                resolve(divides(n1, n2));
            }
            reject(new Error(`Operation "${op}" not found!`));
        } catch (e) {
            reject(e);
        }
    });
    return promisse;
}

/**
 * Calculates all operations.
 * @author Ricardo Malnati.
 * @param {number} n1 First number.
 * @param {number} n2 Second number.
 * @throws Exception Unexpected exception.
 * @return {Promise} The promise of result.
 */
function calculateAll(n1, n2) {

    let promiseAdder = calculator(n1, n2, "+")
        .then(function(result) {
            console.log(`Result by adding two numbers. (${result})`);
            return result;
        }).catch(function(error) {
            console.error(`Error by adding two numbers.!`, error);
            return Promise.reject(e);
        });

    let promiseReducer = calculator(n1, n2, "-")
        .then(function(r) {
            console.log(`Result by subtracting two numbers. (${r})`);
            return Promise.resolve(r);
        }).catch(function(e) {
            console.error(`Error by subtracting two numbers.!`, e);
            return Promise.reject(e);
        });

    let promiseMultiplyier = calculator(n1, n2, "*")
        .then(function(r) {
            console.log(`Result by multiplying two numbers. (${r})`);
            return Promise.resolve(r);
        }).catch(function(e) {
            console.error(`Error by multiplying two numbers.!`, e);
            return Promise.reject(e);
        });

    let promiseDivider = calculator(n1, n2, "/")
        .then(function(r) {
            console.log(`Result by dividing two numbers. (${r})`);
            return Promise.resolve(r);
        }).catch(function(e) {
            console.error(`Error by dividing two numbers.!`, e);
            return Promise.reject(e);
        });

    let allPromises = Promise.all([promiseAdder, promiseReducer, promiseMultiplyier, promiseDivider]);
    return allPromises;
}

exports.printMsg = function() {
    console.log("This is a message from the ma-poc-npm package!");
}

module.exports = {
    calculator,
    sum,
    reduce,
    multiply,
    divides
};