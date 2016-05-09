package io.pivotal.hawq.hms.controller;

import io.pivotal.hawq.hms.model.News;
import io.pivotal.hawq.hms.model.NewsCollection;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.Collections;
import org.springframework.web.client.RestTemplate;
import org.json.*;
import java.util.*;
@RestController
public class TwitterGemFireController {
    //Twitter tweetCollection = new Twitter();

    @CrossOrigin(origins = "http://localhost:9000")
    @RequestMapping(path="/twitter", method = RequestMethod.GET, produces="application/json")
    public String getTweets() {
      RestTemplate restTemplate = new RestTemplate();

    //Twitter twitter = restTemplate.getForObject("http://192.168.103.128:8080/gemfire-api/v1/queries/adhoc?q=select%20created_at%2C%20retweet_count%2C%20text%2C%20id%2C%20user.name%2C%20user.location%20from%20%2FtwitterRegion", Twitter.class);
    //List<Twitter>
    JSONObject res = new JSONObject("{\"data\": " + restTemplate.getForObject("http://192.168.103.128:8080/gemfire-api/v1/queries/adhoc?q=select%20created_at%2C%20retweet_count%2C%20text%2C%20id%2C%20user.name%2C%20user.location%20from%20%2FtwitterRegion", String.class) + "}");

      return res.toString();

    }
}
