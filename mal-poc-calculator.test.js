const calc = require('./calculator.js');

test('adds 1 + 2 to equal 3', function() {
    return calc.calculator(1, 2, '+')
        .then(function(data) {
            expect(data).toBe(3);
        });
});

test('reduces 3 + 2 to equal 1', function() {
    return calc.calculator(3, 2, '-')
        .then(function(data) {
            expect(data).toBe(1);
        });
});

test('multiplies 2 + 2 to equal 4', function() {
    return calc.calculator(2, 2, '*')
        .then(function(data) {
            expect(data).toBe(4);
        });
});

test('divides 6 + 3 to equal 2', function() {
    return calc.calculator(6, 3, '/')
        .then(function(data) {
            expect(data).toBe(2);
        });
});

it('tests that all arguments must be shall error with promises', function() {
    expect.assertions(1);
    return calc.calculator(undefined, undefined, undefined)
        .catch(
            function(e) {
                expect(e).toEqual(new Error(`All arguments must be shall.`));
            }
        );
});

it('tests operetaion error with promises', function() {
    expect.assertions(1);
    const op = '?';
    return calc.calculator(1, 2, op)
        .catch(
            function(e) {
                expect(e).toEqual(new Error(`Operation "${op}" not found!`));
            }
        );
});