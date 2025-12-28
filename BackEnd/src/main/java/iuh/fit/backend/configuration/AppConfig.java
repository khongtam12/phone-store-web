package iuh.fit.backend.configuration;



import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.List;


@Configuration
public class AppConfig{

    @Bean
    public FilterRegistrationBean<CorsFilter> corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.setAllowedOrigins(List.of("http://localhost:5173","http://localhost:3000"));          // hoặc config.addAllowedOrigin("http://localhost:5173");
        config.setAllowedMethods(List.of("GET","POST","PUT","DELETE","PATCH"));              // hoặc config.addAllowedMethod("GET");
        config.addAllowedHeader("*"); //Acept Language, Content Type

        source.registerCorsConfiguration("/admin/**", config);   // hoặc   source.registerCorsConfiguration("/user/**", config);
        source.registerCorsConfiguration("/api/**", config);

        FilterRegistrationBean bean = new FilterRegistrationBean<>(new CorsFilter(source));
        bean.setOrder(Ordered.HIGHEST_PRECEDENCE); //  hoặc  bean.setOrder(Ordered.0);

        return bean;
    }
}