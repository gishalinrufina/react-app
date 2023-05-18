package net.javaguides.springboot.entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "prs_education")
public class Prs_education {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String usercode;
    @Column(nullable = false)
    private String ug;
    @Column(nullable = false)
    private String pg;
    @Column(nullable = false)
    private String hsc;
    @Column(nullable = false)
    private String sslc;
}
