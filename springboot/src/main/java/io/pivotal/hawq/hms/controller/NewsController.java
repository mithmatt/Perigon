package io.pivotal.hawq.hms.controller;

import io.pivotal.hawq.hms.model.News;
import io.pivotal.hawq.hms.model.NewsCollection;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.Collections;

@RestController
public class NewsController {
   NewsCollection newsCollection = new NewsCollection();

    @CrossOrigin(origins = "http://localhost:9000")
    @RequestMapping(path="/news", method = RequestMethod.GET)
    public NewsCollection getNews() {


    News news1 = new News();
    news1.setTitle("Ford to invest $182M in software company Pivotal");
    news1.setId(1);
    news1.setUrl("http://www.detroitnews.com/story/business/autos/ford/2016/05/05/ford-pivotal-software-investment/83959864/");
    news1.setTime("06 May 2016 10 AM");
    news1.setDesc("Ford Motor Co. is investing $182.2 million in Palo Alto-based software company Pivotal, marking the latest collaboration between Detroit’s automakers and Silicon Valley.");


    //-------------------
    News news2 = new News();
    news2.setTitle("Software startup Pivotal Grabs a Healthy $253 Million from Ford and Microsoft AUTOS FEATURED NEWS");
    news2.setId(2);
    news2.setUrl("http://www.industryleadersmagazine.com/software-startup-pivotal-grabs-healthy-253-million-ford-microsoft/");
    news2.setTime("05 May 2016 9 AM");
    news2.setDesc("Microsoft and Ford invested $253 million in software startup Pivotal, a company spun out of EMC and VMware, to its gilded, rich coffers. According to a source familiar with the matter, the company raised the round at a post-money valuation of $2.8 billion.");


    //-------------------
    News news3 = new News();
    news3.setTitle("GM and Ford lean on Lyft and Pivotal for help in developing self-driving cars");
    news3.setId(3);
    news3.setUrl("http://www.latimes.com/business/technology/la-fi-tn-gm-ford-lyft-20160505-snap-story.html");
    news3.setTime("05 May 2016 6 PM");
    news3.setDesc("Two miles apart in Palo Alto, workers from Ford Motor Co. and General Motors Co. are hustling to establish a role for their companies in a future where consumers don't own cars and the vehicles steer themselves.");


    //-------------------
    News news4 = new News();
    news4.setTitle("Hadoop market consolidation continues with Pivotal's exit");
    news4.setId(4);
    news4.setUrl("http://searchdatamanagement.techtarget.com/news/450281286/Hadoop-market-consolidation-continues-with-Pivotals-exit");
    news4.setTime("04 May 2016 2 PM");
    news4.setDesc("Pivotal Software dropped out of the Hadoop distribution business in favor of reselling the Hortonworks version of the big data framework -- and the market consolidation moves may not be over.");


    newsCollection.add(news1);
    newsCollection.add(news2);
    newsCollection.add(news3);
    newsCollection.add(news4);


        return newsCollection;
    }




}
