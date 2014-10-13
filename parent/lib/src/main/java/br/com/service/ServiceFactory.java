package br.com.service;

import java.lang.reflect.ParameterizedType;

import javax.enterprise.context.Dependent;
import javax.enterprise.inject.Produces;
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
	public static <T> Service<T> getService(InjectionPoint ip) {
		try {
			ParameterizedType type = (ParameterizedType) ip.getType();

			Class<?> entityClazz = (Class<?>) type.getActualTypeArguments()[0];

			return (Service<T>) entityClazz
					.getAnnotation(br.com.annotation.AService.class).service()
					.newInstance();

		} catch (InstantiationException e) {
			logger.error(e);
		} catch (IllegalAccessException e) {
			logger.error(e);
		}
		return null;

	}
}
