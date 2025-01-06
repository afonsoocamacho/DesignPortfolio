<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!-- For iOS Safari -->
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  
  <!-- General theme color for supported browsers -->
    <meta name="theme-color" content="#000">
  
  <!-- For Microsoft Edge -->
    <meta name="msapplication-navbutton-color" content="#000">
    <meta
      name="description"
      content="EDepot - Tresoar's digital archive"
    />
    <title>AFONSO CAMACHO - PROJECTS</title>



    <!-- Styles -->
    <link rel="stylesheet" href="{{ asset('css/globals.css') }}">
    
</head>
<body>
  <div id="cursor" class="custom-cursor"></div>


    
    <div class="big">DESIGN</div>
    <div class="big">PORTFOLIO</div>
    <div class="image-entrance"></div>


    <x-nav-bar></x-nav-bar>

    <section class="project">
        <div class="project-title">
            <h1>Pink October</h1>
            <p>Branding</p>
            <p>about</p>
            <p>description</p>

            <div class="softwares used"> 
                <p>Illustrator</p>
                <p>Photoshop</p>
                <p>Blender</p>
            </div>
        </div>
        <div class="project-images">
            <div class="project-image">
                <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="Pink October">
            </div>
            <div class="project-image">
                <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="Pink October">
            </div>
            <div class="project-image">
                <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="Pink October">
            </div>
        </div>
    </section>

  <!-- Scripts -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/debug.addIndicators.min.js"></script>
  <script src="{{ asset('js/fitText.js') }}"></script>
</body>
</html>