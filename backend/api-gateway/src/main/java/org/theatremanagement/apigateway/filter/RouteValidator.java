package org.theatremanagement.apigateway.filter;

import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.function.Predicate;

@Component
public class RouteValidator {
    private static final List<String> openApiEndpoints = List.of(
            "service-user/rest/v1/auth/generate-token",
            "service-user/rest/v1/auth/create-user",
            "service-user/rest/v1/auth/validate-token"
    );

    public Predicate<ServerHttpRequest> isSecured = request ->
            openApiEndpoints
                    .stream()
                    .noneMatch(uri -> request.getURI().getPath().contains(uri));
}
