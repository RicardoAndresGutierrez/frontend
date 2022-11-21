// import React from "react";

const HomePage = (props) => {
    return (
        <main className="holder">
        <div className="fotohome">
            <img src="imagenes/paracaidas2.jpg" width="80%" alt="skydivers"/>
        </div>
        <div className="contenedor">
            <div className="bienvenido">
                <h2>Bienvenidos</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci culpa, rem dolorem veniam qui
                    dignissimos consectetur eveniet autem, recusandae odit doloremque optio, officiis deleniti
                    reprehenderit doloribus mmmmmm enim. Molestias, explicabo? Natus!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim repellat illum rerum libero, ipsa
                    accusamus quam, architecto incidunt ipsam dignissimos dolores laboriosam ut accusantium totam harum
                    obcaecati cupiditate, nesciunt aut?</p>
            </div>
            <div className="testimonios">
                <h2>Testimonios</h2>
                <div className="testimonio">
                    <span className="cita">Simplemente Excelente</span>
                    <span className="autor">Juan Perez - Piloto tándem</span>
                </div>
            </div>
        </div>
    </main>
    )
    }
    
    export default HomePage;