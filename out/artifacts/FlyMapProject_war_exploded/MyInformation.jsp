<%@ page import="dataAndTime.TimeApplication" %><%--
  Created by IntelliJ IDEA.
  User: Mateusz Gruba
  Date: 2018-03-17
  Time: 22:58
  To change this template use File | Settings | File Templates.
--%>
<link href="bootstrapFramework4.0/css/bootstrap.css" rel="stylesheet" type="text/css" />
<link href="bootstrapFramework4.0/css/bootstrap-grid.css" rel="stylesheet" type="text/css" />
<link href="bootstrapFramework4.0/css/bootstrap-reboot.css" rel="stylesheet" type="text/css" />

<script src="bootstrapFramework4.0/js/bootstrap.bundle.js" type="text/javascript"></script>
<script src="bootstrapFramework4.0/js/bootstrap.js" type="text/javascript"></script>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Mateusz Gruba</title>
</head>
<body>
    <div id="headerId">
        <nav class="navbar navbar-header" role="navigation" style="color: dodgerblue">
            <div class="navbar-header container-fluid r">
                <div>
                    <a class="navbar-brand" href="index.jsp">
                        <img src="webImages/arrow-left.png" style="width: 30px;height: 30px;">Back to main page</img>
                    </a>
                </div>
                <div >
                    <a href="">
                        <%
                            TimeApplication webTime = new TimeApplication();
                            out.print(webTime.getConveredTime());
                        %>
                    </a>
                </div>
                <div >
                    <a href="https://www.wiea.uz.zgora.pl/">University of Zielona Gora </a>
                </div>
              </div>
        </nav>
        <div style="background-image: -moz-radial-gradient(dodgerblue,white);height: 3px"></div>

    </div>
    <div class="border" id="background" style="background-image: -moz-radial-gradient(#ccff33,#d1ecf1,#4d79ff);width: 100%; height: 90% " >
        <div class="container " id="img">

                <div class="row">

                        <div class="col-3 border-bottom">
                            <img src="webImages/jaFota.png" alt="myFace" class="img-thumbnail">
                        </div>
                        <div class="col-3 border-left" >
                            <div class="row">
                                <h4>
                                    Here is some information about me.
                                </h4>
                            </div>
                            <div class="row" style="background-image: -moz-radial-gradient(dodgerblue,white);height: 3px">

                            </div>
                            <div class="row" id="myInformation">
                                So my name is Mateusz Gruba and now i am student University of Zielona Gora
                            </div>

                        </div>
                </div>

        </div>
    </div>





</body>
</html>
