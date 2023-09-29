document.getElementById("videoworks").addEventListener("click", function () {
  // Select the elements to replace
  var elementsToReplace = document.querySelectorAll(".case .serv_col");

  // Clone and append the elements to the .video div
  var videoContainer = document.querySelector(".video");
  for (var i = 0; i < elementsToReplace.length; i++) {
    var clone = elementsToReplace[i].cloneNode(true);
    videoContainer.appendChild(clone);
  }

  // Remove the original elements from .case
  for (var i = 0; i < elementsToReplace.length; i++) {
    elementsToReplace[i].remove();
  }
});