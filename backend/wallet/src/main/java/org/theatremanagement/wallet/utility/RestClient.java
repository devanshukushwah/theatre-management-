package org.theatremanagement.wallet.utility;

import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

public class RestClient {
    public static <T> T userServiceGetCall(String endPoint, Class<T> responseType) {
        RestTemplate restTemplate = new RestTemplate();
        String userServiceURL = "".concat(endPoint);
        ResponseEntity<T> exchange = restTemplate.exchange(userServiceURL, HttpMethod.GET, null, responseType);

        if(exchange != null && exchange.getStatusCode().is2xxSuccessful()) {
            return exchange.getBody();
        }

        return null;
    }
}
