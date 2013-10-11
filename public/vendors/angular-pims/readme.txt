// Bundle Config
bundles.Add(new StyleBundle("~/css/application")
    .Include("~/scripts/angular-ui/build/angular-ui.css")
    .Include("~/scripts/toastr/toastr.css")
    .Include("~/Content/application.css")
);

bundles.Add(new ScriptBundle("~/js/application")
    .Include("~/scripts/vendors/jquery/jquery.js")
    .Include("~/scripts/vendors/jquery.cookie/jquery.cookie.js")
    .Include("~/scripts/vendors/bootstrap/dist/js/bootstrap.js")
    .Include("~/scripts/vendors/toastr/toastr.js")
    .Include("~/scripts/vendors/angular/angular.js")
    .Include("~/scripts/vendors/angular-bootstrap/ui-bootstrap-tpls.js")
    .Include("~/scripts/vendors/angular-route/angular-route.js")
    .Include("~/scripts/vendors/angular-cookies/angular-cookies.js")
    .Include("~/scripts/vendors/angular-ui/build/angular-ui.js")
    .Include("~/scripts/vendors/angular-promise-tracker/promise-tracker.js")
    .Include("~/scripts/vendors/angular.flashr/src/angular-flashr.js")
    .Include("~/app/app.js")
    .Include("~/app/modules/modules.js")
    .IncludeDirectory("~/app/modules/", "_init.js", true)
    .IncludeDirectory("~/app", "*.js", true)
);


// Html Boilerplate
<!DOCTYPE html>
<html ng-app="app">
<head>
  <meta name="viewport" content="width=device-width" />
  @Styles.Render("~/css/application")
</head>
<body>
 <body ng-controller="AppCtrl">
   <nav class="main-navbar" role="navigation">
     <div class="navbar-header">
       <a class="navbar-brand" href="#">PIMS</a>
     </div>
     <ul class="nav navbar-nav">
       <li><a href="#">Dashboard</a></li>
       <li class="active"><a href="#">Orders</a></li>
       <li><a href="#">Wips</a></li>
     </ul>
     <ul class="nav navbar-nav pull-right">
       <li ><a href="#">Settings</a></li>
       <li><a href="#">Tyler Garlick</a></li>
     </ul>
   </nav>
   <nav class="sub-navbar pull-left" role="navigation">
     <ul class="nav navbar-nav pull-right">
       <li><a href="#">Geocoding</a></li>
       <li class="active"><a href="#">Security</a></li>
     </ul>
   </nav>
   <nav class="sub-navbar pull-left" role="navigation">
     <ul class="nav navbar-nav pull-right">
       <li><a href="#">Geocoding</a></li>
       <li class="active"><a href="#">Security</a></li>
     </ul>
   </nav>
   <div class="container-full">
     <div class="row">
       <div class="col-lg-12">
         <div ng-view></div>
       </div>
     </div>
   </div>
   <footer class="navbar navbar-default navbar-fixed-bottom navbar-footer">
     <div class="container">
       <div class="row">
         <div class="col-lg-12"></div>
       </div>
     </div>
   </footer>
  @Scripts.Render("~/js/application")
</body>
</html>