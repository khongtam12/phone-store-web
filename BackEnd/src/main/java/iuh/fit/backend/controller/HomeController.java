package iuh.fit.backend.controller;

import iuh.fit.backend.dto.response.HomeDataDTO;
import iuh.fit.backend.service.HomeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/home")
public class HomeController {
    private final HomeService homeService;

    public HomeController(HomeService homeService) {
        this.homeService = homeService;
    }
    @GetMapping
    public ResponseEntity<HomeDataDTO> getHomeData() {
        return ResponseEntity.ok(homeService.getHomeData());
    }
}
