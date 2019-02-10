package testPackage;

public class PointClass {

    private static int x;
    private static int y;


    public PointClass(int x, int y){


        this.x = x;
        this.y = y;
        System.out.println("to jest x "+x+" a to y: "+y);


    }

    public static void setX(int x) {
        PointClass.x = x;
    }

    public static void setY(int y) {
        PointClass.y = y;
    }

    public static int getX() {
        return x;
    }

    public static int getY() {
        return y;
    }
}
