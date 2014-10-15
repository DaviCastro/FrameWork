package main.teste;

import java.util.List;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.ws.rs.ApplicationPath;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
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
	public List<Album> getAll() {
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

	@Path("/{id}")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Album get(@PathParam("id") Long id) {

		try {

			return albumService.findById(id);
		} catch (DbLibException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return null;

	}

	@Path("/{id}")
	@PUT
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Album update(@PathParam("id") Long id, Album album) {
		album.setId(id);

		try {
			albumService.save(album);
			return album;
		} catch (DbLibException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;

	}

	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Album save(Album album) {
		try {
			album.setId(null);

			albumService.save(album);
			return album;
		} catch (DbLibException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;

	}

	@DELETE
	@Path("{id}")
	public void delete(@PathParam("id") Long id) {
		Album a = new Album();
		a.setId(id);
		try {
			albumService.delete(a);
		} catch (DbLibException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
