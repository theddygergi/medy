let slideIndex = 0;
  showSlides();

  function showSlides() {

    let i;
    let slides = document.getElementsByClassName("mySlides"); 
    /*getElementsByClassName since b html l souwar mhtoutin b class esma mySlides */
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; // remove the images (hide them)
    }
    slideIndex++; 
    if (slideIndex > slides.length) {slideIndex = 1} //if the index exceeds the length of the images, it is reset to 1
    slides[slideIndex-1].style.display = "block"; // make the image re-appear as a block element
    setTimeout(showSlides, 2000); //Change each image every 2 seconds (2000 milliseconds) // setTimeout(function(), time in ms) is
    //used to delay the next calling of the function for a certain amount of time
  }