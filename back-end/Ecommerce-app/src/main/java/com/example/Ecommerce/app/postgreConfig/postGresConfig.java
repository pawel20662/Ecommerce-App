package com.example.Ecommerce.app.postgreConfig;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

import javax.sql.DataSource;

@Configuration

public class postGresConfig {
    @Value("${spring.datasource.driver-class-name}")

    private String driverClassName;


    @Value("${spring.datasource.url}")

    private String url;


    @Value("${spring.datasource.password}")

    private String password;


    @Value("${spring.datasource.username}")

    private String username;


    @Bean

    @Primary

    public DataSource primaryDataSource() {
        return DataSourceBuilder.create()
                .driverClassName(driverClassName)

                .url(url)

                .username(username)

                .password(password)

                .build();

    }
}
