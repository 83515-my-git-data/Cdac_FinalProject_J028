package com.sunbeam.services;

import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.UserDTO;
import com.sunbeam.entities.Role;
import com.sunbeam.entities.User;

import java.util.List;

public interface UserService {
    UserDTO saveUser(UserDTO userDto);
    List<UserDTO> getAllUsers();
    UserDTO getUserById(Long id);
    ApiResponse deleteUser(Long id);
    ApiResponse updateUser(Long id, UserDTO userDto);
    List<UserDTO> getUsersByRole(String role);
    public List<UserDTO> findCustomersByTourGuide(Long guideId);

}
