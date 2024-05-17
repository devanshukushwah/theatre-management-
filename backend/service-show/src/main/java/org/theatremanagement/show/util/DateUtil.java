package org.theatremanagement.show.util;

import java.time.format.DateTimeFormatter;
import java.time.ZoneId;
import java.time.ZonedDateTime;

public class DateUtil {

    private static String DAY_FORMAT = "yyyy-MM-dd HH:mm:ss";
    public static String getCurrentTimeInUTC() {
        // Get the current time in UTC
        ZonedDateTime utcNow = ZonedDateTime.now(ZoneId.of("UTC"));

        // Define the desired format
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern(DAY_FORMAT);

        // Format the current time
        return utcNow.format(formatter);
    }


    public static String getCurrentTimeAdjustedByDays(int days) {
        // Get the current time in UTC
        ZonedDateTime utcNow = ZonedDateTime.now(ZoneId.of("UTC"));

        // Adjust the time by the specified number of days
        ZonedDateTime adjustedTime = utcNow.plusDays(days);

        // Define the desired format
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern(DAY_FORMAT);

        // Format the adjusted time
        return adjustedTime.format(formatter);
    }
}
