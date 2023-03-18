package com.blog.blogspringboot;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="*")
public class BlogController {

    @Autowired
    ArrayList<Blogs> l;

    @GetMapping("/blogs")
    public ResponseEntity<ArrayList<Blogs>> getblogs()
    {
        return new ResponseEntity<ArrayList<Blogs>>(l,HttpStatus.OK);
    }

    @PostMapping("/add")
    public void addblogs(@RequestBody Blogs blog)
    {
        l.add(blog);
    }
    
}
