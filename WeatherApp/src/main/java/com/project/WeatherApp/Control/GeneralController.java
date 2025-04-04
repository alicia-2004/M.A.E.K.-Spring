package com.project.WeatherApp.Control;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class GeneralController {
	@GetMapping("/signUp")
	public String signUp() {
		return "signup";
	}
	
	@GetMapping("/home")
    public String homePage(@RequestParam(name = "id", required = true, defaultValue = "0") int id, Model model) {
        model.addAttribute("id", id);
        return "home";
    }
}
