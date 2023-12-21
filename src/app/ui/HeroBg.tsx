export default function HeroBg() {
  return (
    <video
      autoPlay={true}
      muted={true}
      loop={true}
      preload="auto"
      className="h-screen w-screen object-cover opacity-60"
    >
      <source src="/reel.mp4" type="video/mp4" className="" />
      <p className="text-6xl text-white">
        {"Your browser doesn't support HTML video. Here is a "}
        <a
          className="text-blue-300 underline"
          href="https://www.youtube.com/watch?v=2PKhVpucn1U"
        >
          link to the video
        </a>
        {" instead"}.
      </p>
    </video>
  );
}
