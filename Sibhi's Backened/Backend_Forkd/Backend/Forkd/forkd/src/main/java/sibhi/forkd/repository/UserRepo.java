package sibhi.forkd.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import sibhi.forkd.model.User;

public interface UserRepo  extends JpaRepository<User,Long>
{
    User findByEmail(String username);
}
