package com.laksh.SpringBootCoinCrudProject;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;



//converts data from java to json//

@RestController
@CrossOrigin(origins = "*")
public class DataController {

	@Autowired
	CoinsRepository repo;
	
	
	//display list of coins//
	@GetMapping("/coins")
	public List<Coins> getAllCoins(){	
		return (List<Coins>) repo.findAll();
	}
	
	//add coin//
	@PostMapping("/coins")
	public Coins saveCoin(@RequestBody Coins coin) {
		return repo.save(coin);
	}
	
	//delete coin//
	@DeleteMapping("/coins/{deno}")
	public String deleteCoins(@PathVariable String deno) {
		repo.deleteById(deno);
		return "ok";
	}
	
	/*
	// Update coin
    @PutMapping("/coins/updateCoin/{denomination}")
    public ResponseEntity<?> updateCoin(@PathVariable String denomination, @RequestBody Coins updatedCoin) {
        Optional<Coins> coinData = repo.findById(denomination);

        if (coinData.isPresent()) {
            Coins _coin = coinData.get();
            if (updatedCoin.getCoinName() != null) {
                _coin.setCoinName(updatedCoin.getCoinName());
            }
            if (updatedCoin.getCoinQuantity() != 0) {
                _coin.setCoinQuantity(updatedCoin.getCoinQuantity());
            }
            if (updatedCoin.getCoinValue() != 0.0) {
                _coin.setCoinValue(updatedCoin.getCoinValue());
            }
            if (updatedCoin.getCoinCountry() != null) {
                _coin.setCoinCountry(updatedCoin.getCoinCountry());
            }

            return new ResponseEntity<>(repo.save(_coin), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    */

    // Update coin
    @PutMapping("/coins/updateCoin/{denomination}")
    public ResponseEntity<?> updateCoin(@PathVariable String denomination, @RequestBody Coins updatedCoin) {
        Optional<Coins> coinData = repo.findById(denomination);

        if (coinData.isPresent()) {
            Coins _coin = coinData.get();
            if (updatedCoin.getCoinName() != null) {
                _coin.setCoinName(updatedCoin.getCoinName());
            }
            if (updatedCoin.getCoinQuantity() != 0) {
                _coin.setCoinQuantity(updatedCoin.getCoinQuantity());
            }
            if (updatedCoin.getCoinValue() != 0.0) {
                _coin.setCoinValue(updatedCoin.getCoinValue());
            }
            if (updatedCoin.getCoinCountry() != null) {
                _coin.setCoinCountry(updatedCoin.getCoinCountry());
            }

            return new ResponseEntity<>(repo.save(_coin), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


}
