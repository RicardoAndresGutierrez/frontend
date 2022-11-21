import React from "react";
const ContactoPage = (props) => {
    return (
        <main className="holder contacto">

            <div>
                <h2>Contacto Rápido</h2>
                <form action="" method="" className="formulario">
                    <p><label for="nombre">Nombre</label>
                        <input type="text" name="" />
                    </p>
                    <p><label for="email">Email</label>
                        <input type="text" name="" />
                    </p>
                    <p><label for="telefono">Teléfono</label>
                        <input type="text" name="" />
                    </p>
                    <p><label for="mensaje">Mensaje</label>
                        <textarea name=""></textarea>
                    </p>
                    <p className="acciones"><input type="submit" value="Enviar" />
                    </p>
                </form>
            </div>

            <div className="datos">
                <h2>Otras vias de comunicación</h2>
                <p>También puede contactarse con nosotros usando los siguientes metodos</p>
                <ul>
                    <li>Teléfono: 456789123</li>
                    <li>Email: xtremeskydivear@gmail.com</li>
                    <li>Facebook</li>
                    <li>Instragram: @xtremeskydive</li>
                    <li>Telegram:</li>
                </ul>

            </div>

        </main>

    )
}

export default ContactoPage;