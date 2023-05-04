/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package pms;
import java.sql.ResultSet;

/**
 *
 * @author GAVASKAR S
 */
public class prs_project extends dbclass {
public String id;
public String usercode;
public String pname	;
public String techused; 
public String description;
public String responsibility; 
public String create_prs_project()
 {
    String query="INSERT INTO `prs_project`( `usercode`, `pname`, `techused`, `description`, `responsibility`) VALUES ('"+ usercode +"','"+ pname +"','"+ techused +"','"+ description +"','"+ responsibility +"')";
    String message=super.tableinsertupdatedelete(query);
    return message;
 }
 public String update_prs_project()
 {
    String query="UPDATE `prs_project` SET `usercode`='"+ usercode +"',`pname`='"+ pname+"',`techused`='"+ techused +"',`description`='"+ description +"',`responsibility`='"+ responsibility +"' WHERE id='"+ id+"'";
    String message=super.tableinsertupdatedelete(query);
    return message;
 }
 public ResultSet retriveall_prs_project()
{
    return super.getfromtable("select * from prs_project");
}
 public ResultSet retrivewithid_prs_project()
{
    return super.getfromtable("select * from prs_project  WHERE id='"+ id +"'");
}
 public String delete_prs_project()
 {
    String query="delete from prs_project WHERE id='"+ id +"'";
    String message=super.tableinsertupdatedelete(query);
    return message;
 }
}
