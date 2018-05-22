package dataAndTime;

import java.time.LocalDate;
import java.time.LocalDateTime;

public class TimeApplication {

    private final static int timeout = 1000;
    private LocalDateTime webTime = null;
    private String converedTime;
    private String S;
    private int hour;
    private int min;
    private int day;
    private String month;
    private int year;


    public TimeApplication(){

        setDataAndTikme(webTime);

    }
    private synchronized void setDataAndTikme(LocalDateTime localDateTime) {

                hour = localDateTime.now().getHour();
                min = localDateTime.now().getMinute();
                day = localDateTime.now().getDayOfMonth();
                month = localDateTime.now().getMonth().toString();
                year = localDateTime.now().getYear();

                converedTime = ""+day+"/"+month+"/"+year+"\t"+hour+" : "+min+"" ;

                // System.out.println(converedTime);
    }

    public String getConveredTime() {
        return converedTime;
    }
    private String zeroAdd(int time){
        return((time<10)?"0"+time : time+"");

    }




    public synchronized void refreshTime(){

        while(true) {
            try {
                wait(timeout);

            } catch (InterruptedException e) {
                e.printStackTrace();
            }

        }

    }
}
