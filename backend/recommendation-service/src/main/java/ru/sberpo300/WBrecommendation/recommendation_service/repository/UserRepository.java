package ru.sberpo300.WBrecommendation.recommendation_service.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.sberpo300.WBrecommendation.recommendation_service.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}
