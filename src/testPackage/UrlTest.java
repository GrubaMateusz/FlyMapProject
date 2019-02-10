package testPackage;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URL;

public class UrlTest {

    private URL url;


    public UrlTest() throws IOException {

        URL url = new URL("localhost:8080/JarezToSenegal.igc");
    BufferedReader in = new BufferedReader(
            new InputStreamReader(url.openStream()));

    String inputLine;
        while ((inputLine = in.readLine()) != null)
                System.out.println(inputLine);
        try {
            in.close();
        } catch (IOException e) {
            System.out.println("WTF!!!");
            e.printStackTrace();
        }
    }


}
