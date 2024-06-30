package ingressosJa.controllers;

import ingressosJa.Services.FilmeService;
import ingressosJa.models.Filme;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/filmes")
public class FilmeController {
    @Autowired
    private FilmeService filmeService;

    @GetMapping("/{cinemaId}/filmes")
    public List<Filme> getFilmesByCinemaId(@PathVariable Integer cinemaId) {
        return filmeService.findAllByCinemaId(cinemaId);
    }
}
