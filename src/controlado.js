import React, { Fragment } from 'react';

function Controlado(props) {
    const {
        tamano,
        tipo,
        onChangeTamano,
        onChangeTipo
    } = props;

    return (
        <Fragment>
            <h1>Hamburguesas</h1>

            <h3>Elije tamano:</h3>
            <ul>
                <li>
                    <input onChange={e => onChangeTamano(e.target.value)} checked={tamano === 'chico'} name='tamano' value='chico' type='radio' />
                    Chico
                </li>
                <li>
                    <input onChange={e => onChangeTamano(e.target.value)} checked={tamano === 'mediano'} name='tamano' value='mediano' type='radio' />
                    Mediano
                </li>
                <li>
                    <input onChange={e => onChangeTamano(e.target.value)} checked={tamano === 'grande'} name='tamano' value='grande' type='radio' />
                    Grande
                </li>
            </ul>

            <h3>Elije tipo de carne:</h3>
            <ul>
                <li>
                    <input onChange={e => onChangeTipo(e.target.value)} checked={tipo === 'pollo'} name='tipo' value='pollo' type='radio' />
                    Pollo
                </li>
                <li>
                    <input onChange={e => onChangeTipo(e.target.value)} checked={tipo === 'res'} name='tipo' value='res' type='radio' />
                    Res
                </li>
                <li>
                    <input onChange={e => onChangeTipo(e.target.value)} checked={tipo === 'cerdo'} name='tipo' value='cerdo' type='radio' />
                    Cerdo
                </li>
            </ul>

            <button>Aceptar</button>
        </Fragment>
    )
}

export default Controlado;