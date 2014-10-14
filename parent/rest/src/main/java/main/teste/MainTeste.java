package main.teste;

import java.io.IOException;

import javax.inject.Inject;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import br.com.annotation.AServiceQualifier;
import br.com.exception.DbLibException;
import br.com.interfaceDao.AlbumDao;
import br.com.pojo.Album;
import br.com.service.AlbumService;
import br.com.service.Service;
import br.com.util.TesteInject;

@WebServlet("/teste")
public class MainTeste extends HttpServlet {

	@Inject
	TesteInject d;

	@Inject
	@AServiceQualifier
	Service<Album> servi;

	@Inject
	AlbumDao dao;

	@Inject
	AlbumService serv;

	private static final long serialVersionUID = 1L;

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {

		((AlbumService) servi).teste();

		try {
			servi.findAll();
		} catch (DbLibException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

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
