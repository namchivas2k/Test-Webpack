import NCPlayer from "./src/index";

const player = new NCPlayer("#player", {
  videoUrl: `https://file-examples.com/storage/fef677cdf46481c8d96f8cd/2017/04/file_example_MP4_640_3MG.mp4`,
  autoPlay: false,
  muted: false,
});

console.log(player);
