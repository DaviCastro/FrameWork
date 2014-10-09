package main.teste;

import br.com.exception.DbLibException;
import br.com.pojo.Usuario;
import br.com.service.UsuarioServiceImpl;

public class MainTeste {

	/**
	 * @param args
	 * @throws DbLibException 
	 */
	public static void main(String[] args) throws DbLibException {
		
		
		UsuarioServiceImpl a = new UsuarioServiceImpl();
		
		
		
		a.save(new Usuario());
		
	
//		ExemploDao exemplo = DaoFactory.getInstance().getExemploDao();
//		
//		for(int i = 0 ; i<=10 ; i++){
//			Exemplo entity = new Exemplo("PESSOA"+i);
//			exemplo.save(entity);
//		}
//		
//		System.out.println(exemplo.findAll());
//		
//		
//
	}

}
