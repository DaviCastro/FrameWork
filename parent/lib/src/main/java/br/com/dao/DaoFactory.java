package br.com.dao;

import java.lang.annotation.Annotation;
import java.lang.reflect.ParameterizedType;

import javax.enterprise.context.Dependent;
import javax.enterprise.context.spi.CreationalContext;
import javax.enterprise.inject.Produces;
import javax.enterprise.inject.spi.Bean;
import javax.enterprise.inject.spi.BeanManager;
import javax.enterprise.inject.spi.InjectionPoint;
import javax.inject.Named;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.apache.log4j.Logger;

import br.com.annotation.ADaoQualifier;
import br.com.annotation.AHbnDao;

/**
 * 
 * AbstractFactory para obter uma f�brica especifica de uma implementa��o DAO.
 * Baseado em arquivo properties ser� retornado a implementa�ao da Factory de
 * dao utilizada no projeto.
 * 
 * Pode ser utilizada tanto para utilizar tecnologias diferentes exemplo: Se a
 * persistencia utilizada for feita pelo hibernate recupera o DAOFactory do
 * hibernate ou qualquer outra implementa�ao.
 * 
 * Os metodos para recuperar os DAOs do pojo em questao deverao ser declarados
 * como abstracts nesta classe para que as Factorys Filhas implementem.
 */
@Named
public class DaoFactory {

	protected static final Logger logger = Logger.getLogger(DaoFactory.class);
	// private static Class<? extends Annotation> annotation = AHbnDao.class;
	@PersistenceContext
	EntityManager s;

	@SuppressWarnings("unchecked")
	@Produces
	@Dependent
	@ADaoQualifier
	public <T> Dao<T> getDao(InjectionPoint ip, BeanManager bm) {
		try {

			ParameterizedType type = (ParameterizedType) ip.getType();

			Class<?> entityClazz = (Class<?>) type.getActualTypeArguments()[0];

			Class<?> hbnDaoClass = entityClazz.getAnnotation(
					br.com.annotation.AHbnDao.class).hbnDao();

			return (Dao<T>) getBeanByIntefaceClass(bm, hbnDaoClass);

		} catch (IllegalArgumentException e) {
			logger.error(e);
		} catch (SecurityException e) {
			logger.error(e);
		}
		return null;
	}

	@SuppressWarnings("unchecked")
	private Object getBeanByIntefaceClass(BeanManager bm, Class clazz) {
		Bean bean = bm.getBeans(clazz).iterator().next();
		/**
		 * Nao faco ideia do porque do codigo debaixo funcionar e o comentando
		 * nao CreationalContext ctx = bm.createCreationalContext(bean); Object
		 * o = bm.getReference(bean, bean.getBeanClass(), ctx);
		 */
		Object o = bm.getContext(bean.getScope()).get(bean,
				bm.createCreationalContext(bean));
		return o;
	}
}
