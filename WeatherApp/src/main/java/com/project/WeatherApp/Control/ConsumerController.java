package com.project.WeatherApp.Control;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.project.WeatherApp.Model.Consumer;
import com.project.WeatherApp.Repository.ConsumerRepository;

@RestController
public class ConsumerController {
	@Autowired
	ConsumerRepository consumerRepository;
	
	@GetMapping("/api/getAllConsumers")
	public List<Consumer> getAllConsumers() {
		return consumerRepository.findAll();
	}
}
