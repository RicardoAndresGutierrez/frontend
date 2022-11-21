import React from "react";

const Footer = (props) => {
    return (
        <footer>
        <div className="wrapper">
            <a href="https://www.facebook.com/" target="_blank" className="icon facebook" rel="noreferrer">
                <div className="tooltip">Facebook</div>
                <span><i className="fab fa-facebook-f"></i></span>
            </a>
            <a href="https://www.instagram.com/xtremeskydive/" target="_blank" className="icon instagram" rel="noreferrer">
                <div className="tooltip">Instagram</div>
                <span><i className="fab fa-instagram"></i></span>
            </a>
            <a href="https://www.youtube.com/" target="_blank" className="icon youtube" rel="noreferrer">
                <div className="tooltip">Youtube</div>
                <span><i className="fab fa-youtube"></i></span>
            </a>
        </div>
        <p>Diseñado por Andres Gutierrez -&copy;2022</p>
    </footer>
    )
    }
    
    export default Footer;