#OOP, There it Java

##Classes

###i. Initialize Class
Start by creating the starting state of our class. Do this by adding a class constructor to it.

```Java
class Dog {

  public Dog() {

  }

}
```

* A class constructor will allow us to create Dog instances. With a class constructor, we can set some information about the Dog.
* If we do not create a class constructor, Java provides one that does not allow you to set initial information.

###ii. Add Instance Variables
```Java
class Dog {

  int age;

  public Dog() {

  }

}
```

###iii. Add paramaters
```Java
class Dog {

  int age;

  public Dog(int dogsAge) {
    age = dogsAge;
  }

}
```

##The Main Method
`	public static void main(String[] args) { } `
* First let's understand the purpose of the main method: When Java runs your program, the code inside of the main method is executed.
