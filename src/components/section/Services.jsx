import React from 'react'
import {services} from '../../data/services'
import * as Icons from 'lucide-react'
import { Wrench } from 'lucide-react'
import FadeIn from '../animations/FadeIn'

const Services = () => {
  return <section id="services" className="">
    <div className="">
        <div className="" />
        <div className="" />
        <div className="" />
    </div>

    <div 
        className=""
        style={{
            backgroundImage:`
                linear-gradient(to right, white 1px, transparent 1px)
                linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px'
        }}
    />

    <div className="">
        <FadeIn delay={0}>
            <div className="">
                <div className="">
                    <Wrench className="" />
                    <span className="">What I Ofer</span>
                </div>
                <h2 className="">
                    Buil for innovation, Designed for results,
                </h2>
                <p className="">
                    Comprehensive solutions to transform your ideas expetional digital experiences
                </p>
            </div>
        </FadeIn>
    </div>
  </section>
    
  
}

export default Services
