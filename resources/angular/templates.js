angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("partials/navbar.html","<nav class=\"navbar\" id=\"nav-main\" sticky >\r\n    <div class=\"container\">\r\n        <!-- Brand and toggle get grouped for better mobile display -->\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <a ui-sref=\"home\" class=\"navbar-brand\">\r\n                <span class=\"blue\">Dot</span>\r\n                <span class=\"gold\">Five</span>\r\n                <span class=\"blue\">Systems</span>\r\n            </a>\r\n        </div>\r\n\r\n        <!-- Collect the nav links, forms, and other content for toggling -->\r\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li><a du-scrollspy du-smooth-scroll href=\"#landing\">Home</a></li>\r\n                <li><a du-scrollspy du-smooth-scroll href=\"#services\">Services</a></li>\r\n                <li><a du-scrollspy du-smooth-scroll href=\"#projects\">Projects</a></li>\r\n                <li><a du-scrollspy du-smooth-scroll href=\"#about\">About</a></li>\r\n                <li><a du-scrollspy du-smooth-scroll href=\"#contact\">Contact</a></li>\r\n            </ul>\r\n        </div><!-- /.navbar-collapse -->\r\n    </div><!-- /.container-fluid -->\r\n</nav>\r\n");
$templateCache.put("modules/home/about.html","<section id=\"about\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4\">\r\n                <img src=\"img/me.png\" class=\"img-responsive img-me\" alt=\"dotfives-mark\">\r\n                <div class=\"about-links\">\r\n                    <a href=\"https://www.facebook.com/mark5cinco\" target=\"_blank\" alt=\"dotfives-fb\">\r\n                        <img src=\"img/fb.png\">\r\n                    </a>\r\n                    <a href=\"#\" target=\"_blank\" alt=\"dotfives-github\">\r\n                        <img src=\"img/github.png\">\r\n                    </a>\r\n                    <a href=\"#\" target=\"_blank\" alt=\"dotfives-resume\">\r\n                        <img src=\"img/resume.png\">\r\n                    </a>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-8 col-md-offset-1 col-md-7\">\r\n                <article class=\"about-content\">\r\n                    <div class=\"sub-content\">\r\n                        <p>\r\n                            Hi, my name is Mark! Short description about me, I\'m a programmer who enjoys making web systems\r\n                            that ease the troubles that life give us. When I was a student, I wasn\'t satisfied with topics\r\n                            being discussed in my course. I then began studying how websites are created. After a while, I gained enough confidence to take on a project from a client. As things\r\n                            led to another, so here I am, showing the world where my curiosity to learn has led me.\r\n                        </p>\r\n                    </div>\r\n                    <footer class=\"main-content\">\r\n                        <p>\r\n                            As a Web Developer,\r\n                        </p>\r\n                        <p>\r\n                            I enjoy making websites for people\r\n                        </p>\r\n                        <p>\r\n                            who want to pursue their dreams\r\n                        </p>\r\n                        <p>\r\n                            with the power of I.T.\r\n                        </p>\r\n                    </footer>\r\n                </article>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>");
$templateCache.put("modules/home/contact.html","<section id=\"contact\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n                <form action=\"\" id=\"contact-form\">\r\n                    <div class=\"form-group\">\r\n                        <input name=\"name\" type=\"text\" class=\"form-control\" placeholder=\"Name\" required>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <input name=\"email\" type=\"email\" class=\"form-control\" placeholder=\"Email\" required>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <textarea name=\"message\" class=\"form-control\" placeholder=\"Message\" required></textarea>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <button type=\"submit\" class=\"btn pull-right\">Send</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n            <div class=\"col-sm-5 col-sm-offset-1 text-center\">\r\n                <div class=\"contact-details\">\r\n                    <div><span><i class=\"fa fa-envelope-o\"></i> mark5@dotfivesystems.com</span></div>\r\n                    <div><span><i class=\"fa fa-mobile\"></i> +63 917 639 5782</span></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>");
$templateCache.put("modules/home/landing.html","<section id=\"landing\">\r\n    <div class=\"middle\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                    <h1 class=\"title\">\r\n                        <p>\r\n                            Hello <br> World!\r\n                        </p>\r\n                    </h1>\r\n                    <div class=\"gist\">\r\n                        <p> I am <span class=\"blue\">Mark Cinco</span>, </p>\r\n                        <p> a developer, who will help you </p>\r\n                        <p> with your <span class=\"gold\">Web Development</span> needs. </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"link-to-project text-center\">\r\n        <div class=\"\">\r\n            Get to know me and my work\r\n        </div>\r\n        <i du-smooth-scroll=\"projects\" class=\"fa fa-arrow-down\"></i>\r\n    </div>\r\n</section>");
$templateCache.put("modules/home/projects.html","<section id=\"projects\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6 col-md-4\" ng-repeat=\"project in projects\">\r\n                <article class=\"project-item\" project-item>\r\n                    <div class=\"card\">\r\n                        <div class=\"front\" ><div class=\"image\" style=\"background: url(\'img/<% project.id %>.jpg\')\"></div></div>\r\n                        <div class=\"back\">\r\n                            <div class=\"details\">\r\n                                <h2>\r\n                                    <a href=\"<% project.url %>\">\r\n                                        <% project.name %>\r\n                                    </a>\r\n                                </h2>\r\n                                <p><% project.technology %></p>\r\n                                <p><% formatDate(project.done_date, \'yyyy\') %></p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </article>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>");}]);
//# sourceMappingURL=templates.js.map
