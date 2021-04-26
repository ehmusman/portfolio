import React from 'react'
import Zoom from 'react-reveal/Zoom';

const Skill = ({ img }) => {
    return (
        <Zoom>
            <div className="card border-rdius">
                <div className="card-body">
                    <div className="card-img img-float">
                        <img src={img} width="100%" alt="" />
                    </div>
                </div>
            </div>
        </Zoom>
    )
}

export default Skill
