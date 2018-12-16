let video = () => {
    function findVideos() {
        let videos = document.querySelectorAll('.video');

        for (let i = 0; i < videos.length; i++) {
            setupVideo(videos[i]);
        }
    }

    function setupVideo(video) {
        let link = video.querySelector('.video__link');
        let media = video.querySelector('.video-media');
        let button = document.querySelector(".video__btn");
        let videoSource = video.querySelector(".video-source");
        button.addEventListener("click", clickBtn);
        function clickBtn() {
            if (videoSource.paused) {
                videoSource.play();
                showVideo();
            }
            else {
                videoSource.pause();
                console.log("pause")
            }
            button.classList.toggle("pause");
           
        };
        let once = function(fn, context) {
            var result;

            return function () {
                if (fn) {
                    result = fn.apply(context || this, arguments);
                    fn = null;
                }

                return result;
            };
        }
        let showVideo = once(() => {
            console.log("hide")
            link.remove();
            videoSource.classList.add("video-media");
            videoSource.classList.remove("video-media--hide");
        });
       
        link.removeAttribute('href');
    }

    findVideos();
}
export default video;