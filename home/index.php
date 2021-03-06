<?php
    include('../config/db.php');
if (!isset($_SESSION['username'])) {
header("location: ../login");
}		
?>
<!doctype html>
<html lang="en">
    <head>
        <title>Imperfect and Company - Home</title>
		<!-- CSS -->
		<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
		<!-- Desired link -->
		<link rel="canonical" href="https://imperfectandcompany.com/">
		<!-- Favicon -->
		<link rel="apple-touch-icon" sizes="180x180" href="../apple-touch-icon.png">
		<link rel="icon" type="image/png" sizes="32x32" href="../favicon-32x32.png">
		<link rel="icon" type="image/png" sizes="16x16" href="../favicon-16x16.png">
		<link rel="manifest" href="../site.webmanifest">
		<link rel="mask-icon" href="../safari-pinned-tab.svg" color="#5bbad5">
		<!-- SEO METADATA -->
		<meta name="description" content="Imperfect and Company. In a world of people trying to be perfect, sometimes you gotta own that you're imperfect but not alone, you got company." />
		<meta name="keywords" content="imperfectandcompany, imperfect and company, imperfectgamers, postogon, imperfect gamers, imperfectsounds, imperfect sounds, internships" />
		<meta name="msapplication-TileColor" content="#2d89ef">
		<meta property="og:title" content="Imperfect and Company - Internships Available" />
		<meta property="og:description" content="Imperfect but not alone, you got company. Imperfect and Company is accepting internship applications." />
		<!-- switch to 'https' oncet the new cdn subdomain ssl cert is mitigated -->
		<meta property="og:image" content="https://cdn.imperfectandcompany.com/assets/22543831959.png" />
		<meta property="og:image:width" content="1200" />
		<meta property="og:image:height" content="630" />
		<meta name="theme-color" content="#ffffff">
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
	

<body>

<script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>

<div class="min-h-screen">
  <div class="antialiased bg-gray-100 dark-mode:bg-gray-900">
  <div class="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
 <?php include_once('nav.php'); ?>
	

	
	
	
	
  </div>
</div>
  </div>


</body>






</html>