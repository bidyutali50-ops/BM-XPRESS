.marquee-track {
  display: flex;
  width: max-content;
  align-items: center;
  animation: marquee-scroll 38s linear infinite;
  will-change: transform;
}

.group:hover .marquee-track {
  animation-play-state: paused;
}

@keyframes marquee-scroll {
  from { transform: translate3d(0, 0, 0); }
  to   { transform: translate3d(-50%, 0, 0); }
}

@media (prefers-reduced-motion: reduce) {
  .marquee-track {
    animation: none;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
  }
  .marquee-item[aria-hidden="true"] { display: none; }
}
