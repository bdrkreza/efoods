import { TiTick } from "react-icons/ti";
import aboutimg from "../../assets/images/img/cococola.png";
export default function AboutSection() {
  return (
    <>
      <section className="about-section py-5 mt-5">
        <div className="container">
          <div className="row row align-items-center">
            <div className="col-lg-5 offset-lg-1 order-lg-1 img-box">
              <img src={aboutimg} className="about-img" alt="Web Development" />
            </div>
            <div className="col-lg-6">
              <div>
                <h1 className="mt-3 text-white">
                  FIND YOUR BEST TASTED FOOD & DRINK JUST IN ONE PLACE
                </h1>
                <hr className=" my-4 elementor-divider-separator w-50" />
                <p className="text-secondary my-5">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes.
                </p>

                <div className="row text-secondary">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <p>
                      <span className="text-warning">
                        <TiTick />
                      </span>
                      Best Price
                    </p>
                    <p>
                      <span className="text-warning">
                        <TiTick />
                      </span>
                      Fresh Ingredient
                    </p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <p>
                      <span className="text-warning">
                        <TiTick />
                      </span>
                      Best Service
                    </p>
                    <p>
                      <span className="text-warning">
                        <TiTick />
                      </span>
                      Health Protocol
                    </p>
                  </div>
                </div>
              </div>

              <div className="common-btn">
                <a
                  href="#"
                  className="btn btn-outline-secondary btn-lg border mt-4"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
