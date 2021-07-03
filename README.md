# Ski

# local environment install/run instructions.
npm install, <br>
npm run dev, <br>
Project is running at http://localhost:8080/

# ProjectLog
BUG FIXED : Issue [#1](https://github.com/WebDevJ/ski/issues/1)<br>
Direction value is set to zero on collision and then turnLeft() function is setting direction to an undefined value of “-1". Test are now in place but in the future, I would use wallaby.js to insure proper code coverage.

UNIT TEST : Issue [#3](https://github.com/WebDevJ/ski/issues/3)<br>
Three unit test added.  
1. turnLeft(), test function values being returned so we never make a change in the future that gives us an undefined value.
2. SKIER_DIRECTIONS, these values in constants.js are the root of the problem/bug, and tests are needed here so we never make a change here to these set of values that goes unnoticed.  

JUMP UPDATE : Issue [#4](https://github.com/WebDevJ/ski/issues/4)<br>
 1. skier can now jump by pressing the spaceBar key.
 2. skier can now use the ramp asset to jump whenever he hits a ramp.
 3. only assets of type "rock1" && "rock2" are cleared by jumping before the collision.

Remaining Issues: <br>
Requesting time from management to get approval for issue [#5](https://github.com/WebDevJ/ski/issues/5). The deadline has been reached. Deploying functional app in the interim.

 Bonus: Issue [#7](https://github.com/WebDevJ/ski/issues/7)<br>
 Added start button with key stroke "s" and intro page with directions issue

 Deloyed App:<br>
 https://jamesski.herokuapp.com/



