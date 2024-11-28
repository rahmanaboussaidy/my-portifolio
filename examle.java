public class Coict{
    void study(){
        System.out.println("The collage of information and technology");
    }
    public static void main(String[] args) {
        Coict c = new Coict();
        c.study();
        Coict m = new Cse();
        m.study();
        Coict r = new Ist();
        r.study();
        Coict i = new IF();
        i.study();
        Coict t = new Telecom();
        t.study();
    }
}
class Cse extends Coict{
    void study(){
        System.out.println("The cse studies math");
    }
}
class Telecom extends Coict{
    void study() {
        System.out.println("The Telecom studies electronic");
    }
}
class IF extends Coict{
    void study(){
        System.out.println("The If studies Computing");
    }
}
class Ist extends Coict{
    void study() {
        System.out.println("The Ist studies Software development");
    }
}