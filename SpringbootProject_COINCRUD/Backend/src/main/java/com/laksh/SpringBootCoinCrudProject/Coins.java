package com.laksh.SpringBootCoinCrudProject;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="collection")
public class Coins {
	
	@Id
	@Column(name="denomination")
	String denomination;
	
	@Column(name="coinname")
	String coinName;
	
	@Column(name="coinquantity")
	int coinQuantity;
	
	@Column(name="coinvalue")
	double coinValue;
	
	@Column(name="coincountry")
	String coinCountry;
	
	public Coins() {
		// TODO Auto-generated constructor stub
	}

	public Coins(String denomination, String coinName, int coinQuantity, double coinValue, String coinCountry) {
		super();
		this.denomination = denomination;
		this.coinName = coinName;
		this.coinQuantity = coinQuantity;
		this.coinValue = coinValue;
		this.coinCountry = coinCountry;
	}

	public String getDenomination() {
		return denomination;
	}

	public void setDenomination(String denomination) {
		this.denomination = denomination;
	}

	public String getCoinName() {
		return coinName;
	}

	public void setCoinName(String coinName) {
		this.coinName = coinName;
	}

	public int getCoinQuantity() {
		return coinQuantity;
	}

	public void setCoinQuantity(int coinQuantity) {
		this.coinQuantity = coinQuantity;
	}

	public double getCoinValue() {
		return coinValue;
	}

	public void setCoinValue(double coinValue) {
		this.coinValue = coinValue;
	}

	public String getCoinCountry() {
		return coinCountry;
	}

	public void setCoinCountry(String coinCountry) {
		this.coinCountry = coinCountry;
	}

	@Override
	public String toString() {
		return "Coins [denomination=" + denomination + ", coinName=" + coinName + ", coinQuantity=" + coinQuantity
				+ ", coinValue=" + coinValue + ", coinCountry=" + coinCountry + "]";
	}
	
	
	

}
