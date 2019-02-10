package testPackage;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

public class PostTest {

    private String nm;
    private List<String> list = new ArrayList<String>();

    private static List<String> readFile(String filename)
    {
        List<String> records = new ArrayList<String>();
        try
        {
            //URL filee = new URL("http://localhost:8080/JarezToSenegal.igc");

            BufferedReader reader = new BufferedReader(new FileReader(filename));
            String line;
            while ((line = reader.readLine()) != null)
            {

                records.add(line);
            }
            reader.close();
            return records;
        }
        catch (Exception e)
        {
            System.err.format("Exception occurred trying to read '%s'.", filename);
            e.printStackTrace();
            return null;
        }
    }
    public PostTest(String nam){
        nam = this.nm;
        this.list =   readFile(nam);
    }

    public String getNm() {
        return nm;
    }

    public List<String> getList() {
        return list;
    }
}
