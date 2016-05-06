# hms-server

This module is a prototype for the HAWQ Monitoring Server.

The server is based on Spring Boot technology and exposes a REST endpoint on port 8080 to get a list of queries.

## Building the Project

To build the project, use:

    ./gradlew build

This will compile the sources and generate a self executable JAR file in `build/libs` directory

## Running the Sever

The fastest way to run the server is:

    ./gradlew bootRun

You can also run the JAR file directly:

    java -jar build/libs/hms-server-0.1.0.jar
    
## Testing the Server

The HMS supports `GET /queries` REST endpoint and returns mock data:

    $ curl localhost:8080/queries
    {"queries":[{"command":"SELECT * from foo WHERE bar = 'high'"},{"command":"SELECT * from sales WHERE year = 2015 and product = 'widget'"}]}