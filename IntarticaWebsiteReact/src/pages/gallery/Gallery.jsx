import React, { useState } from "react";
import "./gallery.css";
import Navbar from "../../components/navbar/Navbar";
import NewletterSub from "../../components/newsletterSub/NewletterSub";
import Footer from "../../components/footer/Footer";
import { Modal } from "react-bootstrap";
import i01 from "../../images/Gallery-images/i01.jpg";
import i02 from "../../images/Gallery-images/i02.png";
import i03 from "../../images/Gallery-images/i03.jpg";
import i04 from "../../images/Gallery-images/i04.jpg";
import i05 from "../../images/Gallery-images/i05.jpg";
import i06 from "../../images/Gallery-images/i06.jpg";
import i07 from "../../images/Gallery-images/i07.png";
import i08 from "../../images/Gallery-images/i08.jpg";
import i09 from "../../images/Gallery-images/i09.jpg";
import i10 from "../../images/Gallery-images/i10.jpg";
import i11 from "../../images/Gallery-images/i11.png";
import i12 from "../../images/Gallery-images/i12.jpg";
import i13 from "../../images/Gallery-images/i13.jpg";
import i14 from "../../images/Gallery-images/i14.jpg";
import i15 from "../../images/Gallery-images/i15.png";
import i16 from "../../images/Gallery-images/i16.jpg";
import i17 from "../../images/Gallery-images/i17.jpg";

// import v01 from "../../images/Gallery-videos/v01.mp4";
// import v02 from "../../images/Gallery-videos/v02.mp4";
// import v03 from "../../images/Gallery-videos/v03.mp4";
// import v04 from "../../images/Gallery-videos/v04.mp4";

const Gallery = () => {
  const galleryImages = [
    i01,
    i02,
    i03,
    i04,
    i05,
    i06,
    i07,
    i08,
    i09,
    i10,
    i11,
    i12,
    i13,
    i14,
    i15,
    i16,
    i17,
  ];

  const galleryVideos = [];

  const [galleryActive, setGalleryActive] = useState("image");
  const [selectedMedia, setSelectedMedia] = useState(null);

  const handleGalleryClick = (galleryType) => {
    setGalleryActive(galleryType);
    setSelectedMedia(null); // Reset selected media when switching galleries
  };

  const handleMediaClick = (media) => {
    setSelectedMedia(media);
  };

  const handleCloseModal = () => {
    setSelectedMedia(null);
  };

  return (
    <>
      <Navbar />
      <div className="container gallery-container my-5">
        <h1>A Photo Gallery of our Work.</h1>
        <p>
          The Nature is Beautiful find your favorite picture around the world.
        </p>
        <div className="row my-5">
          <div className="gallery-seperator my-3">
            <div
              className={
                galleryActive === "image" ? "gallery-seperator-active" : ""
              }
              onClick={() => handleGalleryClick("image")}
            >
              Images
            </div>
            <div
              className={
                galleryActive === "video" ? "gallery-seperator-active" : ""
              }
              onClick={() => handleGalleryClick("video")}
            >
              Videos
            </div>
          </div>
          {galleryActive === "image" &&
            galleryImages.map((image, index) => (
              <div
                className="col-lg-4 col-sm-6"
                key={index}
                onClick={() => handleMediaClick(image)}
              >
                <div className="thumbnail">
                  <div className="img-container">
                    <img src={image} alt="" className="gallery-img" />
                    <div className="overlay">
                      <p className="caption">Caption Here</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          {galleryActive === "video" &&
            galleryVideos.map((video, index) => (
              <div
                className="col-lg-6 col-sm-6"
                key={index}
                onClick={() => handleMediaClick(video)}
              >
                <div className="thumbnail">
                  <div className="img-container">
                    <video autoPlay loop muted src={video}></video>
                    <div className="overlay">
                      <p className="caption">Caption Here</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <Modal
          show={selectedMedia !== null}
          onHide={handleCloseModal}
          // dialogClassName="gallery-modal"
        >
          <Modal.Body>
            {galleryActive === "image" ? (
              <img src={selectedMedia} alt="" className="modal-media" />
            ) : (
              <video autoPlay loop src={selectedMedia}></video>
            )}
          </Modal.Body>
        </Modal>
      </div>
      <NewletterSub />
      <Footer />
    </>
  );
};

export default Gallery;
