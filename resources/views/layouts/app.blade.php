<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>Innovateria</title>
    <meta name="author" content="Innovateria">
    <meta name="description" content="Innovateria">
    <meta name="keywords" content="Innovateria, Vivekajee, Vnj Vibhash, Vnjvibhash, Software, Android, Mobile App">
    <meta name="theme-color" content="#FF4E2E">


    <!-- Favicons -->
    <link href="innovateria.in" rel="canonical">
    <link href="{{ url('/') }}/public/favicon.ico" rel="icon">
    <link href="{{ url('/') }}/public/favicon.ico" rel="apple-touch-icon">

    <!-- Template Main CSS File -->
    <link href="{{ url('/') }}/public/assets/css/style.css" rel="stylesheet">
    <link href="{{ url('/') }}/public/assets/css/responsive.css" rel="stylesheet">
    <script data-ad-client="ca-pub-6054255400489083" async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
</head>

<body>

    <!-- ======= Header ======= -->
    <header id="header" class="fixed-top">
        <div class="hdr_top">
            <div class="container-fluid">
                <ul>
                    <li class="mail"><a href="#"><i class="fa fa-phone"></i> +91-7986635348</a></li>
                    <li class="mail"><a href="#"><i class="fa fa-envelope"></i> info@innovateria.in</a></li>
                    <li><a href="{{ url('/') }}">home</a></li>
                    <li><a href="{{ url('/') }}/about">about</a></li>
                    <li><a href="{{ url('/') }}/feature">features</a></li>
                    <li><a href="{{ url('/') }}/portfolio">gallery</a></li>
                    <li><a href="{{ url('/') }}/team">team</a></li>
                    <li><a href="{{ url('/') }}/contact">contact</a></li>
                </ul>
            </div>
            <div class="clearfix"></div>
        </div>
        <div class="container-fluid d-flex">

            <div class="logo mr-auto">
                <!-- <h1 class="text-light"><a href="index.html"><span>Innovateria</span></a></h1> -->
                <a href="{{ url('/') }}"><img src="{{ url('/') }}/public/assets/img/logo.png" alt="Innovateria" class="img-fluid"></a>
            </div>

            <nav class="nav-menu d-none d-lg-block">
                <ul>
                    <li class="active"><a href="{{ url('/') }}">Home</a></li>
                    <li class="drop-down"><a href="">Who We Are</a>
                        <ul>
                            <li><a href="{{ url('/') }}/about">About us</a></li>
                            <li><a href="{{ url('/') }}/team">Our Team</a></li>
                            <li><a href="{{ url('/') }}/portfolio">Our Projects</a></li>
                            <li><a href="{{ url('/') }}/feature">Feature's</a></li>
                            <li><a href="{{ url('/') }}/faq">Faq's</a></li>
                        </ul>
                    </li>
                    <li class="drop-down"><a href="">Our Services</a>
                        <ul>
                            <li><a href="{{ url('/') }}/android_development">Android Development</a></li>
                            <li><a href="{{ url('/') }}/software_development">Software Development</a>
                            </li>
                            <li><a href="{{ url('/') }}/web_development">Web Development</a></li>
                            <li><a href="{{ url('/') }}/logo_designing">Logo Designing</a></li>
                            <li><a href="{{ url('/') }}/ui_designing">Android UI Designing</a></li>
                        </ul>
                    </li>
                    <li class="drop-down"><a href=""> Marketing</a>
                        <ul>
                            <li><a href="{{ url('/') }}/seo_services">Seo Services</a></li>
                            <li><a href="{{ url('/') }}/digital_marketing">Digital Marketing</a></li>
                        </ul>
                    </li>

                </ul>
            </nav><!-- .nav-menu -->

            <div class="header-social-links">
                {{-- <a href="#" class="hide_xs"><i class="fa fa-whatsapp" style="color: green;"></i> +91 79866 35348</a> --}}
                <a href="https://www.innovateria.in" style="background: #660708;color: #fff;" target="_blank"><i
                        class="fa fa-globe"></i> Promotion</a>
            </div>

        </div>
    </header><!-- End Header -->
    <div class="general_social_icons">
        <nav class="Social">
            <ul>
                <li class="w3_github">
                    <a href="https://github.com/VivekaJee" target="_blank">
                        GitHub <i class="fa fa-github"></i>
                    </a>
                </li>
                <li class="w3_facebook">
                    <a href="https://facebook.com/Vivekajee" target="_blank">
                        Facebook <i class="fa fa-facebook"></i>
                    </a>
                </li>
                <li class="w3_p">
                    <a href="https://wa.me/917986635348" target="_blank">
                        Whatsapp <i class="fa fa-whatsapp"></i>
                    </a>
                </li>
                <li class="w3_twitter">
                    <a href="https://twitter.com/Vnjvibhash" target="_blank">
                        Twitter <i class="fa fa-twitter"></i>
                    </a>
                </li>
                <li class="w3_dribbble">
                    <a href="https://linkedin.com/Vivekajee" target="_blank">
                        Linkedin <i class="fa fa-linkedin"></i>
                    </a>
                </li>
                <li class="w3_g_plus">
                    <a href="https://instagram.com/Vivekajee" target="_blank">
                        Instagram <i class="fa fa-instagram"></i>
                    </a>
                </li>
            </ul>
        </nav>
    </div>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
        @yield('content')
    </div>
    <!-- /.content-wrapper -->

    <!-- ======= Footer ======= -->
    <footer id="footer">
        <div class="footer-top">
            <div class="container">
                <div class="row">

                    <div class="col-lg-3 col-md-6">
                        <div class="footer-info">
                            <a href="#"><img src="{{ url('/') }}/public/assets/img/logo.png"
                                    alt="logo" class="img-fluid"></a>

                            <p style="margin-top: 15px">
                                <strong>Call:</strong> +91 79866 35348<br>
                                <strong>Whatsapp:</strong> +91 79866 35348<br>
                                <strong>Email:</strong> info@innovateria.in<br>
                            </p>
                            <div class="social-links mt-3">
                                <a href="https://twitter.com/Vnjvibhash" class="twitter"><i class="fa fa-twitter"></i></a>
                                <a href="https://facebook.com/Vivekajee" class="facebook"><i class="fa fa-facebook"></i></a>
                                <a href="https://instagram.com/Vivekajee" class="instagram"><i
                                        class="fa fa-instagram"></i></a>
                                <a href="https://google.com/" class="google-plus"><i class="fa fa-skype"></i></a>
                                <a href="https://linkedin.com/Vivekajee" class="linkedin"><i class="fa fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-2 col-md-6 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><a href="{{ url('/') }}">Home</a></li>
                            <li><a href="{{ url('/') }}/about">About us</a></li>
                            <li><a href="{{ url('/') }}/feature">features</a></li>
                            <li><a href="{{ url('/') }}/portfolio">Portfolio</a></li>
                            <li><a href="{{ url('/') }}/contact">Contact us</a></li>
                        </ul>
                    </div>

                    <div class="col-lg-2 col-md-6 footer-links">
                        <h4>Our Services</h4>
                        <ul>
                            <li><a href="{{ url('/') }}/software_development">Software Development</a>
                            </li>
                            <li><a href="{{ url('/') }}/web_development">Web Development</a></li>
                            <li><a href="{{ url('/') }}/web_designing">Web Designing</a></li>
                            <li><a href="{{ url('/') }}/logo_designing">Logo Designing</a></li>
                            <li><a href="{{ url('/') }}/digital_marketing">Digital Marketing</a></li>
                        </ul>
                    </div>

                    <div class="col-lg-2 col-md-6 footer-links">
                        <h4>Policies</h4>
                        <ul>
                            <li><a href="{{ url('/') }}/disclaimer">disclaimer</a></li>
                            <li><a href="{{ url('/') }}/faq">Faq's</a></li>
                            <li><a href="{{ url('/') }}/privacy_policy">privacy policy</a></li>
                            <li><a href="{{ url('/') }}/refund_policy">refund policy</a></li>
                        </ul>
                    </div>

                    <div class="col-lg-3 col-md-6 footer-newsletter">
                        <h4>Our Newsletter</h4>
                        <p>Subscribe our newsletter for letest Innovative software update</p>
                        <form action="" method="post">
                            <input type="email" name="email"><input type="submit" value="Subscribe">
                        </form>

                    </div>

                </div>
            </div>
        </div>

        <div class="container">
            <div class="copyright">
                &copy; Copyright 2022 <strong><span>Innovateria</span></strong>, All Rights Reserved.
            </div>
            <!-- <div class="credits">
        Designed by <a href="#">Innovateria</a>
      </div> -->
        </div>
    </footer><!-- End Footer -->

    <a href="#" class="back-to-top"><i class="fa fa-long-arrow-up"></i></a>

    <!-- Vendor JS Files -->
    <script src="{{ url('/') }}/public/assets/vendor/jquery/jquery.min.js"></script>
    <script src="{{ url('/') }}/public/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="{{ url('/') }}/public/assets/vendor/jquery.easing/jquery.easing.min.js"></script>
    <script src="{{ url('/') }}/public/assets/vendor/php-email-form/validate.js"></script>
    <script src="{{ url('/') }}/public/assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
    <script src="{{ url('/') }}/public/assets/vendor/venobox/venobox.min.js"></script>
    <script src="{{ url('/') }}/public/assets/vendor/owl.carousel/owl.carousel.min.js"></script>
    <script src="{{ url('/') }}/public/assets/vendor/aos/aos.js"></script>

    <!-- Template Main JS File -->
    <script src="{{ url('/') }}/public/assets/js/main.js"></script>

</body>

</html>
