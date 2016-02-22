<!doctype html>
<!--[if lt IE 7]>
<html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
<!--[if IE 7]>
<html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
<!--[if IE 8]>
<html class="no-js lt-ie9" lang=""> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js" lang="" ng-app="dotfivesApp"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="fragment" content="!">
        <title>DotFiveSystems</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="apple-touch-icon" href="apple-touch-icon.png">

        {!! Html::style(elixir('css/vendor.css')) !!}
        {!! Html::style(elixir('css/app.css')) !!}

        {!! Html::script('https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js') !!}

        {!! Html::script(elixir('js/vendor.js')) !!}
        {!! Html::script(elixir('js/app.js')) !!}
    </head>
    <body>
        <div id="wrap">
            <div ui-view="landing"></div>
            <div ui-view="navbar"></div>
            <div ui-view="projects"></div>
            <div ui-view="about"></div>
            <div ui-view="contact"></div>
        </div>
        <div growl limit-messages="1"></div>
        <div id="footer">
            <div class="container text-center">
                &copy; 2016 Mark Cinco. All Rights Reserved.
            </div>
        </div>

        <script>
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

            ga('create', 'UA-42928197-3', 'auto');

        </script>
    </body>
</html>
