package main.teste;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.inject.Named;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import br.com.dao.HbnDao;
import br.com.exception.DbLibException;
import br.com.pojo.Usuario;
import br.com.service.ServiceFactory;
import br.com.service.UsuarioService;
@RequestScoped
@Named
public class MainTeste2 implements Main {

	HbnDao<Usuario> aDao;

	@Inject
	x a;

	@PersistenceContext
	EntityManager s;

	/**
	 * 
	 */

	public void teste() {
		a.sayWorld();

		Usuario a = new Usuario();

		// a.x();

		UsuarioService d = (UsuarioService) ServiceFactory
				.getService(Usuario.class);

		try {
			d.findAll();
		} catch (DbLibException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	public MainTeste2() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
}
