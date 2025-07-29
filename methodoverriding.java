public class Main {
    void run(){
        System.out.println("The vehicle is running Quickly");
    }
}
class Car extends Main{
    void run(){
        System.out.println("The car is running Quickly");
    }

    public static void main(String[] args) {
        Main c = new Car();
        c.run();
        Main m = new Main();
        m.run();
    }
}