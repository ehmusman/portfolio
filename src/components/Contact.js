import React, { useState } from 'react'

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [comment, setComment] = useState("")
    return (
        <form className="container">
            <div className="form-group">
                <label className="text-light" htmlFor="name">Name</label>
                <input type="text" id="name" className="form-control" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div className="form-group">
                <label className="text-light" htmlFor="email">Email</label>
                <input type="email" id="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
                <label className="text-light" htmlFor="comment">Comment</label>
                <textarea type="comment" className="form-control" value={comment} onChange={e => setComment(e.target.value)} />
            </div>
            <button className="btn btn-outline-dark btn-block">
                Submit
            </button>
        </form>
    )
}

export default Contact
