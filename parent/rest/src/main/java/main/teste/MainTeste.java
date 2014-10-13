package main.teste;

import java.io.IOException;

import javax.inject.Inject;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import br.com.annotation.ADaoQualifier;
import br.com.annotation.AServiceQualifier;
import br.com.dao.Dao;
import br.com.pojo.Album;
import br.com.service.Service;
import br.com.util.TesteInject;

@WebServlet("/teste")
public class MainTeste extends HttpServlet {

	@Inject
	TesteInject d;
	
	@Inject @AServiceQualifier
	Service<Album> servi;
	
	@Inject @ADaoQualifier
	Dao<Album> dao;

	private static final long serialVersionUID = 1L;

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
	
		d.imprimi();
		
		
		super.doGet(req, resp);
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		super.doPost(req, resp);
	}

}
