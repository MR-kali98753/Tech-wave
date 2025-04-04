"use client";

import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import Image from 'next/image';

const Header = () => {
  const [data, setData] = useState<any[]>([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:1337/api/banners?populate=*");
        console.log("API Response:", response.data); 

        if (response.data?.data) {
          setData(response.data.data);
        } else {
          console.error("Unexpected API structure", response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="header">
      <div className="overflow-hidden max-h-[575px] container mx-auto xl:max-w-[1180px]">
        <Slider {...settings}>
          {data.length > 0 ? (
            data.map((item: any, index: number) => {
              
              const imageUrl = item?.image?.formats?.large?.url
                ? `http://localhost:1337${item.image.formats.large.url}`
                : item?.image?.url
                ? `http://localhost:1337${item.image.url}`
                : null;

              if (!imageUrl) {
                console.warn(`No image found for banner ${index}`, item);
                return (
                  <div key={index} className="w-full h-[500px] flex items-center justify-center bg-gray-700 text-gray-300">
                    No Image Available
                  </div>
                );
              }

              return (
                <div key={index} className="w-full h-[500px]">
                  <Image
                    src={imageUrl}
                    alt={`Banner ${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            })
          ) : (
            <p className="text-white text-center">Loading...</p>
          )}
        </Slider>
      </div>
    </div>
  );
};

export default Header;
