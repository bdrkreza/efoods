import "./HeroSection.css"
import heroimg from "../../assets/images/flying-burger-isolated-on-white-background.png"
import { MdOutlineLocalDining } from "react-icons/md"
import {FiDroplet}from "react-icons/fi"
import {RiLeafLine} from "react-icons/ri"
export default function HeroSection() {
    return (
        <div>
            <section className="hero-banner py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 offset-lg-1 order-lg-1">
                            <img src={heroimg} className="img-fluid" alt="Web Development" />
                        </div>
                        <div className="col-lg-6">
                            <h1 className="mt-3 text-white">SO MEATY YOU LL GO CRAZY</h1>
                            <hr className=" my-4 elementor-divider-separator w-50"/>
                            <p className="lead text-secondary my-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>

                            <div className="d-flex justify-content-evenly mb-5 text-white">
                                <div className="elementor-icon-box-icon">
                                    <MdOutlineLocalDining />
                                    <h5>Delicious</h5>
                                </div>
                                <div className="elementor-icon-box-icon">
                                    <FiDroplet />
                                    <h5>Delicious</h5>
                                </div>
                                <div className="elementor-icon-box-icon">
                                    <RiLeafLine />
                                    <h5>Delicious</h5>
                                </div>
                            </div>
                            <a href="#" className="btn btn-outline-secondary btn-lg border">Order Now</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
