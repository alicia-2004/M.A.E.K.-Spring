package com.project.WeatherApp.Control;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	
	@GetMapping("/api/getConsumerById/{id}")
	public Consumer getConsumerById(@PathVariable String id) {
		int consumerId = Integer.parseInt(id);
		Optional<Consumer> consumerFound=consumerRepository.findById(consumerId);
		if(consumerFound.isEmpty()) {
			return null;
		}else {
			return consumerFound.get();
		}
	}

	@PostMapping("/api/addConsumer")
	public Consumer create(@RequestBody Map<String, String> body) {
		String name = body.get("name");
		String pass = body.get("password");
		String loc = body.get("location");
		return consumerRepository.save(new Consumer(name, pass, loc));
	}
}
