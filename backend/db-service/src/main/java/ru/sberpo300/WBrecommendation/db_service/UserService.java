package ru.sberpo300.WBrecommendation.db_service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User addUser(User user) {
        if (userRepository.existsById(user.getUid())) {
            return null;
        }
        return userRepository.save(user);
    }

    public Optional<User> getUser(Long uid) {
        return userRepository.findById(uid);
    }

    public void deleteUser(Long uid) {
        if (!userRepository.existsById(uid)) {
            return;
        }
        userRepository.deleteById(uid);
    }

    public User updateUser(User user) {
        if (!userRepository.existsById(user.getUid())) {
            return null;
        }
        return userRepository.save(user);
    }
}

