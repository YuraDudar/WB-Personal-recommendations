package ru.sberpo300.WBrecommendation.recommendation_service.service;

import ru.sberpo300.WBrecommendation.recommendation_service.model.Recommendations;

import java.io.IOException;

public interface recommendationService {

    public Recommendations getRecommendations(long sku) throws IOException, InterruptedException ;

}
