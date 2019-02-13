/* eslint-disable no-unused-expressions */
/* eslint-disable no-nested-ternary */
const once = function once(fun, context, ...params) {
  let result;
  return function currentFunc() {
    if (fun) {
      let fn = fun;
      result = fn.apply(context || this, params);
      fn = null;
    }
    return result;
  };
};
const initVideo = () => {
  function Video(video) {
    this.link = video.querySelector('.video__link');
    this.button = document.querySelector('.video__btn');
    this.videoSource = video.querySelector('.video-source');

    window.addEventListener('error', () => {
      // e.preventDefault();
      const errorMessage = !this.button
        ? 'Sorry. Button, which play video, stop work ('
        : !this.videoSource
          ? 'Sorry, There are problems with video ('
          : 'Sorry, there is an error. Something went wrong (';
      const error = document.querySelector('#error');
      error.innerHTML = errorMessage;
      error.classList.remove('js-hide');
      setTimeout(() => {
        error.classList.add('js-hide');
      }, 1500);
    });

    this.button.addEventListener('click', this.clickBtn.bind(this), false);
    this.link.removeAttribute('href');
  }

  Video.prototype.clickBtn = function clickBtn() {
    this.videoSource.paused
      ? this.videoSource.play().then(() => this.displayVideo())
      : this.videoSource.pause();
    this.button.classList.toggle('pause');
  };

  Video.prototype.displayVideo = once(function displayVideo() {
    this.videoSource.classList.remove('video-media--hide');
    this.videoSource.classList.add('video-media');
    this.link.remove();
  }, this);

  function findVideos() {
    const videos = document.querySelectorAll('.video');
    videos.forEach(video => new Video(video));
  }
  findVideos();
};
export default initVideo;
