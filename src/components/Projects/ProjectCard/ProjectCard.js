import down from '../../../images/social/Dtafalonso-Android-Lollipop-Downloads.png';
import React from 'react';
import './ProjectCard.css';
import Carousel from 'react-bootstrap/Carousel';
// import Aos from "aos";
// import "aos/dist/aos.css";

const ProjectCard = ({ projects: { name, image, description, download, price } }) => {
    // useEffect(() => {
    //     Aos.init({ duration: 1000 });
    // }, [])
    // const [details, setDetails]  = useState(false)
    console.log(description);
    return (
        <div className="col-md-6 card-area" data-aos="zoom-in">
            <div className="box p-3" >
                <div className="projectImage-area py-3">

                    <Carousel controls={false} indicators interval={2000} pause={false}>
                        <Carousel.Item>
                            <img className="mx-auto d-block custom-img" style={{ height: '350px', width: "90%", borderRadius: '10px' }} src={image} alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="mx-auto d-block custom-img" style={{ height: '350px', width: "90%", borderRadius: '10px' }} src={image} alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="mx-auto d-block custom-img" style={{ height: '350px', width: "90%", borderRadius: '10px' }} src={image} alt="" />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <h6 className="my-3 font-weight-bold text-uppercase">{name}</h6>
                
                <p>{description}</p>
                <div className="mx-auto">
                    <div className="mb-3 linkIcon">
                        <span className="mr-2 ms-5 font-weight-bold btn btn-outline-danger btn-sm" >{price}</span>
                        {/* <a className="mr-2 ms-5 font-weight-bold btn btn-outline-info btn-sm" target="_blank" rel="noreferrer"><img className="mr-2 me-1" src={down} alt="" />Download</a> */}
                        <button className="btn btn-sm btn-outline-warning font-weight-bold ms-5"><img className="mr-2 me-1" src={down} alt=""/>Download</button>
                    </div>
                </div>
                {/* {
                    details ? <h5 className="font-weight-bold text-center">Details Coming Soon</h5> : null
                } */}
            </div>
        </div>
    );
};

export default ProjectCard;