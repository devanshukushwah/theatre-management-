package org.theatremanagement.show.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Show {

    private long id;
    private Date startTime;
    private Date endTime;
    private long movieId;
    private String movieName;
    private String status;
    private Date createdDate;
}
