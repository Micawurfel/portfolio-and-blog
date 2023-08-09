import React from 'react'
import BtnContact from '../components/BtnContact'

export default function Home() {
  return (
    <div className='container'>
        <section className='vh-100 bg-warning'>
            <img src="https://melbaudon.com/wp-content/uploads/2023/02/7B23D888-E5FB-42FD-B58A-40F9FA870583_1_201_a-2048x2048.jpeg" alt="" className='rounded-circle w-25' />
            <h1>Soy Paula Tabbia, <span>Licenciada en Turismo </span></h1>
            <p>Soy licenciada en turismo. Mi experiencia cumpliendo diferentes roles dentro de la gastronomía, hotelería y eventos me han ayudado a desarrollar mi capacidad de adaptación y flexibilidad. Disfruto los ambientes de trabajo de constante aprendizaje.</p>
            <BtnContact link='/contact' title='Contactame'/>
        </section>

        <section className='vh-100 bg-danger'>
            Portfolio
        </section>

        <section className='vh-100 bg-primary'>
            <h1>Skills & Habilidades</h1>
            <p>Me especializo en:</p>
            <ul>
                <li>jdjdjd</li>
                <li>jdjdjd</li>
                <li>jdjdjd</li>
                <li>jdjdjd</li>
                <li>jdjdjd</li>
            </ul>
        </section>

    </div>
  )
}
