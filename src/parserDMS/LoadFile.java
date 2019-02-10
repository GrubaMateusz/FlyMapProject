package parserDMS;


import java.io.*;
import java.nio.file.Files;
import java.nio.file.Paths;


public class LoadFile {

    private static Files gpsFile = null;
    private  static String gpsString ="";

    public LoadFile(String path) throws IOException {

        System.out.println("Test in Class "+getClass().getName()+" : ");
        gpsString= readFile(path);
}


private String readFile(String path ) throws IOException {

    String out = String.join("\n", Files.readAllLines(Paths.get(path)));
    return out;
    }



    public String getGpsString() {
        return gpsString;
    }
}
