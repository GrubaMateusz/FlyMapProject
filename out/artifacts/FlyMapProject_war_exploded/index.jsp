<%@ page import="dataAndTime.TimeApplication" %>

<%--
  Created by IntelliJ IDEA.
  User: Mateusz Gruba
  Date: 2018-03-07
  Time: 14:21
  To change this template use File | Settings | File Templates.
--%>

<link href="bootstrapFramework4.0/css/bootstrap.css" rel="stylesheet" type="text/css" />
<link href="bootstrapFratylesheet" type="text/css" />
<link href="bootstrapFramework4.0/css/bootstrap-reboot.css" rel="mework4.0/css/bootstrap-grid.css" type="text/css" />

<script src="jsScripts/TimeAndDataApplication.js" type="text/javascript"></script>
<script src="jsScripts/webStyle/DeafulWebStyle.js" type="text/javascript"></script>
<script src="jsScripts/GoogleMapsElements.js" type="text/javascript"></script>
<script src="jsScripts/initMap.js"type="text/javascript"></script>
<script src="bootstrapFramework4.0/js/bootstrap.bundle.js" type="text/javascript"></script>
<script src="bootstrapFramework4.0/js/bootstrap.js" type="text/javascript"></script>
<script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDL0klmVpHvjQAj5y1k1MS1P_EE1QYoGtk&libraries=geometry&sensor=true&callback=initMap" type="text/javascript">
</script>

<%@ page contentType="text/html;charset=UTF-8" language="java" %>


  <head>
    <title>FlayPlanningSystem</title>
  </head>
  <body>
  <div id="headerId">
    <nav class="navbar navbar-header" role="navigation" style="color: dodgerblue">
      <div class="navbar-header container-fluid r">


        <div>

          <a class="navbar-brand" href="MyInformation.jsp">
            Create by Mateusz Gruba

          </a>

        </div>

        <div class= "row" style="text-align: center"  >
          <a href="">
            <%--<%
            TimeApplication webTime = new TimeApplication();
            out.print(webTime.getConveredTime());
            %>--%>
            <div id="timeAplication"></div>
            <div id="dataAplication"></div>


          </a>
        </div>
        <script>
            const timeApp = new TimeAndDataApp();
        </script>
        <div >
          <a href="https://www.wiea.uz.zgora.pl/">University of Zielona Gora </a>

        </div>

      </div>

    </nav>
    <div style="background-image: -moz-radial-gradient(dodgerblue,white);height: 3px"></div>

  </div>


  <div id="map" style="height: 90%; ">
  </div>

  <script >
      const maps = new initMap();

  </script>





  </body>

