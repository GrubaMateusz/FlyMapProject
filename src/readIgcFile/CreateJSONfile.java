package readIgcFile;


import org.json.JSONObject;

import java.io.*;
import org.apache.commons.io.*;

public class CreateJSONfile {

private FileWriter fileWriter;


    CreateJSONfile(JSONObject jsonObject){

        try {
            fileWriter = new FileWriter(new File("src\\readIgcFile\\json.json"));
            fileWriter.write(jsonObject.toString());
            fileWriter.flush();
            fileWriter.close();

        } catch (IOException e) {
            System.out.println("File not created");
            e.printStackTrace();
        }

}
}
