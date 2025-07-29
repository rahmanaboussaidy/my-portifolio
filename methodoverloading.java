public class Main{
    public int sum (int a, int b){
        return a+b;
    }

    public int sum (int a, int b, int c){
        return a+b+c;
    }

    public double sum (double a, double b){
        return a+b;
    }

    public static void main(String[] args) {
        Main m = new Main();
        System.out.println("The sum between these two integer numbers is:" + m.sum(13, 20));
        System.out.println("The sum between these three integer numbers is:" + m.sum(13, 24, 3));
        System.out.println("The sum between these Double numbers is:" + m.sum(11.3, 5.22, ));
    }
}