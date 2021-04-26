import React, { useState } from 'react'
import Typical from "react-typical"
import Skill from './Skill'

const ShowCase = () => {
    const images = [
        { id: 1, img: "https://res.cloudinary.com/ehmusman/image/upload/v1619453168/portfolio/services/react_fogymi.png" },
        { id: 2, img: "https://res.cloudinary.com/ehmusman/image/upload/v1619453167/portfolio/services/nodejs_yfxlub.png" },
        { id: 3, img: "https://res.cloudinary.com/ehmusman/image/upload/v1619453166/portfolio/services/graphql_qooiho.png" },
        { id: 4, img: "https://res.cloudinary.com/ehmusman/image/upload/v1619453167/portfolio/services/ExpressJS_x50jnn.png" },
        { id: 5, img: "https://res.cloudinary.com/ehmusman/image/upload/v1619453167/portfolio/services/mongodb-226029_y1kuaz.webp" },
        { id: 6, img: "https://res.cloudinary.com/ehmusman/image/upload/v1619453166/portfolio/services/js_metu9v.png" },
        { id: 7, img: "https://res.cloudinary.com/ehmusman/image/upload/v1619453165/portfolio/services/apollo_x76tcw.png" }
    ]
    const [skills] = useState(images)
    return (
        <>
            <div className="show-case">
                <div className="inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="container text-light mt-5 d-flex align-items-start flex-column justify-content-center">
                                    <h1> <span className="text-danger">Usman </span>Bakhsh</h1>
                                    <h4 className="mt-5">I am <span className="text-light">
                                        <Typical
                                            loop={Infinity}
                                            wrapper="b"
                                            steps={[
                                                "a React Js Developer",
                                                2000,
                                                "Node Js Developer",
                                                2000,
                                                "MERN Stack Developer",
                                                2000,
                                                "a Web Developer",
                                                2000,
                                                "a Web Designer",
                                                2000
                                            ]}
                                        />
                                    </span></h4>
                                </div>
                            </div>
                            <div className="col-6 col-md-6 text-light">
                                <h1 className="mt-5">Experties in</h1>
                                <div className="card-columns">
                                    {skills.map(img => (
                                        <Skill
                                            key={img.id}
                                            img={img.img}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ShowCase
