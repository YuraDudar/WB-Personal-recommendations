package ru.sberpo300.WBrecommendation.recommendation_service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.sberpo300.WBrecommendation.recommendation_service.model.Recommendations;
import ru.sberpo300.WBrecommendation.recommendation_service.model.User;
import ru.sberpo300.WBrecommendation.recommendation_service.service.DataBaseService;
import ru.sberpo300.WBrecommendation.recommendation_service.service.recommendationService;

import java.io.IOException;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1")
public class apiController {

    @Autowired
    private recommendationService recommendationService;

    @Autowired
    private DataBaseService dataBaseService;

    private final Logger logger = LoggerFactory.getLogger(DataBaseService.class);

    @PostMapping("/add")
    public ResponseEntity<?> addUser(@RequestBody User user) {
        User newUser = dataBaseService.addUser(user);
        if (newUser == null) {
            logger.warn("Failed to add user with UID " + user.getUid() + ". User already exists.");
            return ResponseEntity.status(HttpStatus.CONFLICT).body("User with UID " + user.getUid() + " already exists.");
        }
        return ResponseEntity.ok(newUser);
    }

    @GetMapping("/get/{uid}")
    public ResponseEntity<?> getUser(@PathVariable Long uid) {
        Optional<User> user = dataBaseService.getUser(uid);
        if (user.isPresent()) {
            return ResponseEntity.ok(user.get());
        } else {
            logger.warn("User with UID " + uid + " not found.");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User with UID " + uid + " not found.");
        }
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateUser(@RequestBody User user) {
        User updatedUser = dataBaseService.updateUser(user);
        if (updatedUser == null) {
            logger.warn("Failed to update user with UID " + user.getUid() + ". User not found.");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User with UID " + user.getUid() + " not found.");
        }
        return ResponseEntity.ok("User with UID " + user.getUid() + " updated.");
    }

    @DeleteMapping("/delete/{uid}")
    public ResponseEntity<?> deleteUser(@PathVariable Long uid) {
        if (!dataBaseService.getUser(uid).isPresent()) {
            logger.warn("Failed to delete user with UID " + uid + ". User not found.");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User with UID " + uid + " not found.");
        }
        dataBaseService.deleteUser(uid);
        return ResponseEntity.ok("User with UID " + uid + " deleted.");
    }

    @GetMapping("/recommend/{uid}")
    public Recommendations getRecommendations(@PathVariable Long uid) throws IOException, InterruptedException {
        return recommendationService.getRecommendations(uid);
    }

}
