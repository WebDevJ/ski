# Ski

# local environment install/run instructions.
npm install, <br>
npm run dev, <br>
Project is running at http://localhost:8080/

# ProjectLog
BUG FIXED : Issue [#1](https://github.com/WebDevJ/ski/issues/1)<br>
Direction value is set to zero on collision and then turnLeft() function is setting direction to an undefined value  of “-1". Test are now in place but in future I would use wallaby.js to insure proper code coverage.

UNIT TEST : Issue [#3](https://github.com/WebDevJ/ski/issues/3)<br>
Three unit test added.  
1. turnLeft(), test function values being returned so we never make a change in the future that gives us a undefined value.
2. SKIER_DIRECTIONS, these values in constants.js are the root of the problem/bug and test are needed here so we never make a change here to these set of values that goes unoticed.  

JUMP UPDATE : Issue [#4](https://github.com/WebDevJ/ski/issues/4)<br>
 1. skier can now jump by pressing the spaceBar key.
 2. skier can now use the ramp asset to jump whenever he hits a ramp.
 3. only assets of type "rock1" && "rock2" are cleared by jumping before collision.


