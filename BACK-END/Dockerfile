# Use the official Maven image as a base image
FROM maven:3.8.4-openjdk-17-slim AS build

# Set the working directory
WORKDIR /app

# Copy the POM file to download dependencies
COPY BACK-END/pom.xml .

# Download dependencies
RUN mvn dependency:go-offline -B

# Copy the source code to the container
COPY BACK-END/src ./src

# Build the application
RUN mvn package -DskipTests

# Use a lightweight base image with JRE to run the application
FROM openjdk:17-jdk-alpine

# Set the working directory
WORKDIR /app

# Copy the JAR file from the build stage to the production stage
COPY --from=build /app/target/*.jar app.jar

# Expose the port your application runs on
EXPOSE 8081

# Command to run the application
CMD ["java", "-jar", "app.jar"]
