package jpabook.jpashop.domain;

import jakarta.persistence.Embeddable;
import lombok.Getter;

@Embeddable // JPA에서 다른 엔티티에 포함될 수 있는 임베디드 타입 정의
@Getter
public class Address {

    private String city;
    private String street;
    private String zipcode;

}
