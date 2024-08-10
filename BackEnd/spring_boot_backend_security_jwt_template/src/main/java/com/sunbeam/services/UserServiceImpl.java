package com.sunbeam.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.modelmapper.ModelMapper;
import com.sunbeam.custom_exceptions.ResourceNotFoundException;
import com.sunbeam.daos.UserDao;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.UserDTO;
import com.sunbeam.entities.Role;
import com.sunbeam.entities.User;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class UserServiceImpl implements UserService {
    @Autowired
    private UserDao userDao;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public UserDTO saveUser(UserDTO userDto) {
        User user = modelMapper.map(userDto, User.class);
        user = userDao.save(user);
        return modelMapper.map(user, UserDTO.class);
    }

    @Override
    public List<UserDTO> getAllUsers() {
        List<User> users = userDao.findAll();
        return users.stream()
                .map(user -> modelMapper.map(user, UserDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public UserDTO getUserById(Long id) {
        User user = userDao.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));
        return modelMapper.map(user, UserDTO.class);
    }

    @Override
    public ApiResponse deleteUser(Long id) {
        if (userDao.existsById(id)) {
            userDao.deleteById(id);
            return new ApiResponse("User deleted successfully");
        }
        return new ApiResponse("User deletion failed: invalid id");
    }

    @Override
    public ApiResponse updateUser(Long id, UserDTO userDto) {
        if (userDao.existsById(id)) {
            User user = userDao.findById(id).get();
            modelMapper.map(userDto, user);
            userDao.save(user);
            return new ApiResponse("Updated user details");
        }
        return new ApiResponse("User update failed: invalid id");
    }

    @Override
    public List<UserDTO> getUsersByRole(String role) {
        try {
            // Convert the incoming string role to an enum
            Role roleEnum = Role.valueOf(role.toUpperCase()); // Ensure the string matches the enum case
            List<User> users = userDao.findByRole(roleEnum); // Pass the enum directly to the repository method
            return users.stream()
                        .map(user -> modelMapper.map(user, UserDTO.class))
                        .collect(Collectors.toList());
        } catch (IllegalArgumentException e) {
            throw new ResourceNotFoundException("Invalid role: " + role);
        } catch (Exception e) {
            e.printStackTrace(); // Log the stack trace for debugging
            throw new RuntimeException("An error occurred while fetching users by role");
        }
    }

	


}
