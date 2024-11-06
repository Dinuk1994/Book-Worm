"use client";
import Book1 from "../../assets/book1.jpg";
import Book2 from "../../assets/book2.jpg";
import Book3 from "../../assets/book3.jpg";
import Book4 from "../../assets/book4.jpg";
import Book5 from "../../assets/book5.jpg";

import { Carousel } from "flowbite-react";

export function Banner() {
    return (
        <div className="border-4 border-blue-500 rounded-lg">
            <div className="w-[1300px] mobile:w-[380px] tablet:w-[750px] h-[480px] bg-base-300 mobile:h-64 sm:h-64 xl:h-80 2xl:h-96 rounded-md overflow-hidden">
                <Carousel pauseOnHover>
                    <img className="mobile:w-full mobile:h-full mobile:object-cover tablet:w-full tablet:h-full tablet:object-cover" src={Book1} alt="Book 1" />
                    <img className="mobile:w-full mobile:h-full mobile:object-cover tablet:w-full tablet:h-full tablet:object-cover" src={Book2} alt="Book 2" />
                    <img className="mobile:w-full mobile:h-full mobile:object-cover tablet:w-full tablet:h-full tablet:object-cover" src={Book3} alt="Book 3" />
                    <img className="mobile:w-full mobile:h-full mobile:object-cover tablet:w-full tablet:h-full tablet:object-cover" src={Book4} alt="Book 4" />
                    <img className="mobile:w-full mobile:h-full mobile:object-cover tablet:w-full tablet:h-full tablet:object-cover" src={Book5} alt="Book 5" />
                </Carousel>
            </div>
        </div>
    );
}
