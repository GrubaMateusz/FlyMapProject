package readIgcFile;

import java.util.ArrayList;
import java.util.List;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;


public class ElementToJSON {


    /*
    B | 06 32 47 | 3649039N 00601634W | A | 01043 | 01087 |00693316293088

   B | 17 45 03 | 14 44 597N017 28 874WA000250003900603401228288

    */
    private String name [] , time [];

    private Double lat [];
    private Double lng [];
    private String atlitude = "A";
    private String barometricMeters [], gpsMeters [];
    private String endOfFile = "00000000000000";

    private JSONObject jsonObjects = new JSONObject();
    private CreateJSONfile createJSONfile;


    public ElementToJSON(List<String> coordFile){
        int listSize = coordFile.size();
        name = new String[listSize];
        time = new String[listSize];

        lat = new Double[listSize];
        lng = new Double[listSize];
        barometricMeters = new String[listSize];
        gpsMeters = new String[listSize];


        for (int i = 0;i<listSize;i++) {

            String element = coordFile.get(i);
                name[i] = element.substring(0, 1);
                time[i] = element.substring(1, 7);

                lat [i] = dmsToLat(element.substring(7,15));
                lng [i] = dmsToLat(element.substring(15,24));
                barometricMeters[i] = deleteZero(element.substring(25,24+5));
                gpsMeters[i] = deleteZero(element.substring(25,24+5));

        }
        try {
            jsonObjects.put("name",name);
            jsonObjects.put("time",time);
            jsonObjects.put("lat",lat);
            jsonObjects.put("lng",lng);
            jsonObjects.put("barametric",barometricMeters);
            jsonObjects.put("gpsMeters",gpsMeters);

        } catch (JSONException e) {
            e.printStackTrace();
        }

        createJSONfile = new CreateJSONfile(jsonObjects);

    }
    private static Double dmsToLat(String time){

        Double dd,min,sec;

        int timeSize = time.length()-1;

        if(time.indexOf('0') ==  0){
            time = deleteZero(time);
            timeSize-=1;
        }
        dd = Double.valueOf(time.substring(0,2));
        min = Double.valueOf(time.substring(2,4));
        sec = Double.valueOf(time.substring(4,timeSize));

        Double latLan = dd+(min/60)+(sec/3600);

        if(time.contains("W") || time.contains("S") ){
            latLan = -(dd)-(min/60)-(sec/3600);

        }
        return latLan;


    }
    private static String deleteZero(String string){

        int strSize = string.length();
        return string.substring(1,strSize);

    }

    public JSONObject getJsonObjects() {
        return jsonObjects;
    }
}
