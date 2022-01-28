
  var divElement = document.getElementById('viz1642524027290');
  var vizElement = divElement.getElementsByTagName('object')[0];
  vizElement.style.width = '420px';
  vizElement.style.height = '527px';
  var scriptElement = document.createElement('script');
  scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
  vizElement.parentNode.insertBefore(scriptElement, vizElement);

