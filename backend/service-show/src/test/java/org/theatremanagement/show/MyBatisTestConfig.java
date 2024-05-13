package org.theatremanagement.show;

import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.core.io.ClassPathResource;
import org.springframework.jdbc.datasource.init.DatabasePopulator;
import org.springframework.jdbc.datasource.init.ResourceDatabasePopulator;
import org.springframework.jdbc.datasource.init.DatabasePopulatorUtils;

import javax.sql.DataSource;

@Configuration
@Profile("test")
public class MyBatisTestConfig {

//    @Autowired
//    DataSource dataSource;
//
//    @PostConstruct
//    public void initializeSchema() {
//        DatabasePopulator databasePopulator = new ResourceDatabasePopulator(new ClassPathResource("schema.sql"));
//        DatabasePopulatorUtils.execute(databasePopulator, dataSource);
//    }
}
