import React from 'react'
import './Pages.css'
import Experiencie from '../components/Experiencie'

export default function AboutMe() {
  return (
    <div className='container'>
        <section className='min-vh-100 d-flex bg-primary justify-content-around align-items-center flex-row-reverse'>
            <div className='w-50'>
                <h1>Soy Paula, Diseñadora de productos digitales</h1>
                <h2>Me apasiona crear productos que ayuden a las personas a tener una mejor experiencia siendo quienes son: seres humanos.</h2>
                <p>Comencé mi carrera como Diseñadora UX/UI, sin embargo, la experiencia me fue encaminando hacia el Product Design. Llevo más de 2 años trabajando en diversos proyectos de diferentes industrias, siempre con el foco puesto en los usuarios y en el negocio.</p>
            </div>
            <img className='img' src="https://melbaudon.com/wp-content/uploads/2023/02/7B23D888-E5FB-42FD-B58A-40F9FA870583_1_201_a-2048x2048.jpeg" alt="" />
        </section>

        <section className='min-vh-100 d-flex bg-success justify-content-around align-items-center flex-row'>
            <div className='w-50'>
                <h2>El pensamiento de diseño como mindset</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quasi iste provident accusantium ipsa, a laudantium placeat, magnam sapiente repudiandae officia nam id ab natus ea autem, nihil repellat voluptates?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates laudantium illo tenetur sit ducimus iure impedit in omnis similique. Consequuntur dolores dicta delectus ipsum rem placeat eos nisi aperiam atque!</p>
            </div>
            <img className='img' src="https://melbaudon.com/wp-content/uploads/2023/02/7B23D888-E5FB-42FD-B58A-40F9FA870583_1_201_a-2048x2048.jpeg" alt="" />
        </section>

        <section className='min-vh-100'>
            <h2>Sobre mi experiencia laboral</h2>
            <Experiencie 
                logo='https://melbaudon.com/wp-content/uploads/2022/10/Element-27.png'
                position='Research Analyst & Events Associate'
                company='Innovation16'
                dates='Octubre 2021 - Presente'
                description='bla bla bla bla bla'
            />
            <Experiencie
                position='Customer Service Specialist'
                company='Parra'
                dates='Marzo - Octubre 2021'
                description='bla bla bla bla bla'
            />
            <Experiencie
                position='Cook y Attendant'
                company='Deer Valley'
                dates='Tres temporadas de invierno desde 2017 a 2020'
                description='bla bla bla bla bla'
            />
        </section>

    </div>
  )
}
