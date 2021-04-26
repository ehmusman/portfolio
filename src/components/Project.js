import React from 'react'
import Zoom from 'react-reveal/Zoom';

const Project = ({ name, description, image, github, app }) => {
    return (
        <Zoom duration={1000} >
            <div className="card card-light my-3">
                <div className="card-header">{name}</div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <img src={image} width="80%" height="80%" alt="" />
                        </div>
                        <div className="col-12 col-md-4">
                            <h4>Description</h4>
                            <p className="text-left">
                                {description}
                            </p>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="row">
                                <div className="col-8">
                                    <a target="_blank" rel="noreferrer" href={github} className="btn btn-block btn-dark">
                                        <i className="fas fa-code-branch"></i>
                                     GitHub Repo
                                </a>
                                </div>
                                <div className="col-8 mt-3">
                                    <a target="_blank" rel="noreferrer" href="https://github.com/ehmusman" className="btn btn-block btn-dark">
                                        <i className="fab fa-github"></i>
                                    GitHub
                                </a>
                                </div>
                                <div className="col-8">
                                    <a target="_blank" rel="noreferrer" href={app} className="btn btn-dark btn-block mt-3">
                                        App
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Zoom>
    )
}

export default Project
