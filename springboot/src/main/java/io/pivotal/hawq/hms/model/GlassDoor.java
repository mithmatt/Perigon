package io.pivotal.hawq.hms.model;

public class GlassDoor {

    private  String pros;
    private  String cons;
    private  String advice;

    public void setPros(String pros){
      this.pros=pros;
    }

    public  String getPros(){
      return this.pros;
    }

    public void setCons(String cons){
      this.cons=cons;
    }

    public  String getCons(){
      return this.cons;
    }

    public void setAdvice(String advice){
      this.advice=advice;
    }

    public  String getAdvice(){
      return this.advice;
    }



}
