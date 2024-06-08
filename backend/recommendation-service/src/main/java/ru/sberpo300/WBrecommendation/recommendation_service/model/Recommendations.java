package ru.sberpo300.WBrecommendation.recommendation_service.model;

import lombok.Getter;

import java.util.ArrayList;
import java.util.List;

@Getter
public class Recommendations {

    private List<Integer> recommendations = new ArrayList<Integer>();

    public void addRecommendation(int sku){
        recommendations.add(sku);
    }

}
