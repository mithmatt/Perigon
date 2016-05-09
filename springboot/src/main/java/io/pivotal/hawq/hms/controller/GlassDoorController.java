package io.pivotal.hawq.hms.controller;

import io.pivotal.hawq.hms.model.GlassDoor;
import io.pivotal.hawq.hms.model.GlassDoorCollection;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.Collections;

@RestController
public class GlassDoorController {


    @CrossOrigin(origins = "http://localhost:9000")
    @RequestMapping(path="/glassdoor", method = RequestMethod.GET)
    public GlassDoorCollection getGlassDoor() {

    GlassDoorCollection glassDoorCollection = new GlassDoorCollection();
    GlassDoor gd1 = new GlassDoor();
    gd1.setPros("Laid back culture, supportive team, great mission, good pay, free breakfast, Macs for everyone!");
    gd1.setCons("Dealing with EMC, still needs to better align the three parts of the business - PCF, Labs, Data");
    gd1.setAdvice("Invest more in product management and engineering, and marketing.");

    glassDoorCollection.add(gd1);

    GlassDoor gd2 = new GlassDoor();
    gd2.setPros("Breakfast, snacks, 40 work week, casual environment, and really strong development/engineering company.");
    gd2.setCons("Sacrifices own mission statement for dollars, nepotistic management, very little representation for minorities and/or women in leadership roles.");
    gd2.setAdvice("Eat your own dogfood and stop trying to pretend you care about your people when it's the same old billable hours trick turning as usual.");

    GlassDoor gd3 = new GlassDoor();
    gd3.setPros("Nice Interview Process. Went well");
    gd3.setCons("Questions asked are good but can be more challenging.");
    gd3.setAdvice("Nice place. Keep it up!");

    glassDoorCollection.add(gd3);

    GlassDoor gd4 = new GlassDoor();
    gd4.setPros("Competitive Pay and Hours. Excellent people to work with. Always a new challenge around the corner!");
    gd4.setCons("This is a quickly growing company (not a con) but that leads to a lot of consistent change in roles and responsibilities.");
    gd4.setAdvice("Keep it UP!");

    glassDoorCollection.add(gd4);

    GlassDoor gd5 = new GlassDoor();
    gd5.setPros("Supportive and engaged management: Listens and considers your career goals and experience desired");
    gd5.setCons("Small size of company means larger work load on all employees");
    gd5.setAdvice("None.");

    glassDoorCollection.add(gd5);
    return glassDoorCollection;
    }




}
