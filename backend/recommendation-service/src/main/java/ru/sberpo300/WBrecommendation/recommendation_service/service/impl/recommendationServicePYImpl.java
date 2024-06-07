package ru.sberpo300.WBrecommendation.recommendation_service.service.impl;

import org.springframework.stereotype.Service;
import ru.sberpo300.WBrecommendation.recommendation_service.model.Recommendations;
import ru.sberpo300.WBrecommendation.recommendation_service.service.recommendationService;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;

@Service
public class recommendationServicePYImpl implements recommendationService{

    @Override
    public Recommendations getRecommendations(long uid) throws IOException, InterruptedException {

        ProcessBuilder Process_Builder = new ProcessBuilder("python", "src/main/resources/model/main.py", Long.toString(uid), "10");

        Process process = Process_Builder.directory(new File("src/main/resources/model/")).start();
        process.waitFor();

        BufferedReader reader = new BufferedReader(
                new InputStreamReader(
                        process.getInputStream()
                )
        );

        String outputLine = reader.readLine();
        Recommendations returnRecs = new Recommendations();

        if(outputLine.equals("uncorrected id")){
            return returnRecs;
        }

        for(String str : outputLine.substring(1, outputLine.length()-1).split(", ")){
            returnRecs.addRecommendation(Integer.parseInt(str));
        }

        return returnRecs;

    }
}
