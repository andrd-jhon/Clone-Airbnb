'use client'

import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import { IconAdjustmentsHorizontal } from "@/assets/icones"
import BotaoIcone from "@/components/BotaoIcone"

const NavegacaoAbasHorizontal = () => {
    return (
        <div>
            {/* Navegação de filtros */}
            <Swiper
            spaceBetween={10}
            slidesPerView={3}
            breakpoints={
                {
                640: {},
                764: {},
                1024: {},
                1280: {}}
            }
            >
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
            </Swiper>
            {/* Ícone de filtro */}
            <BotaoIcone icone={<IconAdjustmentsHorizontal aria-label="Ícone de usuário" size={20}></IconAdjustmentsHorizontal>}>Filtros</BotaoIcone>
        </div>
    )
}

export default NavegacaoAbasHorizontal