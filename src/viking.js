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

        if (this.health > 0) {
          return `${this.name} has recieved ${damage} points of damage`
        }
        
        else {
           return `${this.name} has died in act of combat`
        }

        return this.health
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

        if (this.health > 0) {
            return `A Saxon has recieved ${damage} points of damage`
          }
          
          else {
             return `A Saxon has died in combat`
          }
    }
}    



// War
class War {

}
