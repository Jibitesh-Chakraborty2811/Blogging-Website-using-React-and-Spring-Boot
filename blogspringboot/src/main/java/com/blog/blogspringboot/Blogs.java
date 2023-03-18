package com.blog.blogspringboot;
import java.util.ArrayList;

import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

@Component
public class Blogs {
    String name;
    String content;


    public Blogs() {
    }

    public Blogs(String name, String content) {
        this.name = name;
        this.content = content;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getContent() {
        return this.content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    @Bean
    public ArrayList<Blogs> l()
    {
        return new ArrayList<Blogs>();
    }
}
