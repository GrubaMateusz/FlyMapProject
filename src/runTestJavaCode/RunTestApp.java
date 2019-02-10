package runTestJavaCode;

import dataAndTime.TimeApplication;
import javafx.application.Application;
import javafx.stage.Stage;
import parserDMS.LoadFile;
import testPackage.PointClass;

import java.io.IOException;
import java.io.UTFDataFormatException;

public class RunTestApp extends Application {

    public static void main(String[] args) {
        launch(args);
    }

    public static String s1,s2;
    private PointClass pointClass = new PointClass(4,9);


    @Override
    public void start(Stage primaryStage) throws IOException {

    s1 = new String("Its Me I am in main s1");
    s2 = new String("heheh is s2");
    System.out.println(pointClass.getX());
    System.out.println(pointClass.getY());
    }
}
