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
@Table(name = "prs_coresprofobj")
public class Prs_coresprofobj {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String usercode;
    @Column(nullable = false)
    private String correspondence;
    @Column(nullable = false)
    private String profile;
    @Column(nullable = false)
    private String objective;
}
