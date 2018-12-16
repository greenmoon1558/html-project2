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
        button.addEventListener("click", clickBtn, false);
        function clickBtn() {
            showVideo();
            if (!videoSource.paused) videoSource.play();
            else videoSource.pause();
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
        let showVideo = once(function() {
            videoSource.classList.remove("video-media--hide");
            videoSource.classList.add("video-media");
            link.remove();
        });
       
        link.removeAttribute('href');
    }

    findVideos();
}
export default video;