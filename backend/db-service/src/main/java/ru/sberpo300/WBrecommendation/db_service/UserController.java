package ru.sberpo300.WBrecommendation.db_service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    Logger logger = LoggerFactory.getLogger(UserController.class);

    @PostMapping("/add")
    public ResponseEntity<?> addUser(@RequestBody User user) {
        User newUser = userService.addUser(user);
        if (newUser == null) {
            logger.warn("Failed to add user with UID " + user.getUid() + ". User already exists.");
            return ResponseEntity.status(HttpStatus.CONFLICT).body("User with UID " + user.getUid() + " already exists.");
        }
        return ResponseEntity.ok(newUser);
    }

    @GetMapping("/get/{uid}")
    public ResponseEntity<?> getUser(@PathVariable Long uid) {
        Optional<User> user = userService.getUser(uid);
        if (user.isPresent()) {
            return ResponseEntity.ok(user.get());
        } else {
            logger.warn("User with UID " + uid + " not found.");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User with UID " + uid + " not found.");
        }
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateUser(@RequestBody User user) {
        User updatedUser = userService.updateUser(user);
        if (updatedUser == null) {
            logger.warn("Failed to update user with UID " + user.getUid() + ". User not found.");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User with UID " + user.getUid() + " not found.");
        }
        return ResponseEntity.ok("User with UID " + user.getUid() + " updated.");
    }

    @DeleteMapping("/delete/{uid}")
    public ResponseEntity<?> deleteUser(@PathVariable Long uid) {
        if (!userService.getUser(uid).isPresent()) {
            logger.warn("Failed to delete user with UID " + uid + ". User not found.");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User with UID " + uid + " not found.");
        }
        userService.deleteUser(uid);
        return ResponseEntity.ok("User with UID " + uid + " deleted.");
    }
}

