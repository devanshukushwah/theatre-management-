package org.theatremanagement.apigateway.filter;

import org.apache.hc.client5.http.impl.classic.RequestFailedException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.GatewayFilterChain;
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.core.Ordered;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import org.theatremanagement.apigateway.utils.JwtUtil;
import reactor.core.publisher.Mono;

@Component
public class AuthFilter implements GlobalFilter, Ordered {

    @Autowired
    private RouteValidator routeValidator;
//
//    public AuthFilter() {
//        super(Config.class);
//    }
//
//    @Override
//    public GatewayFilter apply(Config config) {
//        return ((exchange, chain) ->{
//
//            ServerHttpRequest request = exchange.getRequest();
//
//            if(routeValidator.isSecured.test(request)) {
//                // check for header
//                if(!request.getHeaders().containsKey(HttpHeaders.AUTHORIZATION)) {
//                    throw new RuntimeException("header is missing");
//                }
//                String authHeader = request.getHeaders().get(HttpHeaders.AUTHORIZATION).getFirst();
//                if(authHeader != null && authHeader.startsWith("Bearer ")) {
//                    String token = authHeader.substring(7);
//
//                    try {
//                        // it will throw exception if invalid
//                        JwtUtil.validateToken(token);
//                    } catch (Exception ex) {
//                        throw new RuntimeException("Unable to validate token");
//                    }
//
//                }
//            }
//
//            return chain.filter(exchange);
//        });
//    }

    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        ServerHttpRequest request = exchange.getRequest();

        if(routeValidator.isSecured.test(request)) {
            // check for header
            if(!request.getHeaders().containsKey(HttpHeaders.AUTHORIZATION)) {
//                return Mono.error(new Exception("header is missing"));
                exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);
                return exchange.getResponse().setComplete();
            }
            String authHeader = request.getHeaders().getFirst(HttpHeaders.AUTHORIZATION);
            if(authHeader != null && authHeader.startsWith("Bearer ")) {
                String token = authHeader.substring(7);

                try {
                    // it will throw exception if invalid
                    JwtUtil.validateToken(token);
                } catch (Exception ex) {
//                    return Mono.error(new Exception("Unable to validate token"));
                    exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);
                    return exchange.getResponse().setComplete();
                }
            }
        }

        return chain.filter(exchange);
    }

    @Override
    public int getOrder() {
        return -1;
    }

    public static class Config{

    }
}
