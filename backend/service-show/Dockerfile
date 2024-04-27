# Use a JDK 21 base image
FROM openjdk:21-slim

# Copy the Spring Boot JAR file into the container
COPY target/*.jar app.jar

# Expose the port your Spring Boot application runs on
EXPOSE 8080

# Define the command to run your application
CMD ["java", "-jar", "app.jar"]
