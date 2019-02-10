package readIgcFile;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

public class LoadFileFromServDir {



   private static List<String> loadedFile;
   private List<String> coords = new ArrayList<String>();
   private List<String> infoTask = new ArrayList<String>();




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


    public LoadFileFromServDir(){

        System.out.println("xD");

        loadedFile = readFile("JarezToSenegal.igc");


        if (loadedFile != null) {
            for (String aLoadedFile : loadedFile) {
                if (aLoadedFile.indexOf('B') == 0) {
                    coords.add(aLoadedFile);
                } else {
                    infoTask.add(aLoadedFile);
                }

            }
        }else{
                System.out.println("File is empty");
             }

        System.out.println(coords.get(240));
      System.out.println("Size file: "+loadedFile.size());
      System.out.println("Size coords: "+coords.size());
      System.out.println("Size infoTasc: "+infoTask.size());
    }
    public List<String> getCoords() {
        return coords;
    }

    public List<String> getInfoTask() {
        return infoTask;
    }

    public static void setLoadedFile(List<String> loadedFile) {
        LoadFileFromServDir.loadedFile = loadedFile;
    }
}
