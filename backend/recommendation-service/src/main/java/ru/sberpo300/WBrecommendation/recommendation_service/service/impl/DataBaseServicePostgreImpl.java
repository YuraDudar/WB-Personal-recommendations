package ru.sberpo300.WBrecommendation.recommendation_service.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.sberpo300.WBrecommendation.recommendation_service.model.User;
import ru.sberpo300.WBrecommendation.recommendation_service.repository.UserRepository;
import ru.sberpo300.WBrecommendation.recommendation_service.service.DataBaseService;

import java.util.Optional;

@Service
public class DataBaseServicePostgreImpl implements DataBaseService {

    @Autowired
    private UserRepository userRepository;


    @Override
    public User addUser(User user) {
        if (userRepository.existsById(user.getUid())) {
            return null;
        }
        return userRepository.save(user);
    }

    @Override
    public Optional<User> getUser(Long uid) {
        return userRepository.findById(uid);
    }

    @Override
    public void deleteUser(Long uid) {
        if (!userRepository.existsById(uid)) {
            return;
        }
        userRepository.deleteById(uid);
    }

    @Override
    public User updateUser(User user) {
        if (!userRepository.existsById(user.getUid())) {
            return null;
        }
        return userRepository.save(user);
    }
}
