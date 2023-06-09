import NCPlayer from ".";

export default class Video extends HTMLVideoElement {
  constructor(public ncPlayer: NCPlayer) {
    super();

    this.controls = true;
    this.playsInline = true;
    this.preload = "auto";
    this.poster = this.ncPlayer.options.poster ?? "";
  }

  /**  */
  isPlaying() {
    return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
  }
  togglePlay() {
    !this.error && this[this.isPlaying() ? "pause" : "play"]();
  }

  //toggleFullScreen
  toggleFullScreen() {
    //Do something...
  }

  //Video element events
  on(event: keyof HTMLVideoElementEventMap, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions | undefined) {
    this.addEventListener(event, listener, options);
  }

  once(event: keyof HTMLVideoElementEventMap, listener: EventListenerOrEventListenerObject) {
    this.on(event, listener, { once: true });
  }
}

//Custom video element
customElements.define("custom-video", Video, { extends: "video" });
