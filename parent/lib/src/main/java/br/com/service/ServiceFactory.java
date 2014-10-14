package br.com.service;

import java.lang.reflect.ParameterizedType;

import javax.enterprise.context.Dependent;
import javax.enterprise.context.spi.CreationalContext;
import javax.enterprise.inject.Produces;
import javax.enterprise.inject.spi.Bean;
import javax.enterprise.inject.spi.BeanManager;
import javax.enterprise.inject.spi.InjectionPoint;
import javax.inject.Named;

import org.apache.log4j.Logger;

import br.com.annotation.AServiceQualifier;

@Named
public class ServiceFactory {

	protected static final Logger logger = Logger
			.getLogger(ServiceFactory.class);

	@SuppressWarnings("unchecked")
	@Produces
	@Dependent
	@AServiceQualifier
	public <T> Service<T> getService(InjectionPoint ip, BeanManager bm) {

		ParameterizedType type = (ParameterizedType) ip.getType();

		Class<?> entityClazz = (Class<?>) type.getActualTypeArguments()[0];

		Class clazz = entityClazz.getAnnotation(
				br.com.annotation.AService.class).service();

		return (Service<T>) getBeanByIntefaceClass(bm, clazz);

	}

	@SuppressWarnings("unchecked")
	private Object getBeanByIntefaceClass(BeanManager bm, Class clazz) {
		
		Bean bean = bm.getBeans(clazz).iterator().next();
		Object o = bm.getContext(bean.getScope()).get(bean, bm.createCreationalContext(bean));
		return o;
	}

}
