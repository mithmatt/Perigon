package io.pivotal.hawq.hms.model;

import java.util.ArrayList;
import java.util.List;

public class GlassDoorCollection {

    private final List<GlassDoor> gd = new ArrayList<>();
    public List<GlassDoor> getGlassDoor() {
      return gd;
    }

    public void add(GlassDoor gdd) {
    	gd.add(gdd);
    }
}
