import Video from "./Video";
import Emitter from "./utils/Emitter";
import { NCDom } from "./utils/NCDom";

export interface Option {
  videoUrl?: string;
  autoPlay?: boolean;
  muted?: boolean;
  poster?: string;
}

export default class NCPlayer extends Emitter {
  readonly toast: (msg: string) => void;
  readonly container: NCDom;
  readonly video: Video;

  constructor(selector: string, public options: Option) {
    super();
    this.container = new NCDom(document.querySelector(selector) as HTMLElement);
    this.container.attr("tabindex", 1);

    //Init packages
    this.video = new Video(this);

    // //Append video DOM
    this.container.node.appendChild(this.video);

    //Option default values
    this.options.videoUrl && (this.video.src = this.options.videoUrl);
    this.options.muted && (this.video.muted = this.options.muted);
    this.options.autoPlay && (this.video.autoplay = this.options.autoPlay); //Auto play
  }
}
