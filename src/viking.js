// Soldier
class Soldier {

    constructor (health, strength) {
        this.health = health;
        this.strength = strength;    
    }

    attack (){
        return this.strength;
    }

    receiveDamage (damage) {

        this.health = this.health - damage
    }
}

// Viking
class Viking {

    constructor (name, health, strength) {
        this.name = name;
        this.health = health;
        this.strength = strength;
    }    
    
    attack() {
        return this.strength;
    }

    receiveDamage(damage) {

        this.health = this.health - damage
    }

    battleCry (){
        return "Odin Owns You All!"
    }

}



// Saxon
class Saxon {
    
    constructor (health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack () {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health = this.health - damage
    }

}



// War
class War {

}
