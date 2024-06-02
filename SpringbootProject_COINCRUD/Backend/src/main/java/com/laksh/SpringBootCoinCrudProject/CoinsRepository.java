package com.laksh.SpringBootCoinCrudProject;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CoinsRepository extends JpaRepository<Coins, String>{

	public List<Coins> findByCoinCountry(String country);
	
}
