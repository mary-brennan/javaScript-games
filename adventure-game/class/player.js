const {Character } = require('./character');
class Player extends Character {

    constructor(name, startingRoom) {
        super(name);
        this.currentRoom = startingRoom;
        this.items = [];
    }

    move(direction) {

        const nextRoom = this.currentRoom.getRoomInDirection(direction);

        // If the next room is valid, set the player to be in that room
        if (nextRoom) {
            this.currentRoom = nextRoom;

            nextRoom.printRoom(this);
        } else {
            console.log("You cannot move in that direction");
        }
    }

    printInventory() {
        if (this.items.length === 0) {
            console.log(`${this.name} is not carrying anything.`);
        } else {
            console.log(`${this.name} is carrying:`);
            for (let i = 0; i < this.items.length; i++) {
                console.log(`  ${this.items[i].name}`);
            }
        }
    }

    takeItem(itemName) {
        let index;
        this.currentRoom.items.map(thing => {
            if (thing.name === itemName) {
                this.items.push(thing);
                index = this.currentRoom.items.indexOf(thing);
                this.currentRoom.items.splice(index, 1);
                return thing;
            }
        });

    }

    dropItem(itemName) {
        let droppedItem;
        for (let item of this.items) {
            if (item.name === itemName) {
                this.currentRoom.items.push(...(this.items.splice(this.items.indexOf(item), 1)));
                return item;
            }
        }

    }

    eatItem(itemName) {
        this.items.map(item => {
            if (item.name === itemName && item.isFood) {
                this.items.splice(this.items.indexOf(item, 1));
            }
        });


    }

    getItemByName(name) {
        for (const item of this.items) {
            if (item.name === name) {
                return item;
            }
        }

    }
}

module.exports = {
    Player,
};
