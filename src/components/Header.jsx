import React from 'react'

function Header() {
    return (
        <div className="container-fluid header"
        style={{
            background:`url('/images/bg.jpg')`,
            backgroundPosition: 'center',
            backgroundAttachment:'fixed',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}
        >
            <div className="container">
                <div className="icons">
                    <span className="icon-wrapper"><i className="fa fa-twitter"></i></span>
                    <span className="icon-wrapper"><i className="fa fa-github"></i></span>
                    <span className="icon-wrapper"><i className="fa fa-linkedin"></i></span>
                    <span className="icon-wrapper"><i className="fa fa-facebook"></i></span>
                </div>

            </div>
        </div>
    )
}

export default Header
