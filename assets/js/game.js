var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//you can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttach = 12;

var fight = function() {
    window.alert("Welcome to Robot Gladiators!");
};

fight(); {

        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Either 'FIGHT' or 'SKIP' to choose.");

        if (promptFight === "fight" || promptFight === "FIGHT") {
            enemyHealth = enemyHealth - playerAttack;
            console.log(
                playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining. "
            );
        }

        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died! ")
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left. ")
        }

        playerHealth = playerHealth - enemyAttach
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");

        } else if (promptFight === "skip" || promptFight === "SKIP") {
            var confirmSkip = window.confirm("Are you sure you'd like to quit?")

        }
        
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");

            playerMoney = playerMoney - 2;
        }
        else {
            fight();
        }
    }

        else {
            window.alert;("You need to choose a valid option. Try again!");
        }
    };