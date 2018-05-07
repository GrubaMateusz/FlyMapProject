<%@ page import="dataAndTime.TimeApplication" %>
<%@ page import="java.time.LocalDateTime" %>
<%@ page import ="java.io.*,java.util.*" %>
<%@ page import ="javax.servlet.*,java.text.*" %>
<%@ page import="java.sql.Time" %>

<%--
  Created by IntelliJ IDEA.
  User: Mateusz Gruba
  Date: 2018-03-07
  Time: 14:21
  To change this template use File | Settings | File Templates.
--%>

<link href="bootstrapFramework4.0/css/bootstrap.css" rel="stylesheet" type="text/css" />
<link href="bootstrapFratylesheet" type="text/css" />
<link href="bootstrapFramework4.0/css/bootstrap-reboot.css" rel=mework4.0/css/bootstrap-grid.css" rel="s"stylesheet" type="text/css" />

<script src="bootstrapFramework4.0/js/bootstrap.bundle.js" type="text/javascript"></script>
<script src="bootstrapFramework4.0/js/bootstrap.js" type="text/javascript"></script>
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
            Create by Mateusz Gruba</img>

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
  </div>

  <div id="map" style="height: 90%; ">


  </div>
  <script >
      var chicago = {lat: 41.85, lng: -87.65};

      function CenterControl(controlDiv, map) {

          // Set CSS for the control border.
          var controlUI = document.createElement('div');
          controlUI.style.backgroundColor = '#fff';
          controlUI.style.border = '2px solid #f2f';
          controlUI.style.borderRadius = '3px';
          controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
          controlUI.style.cursor = 'pointer';
          controlUI.style.marginBottom = '22px';
          controlUI.style.textAlign = 'center';
          controlUI.title = 'Click to recenter the map';
          controlDiv.appendChild(controlUI);

          // Set CSS for the control interior.
          var controlText = document.createElement('div');
          controlText.style.color = 'rgb(25,50,25)';
          controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
          controlText.style.fontSize = '16px';
          controlText.style.lineHeight = '38px';
          controlText.style.paddingLeft = '5px';
          controlText.style.paddingRight = '5px';
          controlText.innerHTML = 'Center Map';
          controlUI.appendChild(controlText);

          // Setup the click event listeners: simply set the map to Chicago.
          controlUI.addEventListener('click', function() {
              map.setCenter(chicago);
          });

      }

      function initMap() {

  var positionOfZielonaGora = {lat: 51.939, lng: 15.506};
  var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 12,
  center: positionOfZielonaGora
  });
          var centerControlDiv = document.createElement('div');
          var centerControl = new CenterControl(centerControlDiv, map);

          centerControlDiv.index = 1;
          map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(centerControlDiv);

          var marker = new google.maps.Marker({
  position: positionOfZielonaGora,
  map: map
  });
  }
</script>
<script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDL0klmVpHvjQAj5y1k1MS1P_EE1QYoGtk&callback=initMap">
</script>





  </body>
</html>
