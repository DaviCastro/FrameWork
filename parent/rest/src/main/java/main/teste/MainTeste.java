package main.teste;

import java.util.List;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.ws.rs.ApplicationPath;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Application;
import javax.ws.rs.core.MediaType;

import br.com.exception.DbLibException;
import br.com.pojo.Album;
import br.com.service.AlbumService;

@Path("teste")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
@Stateless
@ApplicationPath("/rest")
public class MainTeste extends Application {

	@Inject
	AlbumService albumService;

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Album> recuperaAlbum() {
		try {
			
			albumService.findAll();
			Album album = new Album();
			album.setNome("Teste");
			album.setDescricao("jose");

			albumService.save(album);

			return albumService.findAll();

		} catch (DbLibException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;

	}

}
