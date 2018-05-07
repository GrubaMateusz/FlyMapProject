package runTestJavaCode;

import dataAndTime.TimeApplication;
import javafx.application.Application;
import javafx.stage.Stage;

public class RunTestApp extends Application {

    public static void main(String[] args) {
        launch(args);
    }




    @Override
    public void start(Stage primaryStage) {

        TimeApplication time = new TimeApplication();
        System.out.println(time.getConveredTime());

    }
}
