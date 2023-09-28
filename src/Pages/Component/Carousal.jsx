import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'




// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import CarousalCard from './CarousalCard';
export default function Carousal() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={{
                    nextEl: null, // Hide the right arrow
                    prevEl: null, // Hide the left arrow
                }}

                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                onSlideClick={(swiper) => {
                    // When a slide is clicked, stop the autoplay
                    swiper.autoplay.stop();
                }}
            >
                <SwiperSlide className='p-5'> <CarousalCard title="Serie A" group="Regular Season-6" teamName1='Frosinone' teamName2='Fiorentina' teamPhoto1='https://upload.wikimedia.org/wikipedia/commons/d/d6/Foolad_%28www_gravitysport_ir%29-800x800_%281%29.png' teamPhoto2='https://upload.wikimedia.org/wikipedia/commons/d/d6/Foolad_%28www_gravitysport_ir%29-800x800_%281%29.png' date="29-sep-23" time='11:30 AM' /></SwiperSlide> 
                
                <SwiperSlide className='p-5'> <CarousalCard title="Serie A" group="Regular Season-6" teamName1='Frosinone' teamName2='Fiorentina' teamPhoto1='https://upload.wikimedia.org/wikipedia/commons/d/d6/Foolad_%28www_gravitysport_ir%29-800x800_%281%29.png' teamPhoto2='https://upload.wikimedia.org/wikipedia/commons/d/d6/Foolad_%28www_gravitysport_ir%29-800x800_%281%29.png' date="29-sep-23" time='11:30 AM' /></SwiperSlide> 

                <SwiperSlide className='p-5'> <CarousalCard title="Serie A" group="Regular Season-6" teamName1='Frosinone' teamName2='Fiorentina' teamPhoto1='https://upload.wikimedia.org/wikipedia/commons/d/d6/Foolad_%28www_gravitysport_ir%29-800x800_%281%29.png' teamPhoto2='https://upload.wikimedia.org/wikipedia/commons/d/d6/Foolad_%28www_gravitysport_ir%29-800x800_%281%29.png' date="29-sep-23" time='11:30 AM' /></SwiperSlide> 

                <SwiperSlide className='p-5'> <CarousalCard title="Serie A" group="Regular Season-6" teamName1='Frosinone' teamName2='Fiorentina' teamPhoto1='https://upload.wikimedia.org/wikipedia/commons/d/d6/Foolad_%28www_gravitysport_ir%29-800x800_%281%29.png' teamPhoto2='https://upload.wikimedia.org/wikipedia/commons/d/d6/Foolad_%28www_gravitysport_ir%29-800x800_%281%29.png' date="29-sep-23" time='11:30 AM' /></SwiperSlide> 

                <SwiperSlide className='p-5'> <CarousalCard title="Serie A" group="Regular Season-6" teamName1='Frosinone' teamName2='Fiorentina' teamPhoto1='https://upload.wikimedia.org/wikipedia/commons/d/d6/Foolad_%28www_gravitysport_ir%29-800x800_%281%29.png' teamPhoto2='https://upload.wikimedia.org/wikipedia/commons/d/d6/Foolad_%28www_gravitysport_ir%29-800x800_%281%29.png' date="29-sep-23" time='11:30 AM' /></SwiperSlide> 

                <SwiperSlide className='p-5'> <CarousalCard title="Serie A" group="Regular Season-6" teamName1='Frosinone' teamName2='Fiorentina' teamPhoto1='https://upload.wikimedia.org/wikipedia/commons/d/d6/Foolad_%28www_gravitysport_ir%29-800x800_%281%29.png' teamPhoto2='https://upload.wikimedia.org/wikipedia/commons/d/d6/Foolad_%28www_gravitysport_ir%29-800x800_%281%29.png' date="29-sep-23" time='11:30 AM' /></SwiperSlide>

                <SwiperSlide className='p-5'> <CarousalCard title="Serie A" group="Regular Season-6" teamName1='Frosinone' teamName2='Fiorentina' teamPhoto1='https://upload.wikimedia.org/wikipedia/commons/d/d6/Foolad_%28www_gravitysport_ir%29-800x800_%281%29.png' teamPhoto2='https://upload.wikimedia.org/wikipedia/commons/d/d6/Foolad_%28www_gravitysport_ir%29-800x800_%281%29.png' date="29-sep-23" time='11:30 AM' /></SwiperSlide> 
            </Swiper>
        </>
    );
}