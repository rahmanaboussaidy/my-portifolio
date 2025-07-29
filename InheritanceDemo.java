// Base Class
class Animal {
    String name;

    void setName(String name) {
        this.name = name;
    }

    void showName() {
        System.out.println("Animal Name: " + name);
    }
}

// Multilevel Inheritance
class Mammal extends Animal {
    String type;

    void setType(String type) {
        this.type = type;
    }

    void showType() {
        System.out.println("Mammal Type: " + type);
    }
}

// Another Level of Inheritance
class Dog extends Mammal {
    String breed;

    void setBreed(String breed) {
        this.breed = breed;
    }

    void showDetails() {
        showName();
        showType();
        System.out.println("Dog Breed: " + breed);
    }
}

// Hierarchical Inheritance
class Cat extends Mammal {
    String color;

    void setColor(String color) {
        this.color = color;
    }

    void showDetails() {
        showName();
        showType();
        System.out.println("Cat Color: " + color);
    }
}

// Main Class
public class InheritanceDemo {
    public static void main(String[] args) {
        // Multilevel Inheritance Example
        Dog dog = new Dog();
        dog.setName("Buddy");
        dog.setType("Domestic");
        dog.setBreed("Golden Retriever");
        System.out.println("Dog Details:");
        dog.showDetails();

        System.out.println();

        // Hierarchical Inheritance Example
        Cat cat = new Cat();
        cat.setName("Whiskers");
        cat.setType("Domestic");
        cat.setColor("White");
        System.out.println("Cat Details:");
        cat.showDetails();
    }
}
