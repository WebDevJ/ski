import * as Constants from "../Constants";
import { Entity } from "./Entity";
import { intersectTwoRects, Rect } from "../Core/Utils"; 

export class Skier extends Entity {
    assetName = Constants.SKIER_DOWN;

    direction = Constants.SKIER_DIRECTIONS.DOWN;
    speed = Constants.SKIER_STARTING_SPEED;

    constructor(x, y) {
        super(x, y);
    }

    setDirection(direction) {
        this.direction = direction;
        this.updateAsset();
    }

    updateAsset() {
        this.assetName = Constants.SKIER_DIRECTION_ASSET[this.direction];
    }

    move() {
        switch(this.direction) {
            case Constants.SKIER_DIRECTIONS.LEFT_DOWN:
                this.moveSkierLeftDown();
                break;
            case Constants.SKIER_DIRECTIONS.DOWN:
                this.moveSkierDown();
                break;
            case Constants.SKIER_DIRECTIONS.RIGHT_DOWN:
                this.moveSkierRightDown();
                break;
            case Constants.SKIER_DIRECTIONS.JUMP:
                this.moveSkierDown();
                break;    
        } 
    }

    moveSkierLeft() {
        this.x -= Constants.SKIER_STARTING_SPEED;
    }

    moveSkierLeftDown() {
        this.x -= this.speed / Constants.SKIER_DIAGONAL_SPEED_REDUCER;
        this.y += this.speed / Constants.SKIER_DIAGONAL_SPEED_REDUCER;
    }

    moveSkierDown() {
        this.y += this.speed;
    }

    moveSkierRightDown() {
        this.x += this.speed / Constants.SKIER_DIAGONAL_SPEED_REDUCER;
        this.y += this.speed / Constants.SKIER_DIAGONAL_SPEED_REDUCER;
    }

    moveSkierRight() {
        this.x += Constants.SKIER_STARTING_SPEED;
    }

    moveSkierUp() {
        this.y -= Constants.SKIER_STARTING_SPEED;
    }

    turnLeft() {
        //bug fix #1
        if(this.direction === 0){
            this.setDirection(this.direction + 1);
            }            
       //ToDo: Write unit test "this.direction is never a negative number"
        if(this.direction === Constants.SKIER_DIRECTIONS.LEFT) {
            this.moveSkierLeft();
        }else {
            this.setDirection(this.direction - 1);
        }
        return this.direction;
    }
    

    turnRight() {
        if(this.direction === 6){
             this.setDirection(this.direction - 1);
             } // ToDo: add unitTest to stop this.direction numbers out of range 
        if(this.direction === Constants.SKIER_DIRECTIONS.RIGHT) {
            this.moveSkierRight();
            }
        else {
            this.setDirection(this.direction + 1);
        }
    }

    turnUp() {
        if(this.direction === Constants.SKIER_DIRECTIONS.LEFT || this.direction === Constants.SKIER_DIRECTIONS.RIGHT) {
            this.moveSkierUp();
        }
    }

    turnDown() {
        this.setDirection(Constants.SKIER_DIRECTIONS.DOWN);
    }

    jump() {
        //debugger;

        if(this.direction === Constants.SKIER_DIRECTIONS.RIGHT_DOWN) {
            this.setDirection(Constants.SKIER_DIRECTIONS.JUMP);
            //this.moveSkierRightDown();
            this.moveSkierRight();
        }
        else {
            this.setDirection(Constants.SKIER_DIRECTIONS.JUMP);
            //this.moveSkierLeftDown();
            this.moveSkierLeft();
            //this.setDirection(this.direction + 1);
        }

        const killJump =()=>{ 
            this.setDirection(Constants.SKIER_DIRECTIONS.DOWN);
        }

        setTimeout(function(){
            //this.setDirection(Constants.SKIER_DIRECTIONS.DOWN); // not the same scope
            killJump()
        }, 500);
           
        //console.log(this.direction, "JUMP direction")
        return this.direction; // functions must always return
    }
    //ToDO: unitTest //crash neg. values

    checkIfSkierHitObstacle(obstacleManager, assetManager) {
        //debugger;

        const asset = assetManager.getAsset(this.assetName);
        //console.log("asset",asset) //

        const skierBounds = new Rect(
            this.x - asset.width / 2,
            this.y - asset.height / 2,
            this.x + asset.width / 2,
            this.y - asset.height / 4
        );

        const collision = obstacleManager.getObstacles().find((obstacle) => {
            const obstacleAsset = assetManager.getAsset(obstacle.getAssetName());
            const obstaclePosition = obstacle.getPosition();
            const obstacleBounds = new Rect(
                obstaclePosition.x - obstacleAsset.width / 2,
                obstaclePosition.y - obstacleAsset.height / 2,
                obstaclePosition.x + obstacleAsset.width / 2,
                obstaclePosition.y
            );

            return intersectTwoRects(skierBounds, obstacleBounds);
        });
        //console.log("obstacleAsset",collision) //
        if(collision && collision.assetName === 'ramp' ){

            this.jump();
        }
        if(collision && collision.assetName === 'rock1' || collision && collision.assetName === 'rock2' && (this.direction !== Constants.SKIER_DIRECTIONS.JUMP) ){
            // console.log("DID NOT jump Over",collision.assetName)
            // console.log("this.direction",this.direction)
            // console.log("Constants.SKIER_DIRECTIONS.JUMP",Constants.SKIER_DIRECTIONS.JUMP)

            this.setDirection(Constants.SKIER_DIRECTIONS.CRASH);
        }else if(collision && collision.assetName === 'tree' || collision && collision.assetName === 'treeCluster'){
             this.setDirection(Constants.SKIER_DIRECTIONS.CRASH);
        } //Todo: refactor all of this to switchCase. hard to read. 

    };

}


