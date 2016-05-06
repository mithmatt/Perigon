package io.pivotal.hawq.hms.model;

import java.util.ArrayList;
import java.util.List;

public class NewsCollection {

    private final List<News> news = new ArrayList<>();
      private final List<News> fnews = new ArrayList<>();
    static int i = 0;
    public List<News> getNews() {

        if (i<=3){
        fnews.add(news.get(i));
        i++;
        return fnews;
        }
        else{
          fnews.addAll(news);
          return fnews;
        }
    }

    public void add(News newsactivity) {
    	news.add(newsactivity);
    }

    int randomWithRange(int min, int max){
      int range = (max - min) + 1;
      return (int)(Math.random() * range) + min;
    }
}
