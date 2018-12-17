let video = () => {
    function findVideos() {
        let videos = document.querySelectorAll('.video');

        for (let i = 0; i < videos.length; i++) {
            setupVideo(videos[i]);
        }
    }

    function setupVideo(video) {
        let link = video.querySelector('.video__link');
        let button = document.querySelector(".video__btn");
        let videoSource = video.querySelector(".video-source");
        button.addEventListener("click", clickBtn, false);
        let firstLoad = true;
        function clickBtn() {
            if (firstLoad) {
                videoSource.play().then(res => {
                    showVideo();
                    firstLoad = false;
                    button.classList.add("pause");
                });
                return;
            }
            if (videoSource.paused) {
                videoSource.play().then(() => { button.classList.add("pause") })
            } else {
                videoSource.pause()
                button.classList.remove("pause")
            }
        };
      
        let showVideo = function () {
            videoSource.classList.remove("video-media--hide");
            videoSource.classList.add("video-media");
            link.remove();
        };
       
        link.removeAttribute('href');
    }

    findVideos();
}
export default video;