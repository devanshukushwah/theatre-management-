package org.theatremanagement.show.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Movie {
    private long id;
    private String name;
    private long duration;
    private List<String> actors;
    private String director;

}
