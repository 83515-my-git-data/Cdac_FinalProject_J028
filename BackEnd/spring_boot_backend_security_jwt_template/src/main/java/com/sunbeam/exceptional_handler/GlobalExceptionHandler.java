package com.sunbeam.exceptional_handler;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.sunbeam.custom_exceptions.ResourceNotFoundException;
import com.sunbeam.dto.ApiResponse;

@RestControllerAdvice 
public class GlobalExceptionHandler {
	

	// method level anno to tell SC , following is an exc handling method : to
	// handle : ResourceNotFoundException
	@ExceptionHandler(ResourceNotFoundException.class)
	@ResponseStatus(value = HttpStatus.NOT_FOUND)
	public ApiResponse handleResourceNotFoundException(ResourceNotFoundException e) {
		//System.out.println("in res not found " + e);
		return new ApiResponse(e.getMessage());
	}

	// method level anno to tell SC , following is an exc handling method : to
	// handle any other remaining exc => catch all
	@ExceptionHandler(RuntimeException.class)
	@ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
	public ApiResponse handleAnyException(RuntimeException e) {
		//System.out.println("in catch-all " + e);
		return new ApiResponse(e.getMessage());
	}
}
