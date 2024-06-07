package ru.sberpo300.WBrecommendation.recommendation_service.service;

import ru.sberpo300.WBrecommendation.recommendation_service.model.User;

import java.util.Optional;

public interface DataBaseService {

    public User addUser(User user);
    public Optional<User> getUser(Long uid);
    public void deleteUser(Long uid);
    public User updateUser(User user);

}
