import React from 'react'

const Contacto = () => {
    return (
        <section>
            <h2>Contacto</h2>

            <div>
                <form action="">
                    <label htmlFor="name">Nombre</label>
                    <input type="text" />

                    <label htmlFor="">Mail</label>
                    <input type="email" />

                    <label htmlFor="">Asunto</label>
                    <input type="text" />

                    <label htmlFor="">Mensaje</label>
                    <textarea name="message" id="" cols="30" rows="10"></textarea>
                </form>

                <button>Enviar</button>
            </div>
        </section>
    )
}

export default Contacto