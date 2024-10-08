package com.sunbeam.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.sunbeam.dto.UserDTO;
import com.sunbeam.services.UserService;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.AuthRequest;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<?> createUser(@RequestBody UserDTO userDto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(userService.saveUser(userDto));
    }

    @GetMapping
    public ResponseEntity<?> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }

    @GetMapping("/{userId}")
    public ResponseEntity<?> getUserById(@PathVariable Long userId) {
        return ResponseEntity.ok(userService.getUserById(userId));
    }

    @PutMapping("/{userId}")
    public ResponseEntity<?> updateUser(@PathVariable Long userId, @RequestBody UserDTO userDto) {
        return ResponseEntity.ok(userService.updateUser(userId, userDto));
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<?> deleteUser(@PathVariable Long userId) {
        return ResponseEntity.ok(userService.deleteUser(userId));
    }
    
    @GetMapping("/role/{role}")
    public ResponseEntity<?> getUsersByRole(@PathVariable String role) {
        List<UserDTO> users = userService.getUsersByRole(role);
        if (users.isEmpty()) {
            return ResponseEntity.status(404).body("No users found with the role: " + role);
        }
        return ResponseEntity.ok(users);
    }
    
    @GetMapping("/guide/{guideId}/customers")
    public ResponseEntity<?> findCustomersByTourGuide(@PathVariable Long guideId) {
        List<UserDTO> customers = userService.findCustomersByTourGuide(guideId);
        if (customers.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No customers found for this guide");
        }
        return ResponseEntity.ok(customers);
    }
    
    @PostMapping("/signin") 
	public ResponseEntity<?> signInUser(
			@RequestBody AuthRequest request) {
		System.out.println("in signin " + request);
		
			return ResponseEntity.ok(
					userService.authenticateUser(request));
		
	}

}
