# Blogging-Website-using-React-and-Spring-Boot

The backend is handled by a Spring Boot Application. 
The Spring Boot Application has 3 main files:-
1. The controller
2. The Blogs.java file which also acts a repository for blogs
3. The CorsConfig.java file for configuring the CORS

NOTE - The Blogs.java is a component of the spring boot application as it has a bean which is autowired with the controller

The frontend is a react.js application

We fetch as well as submit data into the repository using axios
