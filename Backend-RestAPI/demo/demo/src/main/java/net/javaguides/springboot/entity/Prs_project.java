
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
@Table(name = "prs_project")
public class Prs_project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String usercode;
    @Column(nullable = false)
    private String pname;
    @Column(nullable = false)
    private String techused;
    @Column(nullable = false)
    private String description;
    @Column(nullable = false)
    private String responsibility;
}
