#Conditionals

##if/else syntax
```Java
int round = 7;
if (round > 12) {
  System.out.println("The match is over!");
} else if (round > 0) {
  System.out.println("The match is underway!");
}	else {
  System.out.println("The boxing match hasn't started yet.");
}
```

##Ternary
```Java
int fuelLevel = 3;
// Set canDrive to the result of a ternary expression
char canDrive = (fuelLevel > 0) ? 'Y' : 'N';
System.out.println(canDrive);
```

##Switch
```Java
char penaltyKick = 'X';

switch (penaltyKick) {

  case 'L': System.out.println("Messi shoots to the left and scores!");
      break;
  case 'R': System.out.println("Messi shoots to the right and misses the goal!");
      break;
  case 'C': System.out.println("Messi shoots down the center, but the keeper blocks it!");
      break;
  default:
    System.out.println("Messi is in position...");
}
```
