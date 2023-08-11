import Carousel from "react-bootstrap/Carousel";
import "../styles/carousal.css";
function Carousalreact() {
  return (
    <div>
      <Carousel data-bs-theme="dark">
        <Carousel.Item className="carousel-parent">
          <img
            className="d-block w-100"
            src="https://www.channelfutures.com/files/2019/12/Big-Sale-877x432.jpg"
            alt="First slide"
            height="600"
          />
          <Carousel.Caption>
            <div className="carousel-content">
              <h5>Sale</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-parent">
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/37397/camera-old-antique-voigtlander.jpg?auto=compress&cs=tinysrgb&w=600"
            alt="Second slide"
            height="600"
          />
          <Carousel.Caption>
            <div className="carousel-content">
              <h5>Vintage</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-parent">
          <img
            className="d-block w-100"
            src="https://e0.pxfuel.com/wallpapers/521/101/desktop-wallpaper-camera-vintage.jpg"
            alt="Third slide"
            height="600"
          />
          <Carousel.Caption>
            <div className="carousel-content">
              <h5>Vintage</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carousalreact;
