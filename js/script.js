// Get canvas elements
var aboutCanvas = document.getElementById('aboutCanvas');
var projectsCanvas = document.getElementById('projectsCanvas');

// Get canvas contexts
var aboutCtx = aboutCanvas.getContext('2d');
var projectsCtx = projectsCanvas.getContext('2d');

// Draw text on about canvas
aboutCtx.font = '20px Arial';
aboutCtx.fillText('Hi, my name is Idin Iskandar.', 20, 40);
aboutCtx.fillText('I\'m a passionate programmer with experience in frontend development.', 20, 80);
aboutCtx.fillText('Welcome to my portfolio!', 20, 120);

// Draw text on projects canvas
projectsCtx.font = '20px Arial';
projectsCtx.fillText('Here are some projects I\'ve worked on:', 20, 40);
projectsCtx.fillText('- Project 1', 20, 80);
projectsCtx.fillText('- Project 2', 20, 120);
projectsCtx.fillText('- Project 3', 20, 160);
