package readIgcFile;

import parserDMS.LoadFile;

public class RunApp {

    public static void main(String[] args){

        LoadFileFromServDir start = new LoadFileFromServDir();
       // CreateJSONfile createJSONfile = new CreateJSONfile();

        ElementToJSON ele = new ElementToJSON(start.getCoords());
    }


}


