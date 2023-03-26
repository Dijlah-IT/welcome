const swiper = new Swiper(".carousel", {
  loop: true,
  effect: "fade",
  speed: 1500,
  autoplay: {
    delay: 6000,
  },
});

const player = new Plyr(".audio-player", {
  controls: ["play"],
  autoplay: true,
});
