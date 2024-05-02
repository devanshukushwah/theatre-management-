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
@Entity
@Table(name="SHOWS")
public class Show {

    @Id
    @GeneratedValue
    private long id;
    private Date startTime;
    private Date endTime;
    private long movieId;
    private String movieName;
    private int totalSeats;
    private int bookedSeats;

    @Column(insertable = false, updatable = false)
    private Boolean userBooked;
}
