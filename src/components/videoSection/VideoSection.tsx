const video = require("../../assets/images/items/video.mp4");
export default function VideoSection() {
  return (
    <div>
      <header className="video-container mt-5">
        <div className="overlay"></div>
        <video src={video} autoPlay loop muted></video>
        <div className="container h-100">
          <div className="d-flex h-100  align-items-center">
            <div className="w-100 text-white text-center">
              <div className=" d-flex flex-column align-items-center">
                <div className="player mb-5">
                  <span>Play</span>
                </div>
                <h1 className="display-5">WE SERVE YOU THE BEST</h1>
                <hr className=" my-4" />
              </div>
              <p className="mb-0">
                WE SERVE YOU THE BEST Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                Cum sociis natoque penatibus et magnis dis parturient montes.
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
