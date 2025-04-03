"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const Blogs = () => {
  const [data, setData] = useState<any[]>([]);
  const [limit, setLimit] = useState<number>(3);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1337/api/blogs?populate=*&pagination[start]=0&pagination[limit]=${limit}`
        );
        console.log("API Response:", response.data); 
        setData(response.data.data || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchData();
  }, [limit]);

  const handleLimit = () => {
    setLimit(limit + 3)
  }

  return (
    <div className="container mx-auto xl:max-w-[1180px] text-white pb-[40px]">
      <h1 className="text-start text-[24px] font-bold">Latest Post</h1>
      <div className="mt-[20px] grid grid-cols-3 gap-[20px]">
        {data.length > 0 ? (
          data.map((item: any, index: number) => {
            
            const imageUrl = item?.image?.formats?.medium?.url 
              ? `http://localhost:1337${item.image.formats.medium.url}`
              : item?.image?.url
              ? `http://localhost:1337${item.image.url}`
              : null;

            return (
              <div key={index} className="cursor-pointer w-full border border-[#2f3241]">
                <div className="h-[240px] w-full overflow-hidden">
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt="Blog Image"
                      className="w-full h-full object-cover hover:scale-110 transition-all duration-300 ease-in-out"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center bg-gray-700 text-gray-300">
                      No Image Available
                    </div>
                  )}
                </div>
                <div className="pt-[15px] pl-[8px] pb-[5px]">
                  <h2 className="bg-[#4B6BFB]/[5%] inline-block text-[#4B6BFb] py-[2px] px-[4px] mb-[15px]">
                    {item?.category || "Uncategorized"}
                  </h2>
                  <p className="text-[24px] font-bold">{item?.title}</p>
                  <div className="flex items-center gap-[25px] pt-[10px] text-[#97989F]">
                    <div className="flex items-center gap-[10px]">
                        <div>
                            <img className="w-12 h-12 rounded-full object-cover" src={`http://localhost:1337${item?.avatar.url}`} alt="" />
                        </div>
                        <p>{item?.author}</p>
                    </div>
                    <div>
                        <p>{item?.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-gray-400 col-span-3 text-center">No blogs available.</p>
        )}
      </div>
      <div className="flex items-center justify-center pt-[40px]">
        <button onClick={handleLimit} className="h-[50px] w-[150px] border border-[#2f3241] text-[#97989F] hover:text-white">View All Post</button>
      </div>
    </div>
  );
};

export default Blogs;
