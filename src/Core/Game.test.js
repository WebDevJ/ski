import "babel-polyfill";
import { Skier } from "../Entities/Skier";
import * as Constants from "../Constants";

test('turnLeft function expected to only return values greater then -1', () => {
    //setUp for Test
    const skier = new Skier(0, 0);
    //Function in question  
    const value = skier.turnLeft()
    //console.log(value, "Returned TEST VALUE") // 2 is returned
    expect(value).toBeTruthy();
    expect(value).toBeGreaterThan(-1);
});
// ToDo: later expand unit test to cover all functions using wallaby

test('SKIER_DIRECTIONS properties length to equal 6', () => {// expected to fail if anyone adds to this object
    const object = Constants.SKIER_DIRECTIONS
    const count= Object.keys(object).length;
    expect(count).toBe(7);
    //console.log(Constants.SKIER_DIRECTIONS, "SKIER_DIRECTIONS");
    //console.log(count, "length SKIER_DIRECTIONS");
});

test('all 6 SKIER_DIRECTIONS properties toBe exact value and value type ', () => {// expected to fail if anyone changes values of this object 
    const object = Constants.SKIER_DIRECTIONS

    expect(object.CRASH).toBe(0);
    expect(object.CRASH).toBeFalsy();

    expect(object.LEFT).toBe(1);
    expect(object.LEFT).toBeTruthy();

    expect(object.LEFT_DOWN).toBe(2);
    expect(object.LEFT_DOWN).toBeTruthy();

    expect(object.DOWN).toBe(3);
    expect(object.DOWN).toBeTruthy();

    expect(object.RIGHT_DOWN).toBe(4);
    expect(object.RIGHT_DOWN).toBeTruthy();

    expect(object.RIGHT).toBe(5);
    expect(object.RIGHT).toBeTruthy();

    expect(object.JUMP).toBe(6);
    expect(object.JUMP).toBeTruthy();
});