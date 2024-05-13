-- for show entity
CREATE TABLE IF NOT EXISTS show (
    id SERIAL PRIMARY KEY,
    START_TIME TIMESTAMP NOT NULL,
    END_TIME TIMESTAMP NOT NULL,
    MOVIE_ID BIGINT NOT NULL,
    CREATED_DATE TIMESTAMP without time zone NOT NULL
       DEFAULT (current_timestamp AT TIME ZONE 'UTC')
);

-- for show entity
CREATE TABLE IF NOT EXISTS book_show (
    id SERIAL PRIMARY KEY,
    SHOW_ID BIGINT NOT NULL,
    USER_ID BIGINT NOT NULL,
    CREATED_DATE TIMESTAMP without time zone NOT NULL
       DEFAULT (current_timestamp AT TIME ZONE 'UTC')
);


CREATE TABLE IF NOT EXISTS movie
(
    id SERIAL PRIMARY KEY,
    actors VARCHAR(255),
    director VARCHAR(255),
    duration bigint NOT NULL,
    "name" VARCHAR(255)
)