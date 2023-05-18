
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
@Table(name = "prs_experience")
public class Prs_experience {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String usercode;
    @Column(nullable = false)
    private String companyname;
    @Column(nullable = false)
    private String fromdate;
    @Column(nullable = false)
    private String todate;
    @Column(nullable = false)
    private String designation;
}
