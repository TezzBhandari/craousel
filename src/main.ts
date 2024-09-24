document.addEventListener("DOMContentLoaded", () => {
  const slides = Array.from(
    document.querySelectorAll(".craousel_slide")
  ) as HTMLElement[];

  const innerCarousel = document.querySelector(".craousel_inner");

  let currentIndex = 0;
  const totalSlides = slides.length;

  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);
  innerCarousel?.append(firstClone);
  innerCarousel?.insertBefore(lastClone, slides[0]);

  const afterSlides = Array.from(
    document.querySelectorAll(".craousel_slide")
  ) as HTMLElement[];

  const updateCraousel = (animation: boolean) => {
    afterSlides.map((slide) => {
      if (animation) {
        slide.style.transition = "transform 0.5s ease-in-out";
      } else {
        slide.style.transition = "none";
      }
    });

    afterSlides.map((slide) => {
      slide.style.transform = `translateX(${currentIndex * -100}%)`;
    });
  };

  setInterval(() => {
    if (currentIndex === totalSlides) {
      currentIndex = 1;
      updateCraousel(true);
    } else {
      currentIndex++;
      updateCraousel(true);
    }
  }, 3000);
});
