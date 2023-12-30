package com.PrimeSnipers.PrimeSnipers.PrimeSnipers.PrimeSnipers;

import jakarta.persistence.*;
import lombok.*;


@Data
@Setter
@Getter
@Entity
@Builder
@Table(name = "snipers")
@AllArgsConstructor// automating the process of creating a constructor that sets all the fields...


public class Snipers {

    @Id
    @SequenceGenerator(
            name = "Snipers_sequence",
            sequenceName = "Snipers_sequence",
            allocationSize = 1
    )


    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "snipers_sequence"
    )
    private Long id;
    private String msisdn;
    private Integer customer_id_owner;
    private Integer customer_id_user;
    private String firstname;
    private String lastname;
    private String email;
    @Getter
    private String password;


    public Snipers(String admin) {
    }




    public boolean isAccountNonExpired() {
        return true;
    }

    public boolean isAccountNonLocked() {
        return true;
    }

    public boolean isCredentialsNonExpired() {
        return true;
    }

    public boolean isEnabled() {
        return true;
    }



    @Column(name = "unix_epoch_millis")
    private Long unixEpochMillis;

    @Enumerated(EnumType.STRING) // Specify how the enum values should be stored (as strings)
    @Column(name = "service_type")
    private ServiceType serviceType; // Use the enum type here


    public Snipers() {
        this.unixEpochMillis = System.currentTimeMillis();
    }



    public Snipers(Long id, java.lang.String msisdn,String firstname,String lastname,String email,String password, Integer customer_id_owner, Integer customer_id_user,
                       ServiceType serviceType, Long unixEpochMillis) {
        this.id = id;
        this.msisdn = msisdn;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.customer_id_owner = customer_id_owner;
        this.customer_id_user = customer_id_user;
        this.serviceType = serviceType;
        this.unixEpochMillis = unixEpochMillis;
    }



    public Snipers(java.lang.String msisdn,String firstname,String lastname,String email,String password, Integer customer_id_owner, Integer customer_id_user,
                       ServiceType serviceType, Long unixEpochMillis) {
        this.msisdn = msisdn;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.customer_id_owner = customer_id_owner;
        this.customer_id_user = customer_id_user;
        this.serviceType = serviceType;
        this.unixEpochMillis = unixEpochMillis;
    }


    public void setServiceType(ServiceType service_type) {
        // Assuming 'service_type' is an instance variable in the Snipers class.
        this.serviceType = service_type; // Set the instance variable with the provided value.
    }


    @Override
    public String toString() {
        return "Snipers{" +
                "id=" + id +
                ", msisdn='" + msisdn + '\'' +
                ", customer_id_owner=" + customer_id_owner +
                ", customer_id_user=" + customer_id_user +
                ", firstname='" + firstname + '\'' +
                ", lastname='" + lastname + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", unixEpochMillis=" + unixEpochMillis +
                ", serviceType=" + serviceType +
                '}';
    }

}


