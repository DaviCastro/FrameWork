package br.com.pojo;

import javax.enterprise.context.RequestScoped;
import javax.inject.Named;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import main.teste.x;


@RequestScoped
@Named
public class TesteDois implements x {
	
	@PersistenceContext
	EntityManager s;

	 public String sayWorld() {
	        return "World !!!";
	    }

	public TesteDois() {
		super();
		// TODO Auto-generated constructor stub
	}
	 
	 
	 

	
	 
	
	 
	 
	 
}
