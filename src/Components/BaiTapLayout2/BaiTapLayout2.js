import React, { Component } from 'react'
import HeaderComponent from './HeaderComponent'
import CarouselComponent from './CarouselComponent'
import SmartphoneComponent from './SmartphoneComponent'
import LaptopComponent from './LaptopComponent'
import PromotionComponent from './PromotionComponent'

export default class BaiTapLayout2 extends Component {
    render() {
        return (
            <div>
                <HeaderComponent></HeaderComponent>
                <CarouselComponent></CarouselComponent>
                <SmartphoneComponent></SmartphoneComponent>
                <LaptopComponent></LaptopComponent>
                <PromotionComponent></PromotionComponent>

            </div>
        )
    }
}
