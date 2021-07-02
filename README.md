# Ski

# local environment install/run instructions.
npm install
npm run dev
Project is running at http://localhost:8080/

# ProjectLog
BUG FIXED : Issue #1
Direction value is set to zero on collision and then turnLeft() function is setting direction to an undefined value  of “-1". Test are now in place but in future I would use wallaby.js to insure proper code coverage.

UNIT TEST : Issue #3
Three unit test added.  
1. turnLeft(), test function values being returned so we never make a change in the future that gives us a undefined value.
2. SKIER_DIRECTIONS, these values in constants.js are the root of the problem/bug and test are needed here so we never make a change here to these set of values that goes unoticed.  
