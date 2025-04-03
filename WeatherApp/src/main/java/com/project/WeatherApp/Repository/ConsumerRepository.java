package com.project.WeatherApp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.WeatherApp.Model.Consumer;

public interface ConsumerRepository extends JpaRepository<Consumer, Integer> {
	//No commands are needed here, all are loaded automatically through JpaRepository
}
