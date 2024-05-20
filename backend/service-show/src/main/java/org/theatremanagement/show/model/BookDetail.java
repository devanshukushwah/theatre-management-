package org.theatremanagement.show.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BookDetail {
    private Show show;
    private Movie movie;
    private BookShow bookShow;

}
