<%-- 
    Document   : user_setting
    Created on : 07-Dec-2022, 11:54:07 am
    Author     : GAVASKAR S
--%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Experience details Page</title>
    </head>
    <body>
<%@include file="header.jsp" %>
<%@page import="java.sql.*,java.util.*"%>
<%@page import="pms.prs_experience"%>
<h1 class="h3 mb-4 text-gray-800">Experience Setting</h1>
<div class="row">
<div class="col-lg-12"> 
<%
String usercode	="";
String companyname="";
String fromdate	="";
String todate="";
String designation="";
String id=request.getParameter("id").toString();
    if(request.getParameter("option").toString().contains("edit"))
        {
            prs_experience iu_prs_experience=new prs_experience();
            ResultSet resultSet = null; 
            iu_prs_experience.id=id;
            resultSet = iu_prs_experience.retrivewithid_prs_experience();
            int sno=0;
            while(resultSet.next())
            {
                usercode=resultSet.getString("usercode");
                companyname=resultSet.getString("companyname");
                fromdate=resultSet.getString("fromdate");
                todate=resultSet.getString("todate");
                designation=resultSet.getString("designation");
            }
        }
                   
    if(request.getParameter("option").toString().contains("add") || request.getParameter("option").toString().contains("edit"))
        {           
%>
<form action="prs_experience.jsp?option=" method="post">
    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
        <tr>
            <td align="right">Usercode:</td>
            <td>
                <input  class="form-control form-control-user" type="text" name="usercode" value="<%=usercode%>" required=""/>
            </td>
        </tr>
        <tr>
            <td align="right">Company Name:</td>
            <td>
                <input  class="form-control form-control-user" type="text" name="companyname" value="<%=companyname%>" required=""/>
            </td>
        </tr>
        <tr>
            <td align="right">From date:</td>
            <td>
                <input  class="form-control form-control-user" type="text" name="fromdate" value="<%=fromdate%>" required=""/>
            </td>
        </tr>
        <tr>
            <td align="right">To date:</td>
            <td>
                <input  class="form-control form-control-user" type="text" name="todate	" value="<%=todate%>" required=""/>
            </td>
        </tr>
        <tr>
            <td align="right">designation:</td>
            <td>
                <input  class="form-control form-control-user" type="text" name="designation" value="<%=designation%>" required=""/>
            </td>
        </tr>
        <tr>
            <td colspan="2" align="center">
                <input type="hidden" name="id" value="<%=id%>"/>
                <input  type="submit" name="save" value="Save"/>
            </td>
        </tr>
    </table>
</form>
</div>
<%                               
    }
    else if(request.getParameter("option").toString().contains("delete"))
        {
            prs_experience delete_prs_experience=new prs_experience();
            delete_prs_experience.id=request.getParameter("id");
            String delete_message= delete_prs_experience.delete_prs_experience();
            out.println("<script type = 'text/javascript'>");
            out.println("window.alert('Data Deleted sucessfully')");
            out.println("window.location = 'prs_experience.jsp?option=view&id=0'");
            out.println("</script>");
        }
    else if(request.getParameter("option").toString().contains("view"))
        {
%>
<div class="card shadow mb-4">
    <div class="card-body">
        <div class="table-responsive">
        <center>
            <a href="prs_experience.jsp?option=add&id=0" >Add Experience Detail</a>
        </center>
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                    <tr>
                        <th>Sl.No</th>
                        <th>User Code</th>
                        <th>Company Name</th>
                        <th>From date</th>
                        <th>To date</th>
                        <th>designation	</th>
                        
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
<%
            prs_experience userview=new prs_experience();
            ResultSet resultSet = null;
            resultSet = userview.retriveall_prs_experience();
            int sno=0;
            while(resultSet.next())
            {
                sno=sno+1;
%>
                        <tr>
                            <td><%=sno%></td>
                            <td><%=resultSet.getString("usercode") %></td>
                            <td><%=resultSet.getString("companyname") %></td>
                            <td><%=resultSet.getString("fromdate") %></td>
                            <td><%=resultSet.getString("todate") %></td>
                             <td><%=resultSet.getString("designation") %></td>
                            <td><a href="prs_experience.jsp?option=edit&id=<%=resultSet.getString("id")%>">Edit</a>|<a href="prs_experience.jsp?option=delete&id=<%=resultSet.getString("id")%>">Delete</a></td>
                        </tr>
<%
            }
%>
                    </tbody>
            </table>
        </div>
    </div>
</div>
<%
        }
        else
            {
%>
<%
                prs_experience create_prs_experience=new prs_experience();
                create_prs_experience.usercode=request.getParameter("usercode");
                create_prs_experience.companyname=request.getParameter("companyname");
                create_prs_experience.fromdate=request.getParameter("fromdate");
                create_prs_experience.todate=request.getParameter("todate");
                create_prs_experience.designation=request.getParameter("designation");
                create_prs_experience.id=request.getParameter("id");
                String create_message="";
                    if(create_prs_experience.id.equals("0"))
                        {
                            create_message=create_prs_experience.create_prs_experience();
                        }
                    else
                        {
                            create_message=create_prs_experience.update_prs_experience();
                        }
                if(create_message.contains("1"))
                    {
                        out.println("<script type = 'text/javascript'>");
                        out.println("window.alert('Experience Details saved sucessfully')");
                        out.println("window.location = 'prs_experience.jsp?option=view&id=0'");
                        out.println("</script>");
                    }
                else
                    {
                        out.println("<script type = 'text/javascript'>");
                        out.println("window.alert('Experience Details not saved')");
                        out.println("window.location = 'prs_experience.jsp?option=view&id=0'");
                        out.println("</script>");
                    }
            }
                                %>
        </div>
<%@include file="footer.jsp" %>
    </body>
</html>