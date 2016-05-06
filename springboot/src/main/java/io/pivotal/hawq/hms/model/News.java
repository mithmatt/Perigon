package io.pivotal.hawq.hms.model;

public class News {

    private  int id;
    private  String title;
    private  String url;
    private  String time;
    private  String desc;

    public void setId(int id){
      this.id=id;
    }

    public  int getId(){
      return this.id;
    }

    public void setTitle(String title){
      this.title=title;
    }

    public  String getTitle(){
      return this.title;
    }

    public void setUrl(String url){
      this.url=url;
    }

    public  String getUrl(){
      return this.url;
    }

    public void setTime(String time){
      this.time=time;
    }

    public  String getTime(){
      return this.time;
    }

    public void setDesc(String desc){
      this.desc=desc;
    }

    public  String getDesc(){
      return this.desc;
    }

}
