import React, { useRef } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import { Skeleton } from "../ui/Skeleton";

const categories = [
  {
    id: "750591",
    imageId:
      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png",
    action: {
      link: "https://www.swiggy.com/collections/83639?collection_id=83639&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2",
      text: "Biryani",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurants curated for biryani",
      altTextCta: "open",
    },
    entityId:
      "swiggy://collectionV2?collection_id=83639&tags=layout_CCS_Biryani&search_context=biryani",
    frequencyCapping: {},
    externalMarketing: {},
  },
  {
    id: "750589",
    imageId:
      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_burger.png",
    action: {
      link: "https://www.swiggy.com/collections/83637?collection_id=83637&search_context=burger&tags=layout_CCS_Burger&type=rcv2",
      text: "Burgers",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurants curated for burger",
      altTextCta: "open",
    },
    entityId:
      "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger&search_context=burger",
    frequencyCapping: {},
    externalMarketing: {},
  },
  {
    id: "750222",
    imageId:
      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/17/58760e8e-324f-479e-88fa-31800120ea38_Rolls1.png",
    action: {
      link: "https://www.swiggy.com/collections/83669?collection_id=83669&tags=layout_CCS_Rolls&type=rcv2",
      text: "Rolls",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurants curated for roll",
      altTextCta: "open",
    },
    entityId: "swiggy://collectionV2?collection_id=83669&tags=layout_CCS_Rolls",
    frequencyCapping: {},
    externalMarketing: {},
  },
  {
    id: "750201",
    imageId:
      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Paratha.png",
    action: {
      link: "https://www.swiggy.com/collections/80475?collection_id=80475&tags=layout_CCS_Paratha&type=rcv2",
      text: "Paratha",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurants curated for paratha",
      altTextCta: "open",
    },
    entityId:
      "swiggy://collectionV2?collection_id=80475&tags=layout_CCS_Paratha",
    frequencyCapping: {},
    externalMarketing: {},
  },
  {
    id: "750586",
    imageId:
      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Gulab jamun.png",
    action: {
      link: "https://www.swiggy.com/collections/80430?collection_id=80430&tags=layout_BAU_Contextual%2Cgulab_jamun&type=rcv2",
      text: "Gulab Jamun",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurant curated for gulab jamun",
      altTextCta: "open",
    },
    entityId: "80430",
    frequencyCapping: {},
    externalMarketing: {},
  },
  {
    id: "749768",
    imageId:
      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Momos.png",
    action: {
      link: "https://www.swiggy.com/collections/80461?collection_id=80461&tags=layout_CCS_Momos&type=rcv2",
      text: "Momos",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurant curated for momos",
      altTextCta: "open",
    },
    entityId: "swiggy://collectionV2?collection_id=80461&tags=layout_CCS_Momos",
    frequencyCapping: {},
    externalMarketing: {},
  },
  {
    id: "750591",
    imageId:
      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png",
    action: {
      link: "https://www.swiggy.com/collections/83639?collection_id=83639&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2",
      text: "Biryani",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurants curated for biryani",
      altTextCta: "open",
    },
    entityId:
      "swiggy://collectionV2?collection_id=83639&tags=layout_CCS_Biryani&search_context=biryani",
    frequencyCapping: {},
    externalMarketing: {},
  },
  {
    id: "749772",
    imageId:
      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Noodles.png",
    action: {
      link: "https://www.swiggy.com/collections/80463?collection_id=80463&tags=layout_BAU_Contextual%2Cnoodles&type=rcv2",
      text: "Noodles",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurant curated for noodles",
      altTextCta: "open",
    },
    entityId: "80463",
    frequencyCapping: {},
    externalMarketing: {},
  },
  {
    id: "750216",
    imageId:
      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pav Bhaji.png",
    action: {
      link: "https://www.swiggy.com/collections/80362?collection_id=80362&tags=layout_PavBhaji_Contextual&type=rcv2",
      text: "Pav Bhaji",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurant curated for pav bhaji",
      altTextCta: "open",
    },
    entityId:
      "swiggy://collectionV2?collection_id=80362&tags=layout_PavBhaji_Contextual",
    frequencyCapping: {},
    externalMarketing: {},
  },
  {
    id: "750208",
    imageId:
      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_pastry.png",
    action: {
      link: "https://www.swiggy.com/collections/80355?collection_id=80355&tags=layout_CCS_Pastry&type=rcv2",
      text: "Pastry",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurant curated for Pastry",
      altTextCta: "open",
    },
    entityId:
      "swiggy://collectionV2?collection_id=80355&tags=layout_CCS_Pastry",
    frequencyCapping: {},
    externalMarketing: {},
  },
  {
    id: "749984",
    imageId:
      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_coffee.png",
    action: {
      link: "https://www.swiggy.com/collections/83659?collection_id=83659&tags=layout_CCS_Coffee&type=rcv2",
      text: "Coffee",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurants curated for coffee",
      altTextCta: "open",
    },
    entityId:
      "swiggy://collectionV2?collection_id=83659&tags=layout_CCS_Coffee",
    frequencyCapping: {},
    externalMarketing: {},
  },
  {
    id: "750252",
    imageId:
      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/cb5669c8-d6f1-46ab-b24d-3da99b9fa32c_tea.png",
    action: {
      link: "https://www.swiggy.com/collections/80406?collection_id=80406&tags=layout_CCS_Tea&type=rcv2",
      text: "Tea",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurants curated for tea",
      altTextCta: "open",
    },
    entityId: "swiggy://collectionV2?collection_id=80406&tags=layout_CCS_Tea",
    frequencyCapping: {},
    externalMarketing: {},
  },
  {
    id: "750581",
    imageId:
      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_North Indian.png",
    action: {
      link: "https://www.swiggy.com/collections/83633?collection_id=83633&search_context=northindian&tags=layout_CCS_NorthIndian&type=rcv2",
      text: "North Indian",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurants curated for north indian",
      altTextCta: "open",
    },
    entityId:
      "swiggy://collectionV2?collection_id=83633&tags=layout_CCS_NorthIndian&search_context=northindian",
    frequencyCapping: {},
    externalMarketing: {},
  },
  {
    id: "750587",
    imageId:
      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Chinese.png",
    action: {
      link: "https://www.swiggy.com/collections/83636?collection_id=83636&tags=layout_CCS_Chinese&type=rcv2",
      text: "Chinese",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurant curated for chinese",
      altTextCta: "open",
    },
    entityId:
      "swiggy://collectionV2?collection_id=83636&tags=layout_CCS_Chinese",
    frequencyCapping: {},
    externalMarketing: {},
  },
  {
    id: "749876",
    imageId:
      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_chole bhature.png",
    action: {
      link: "https://www.swiggy.com/collections/80382?collection_id=80382&tags=layout_CCS_CholeBhature&type=rcv2",
      text: "Chole Bhature",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurant curated for chhole bhatoore",
      altTextCta: "open",
    },
    entityId:
      "swiggy://collectionV2?collection_id=80382&tags=layout_CCS_CholeBhature",
    frequencyCapping: {},
    externalMarketing: {},
  },
  {
    id: "750206",
    imageId:
      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_pasta.png",
    action: {
      link: "https://www.swiggy.com/collections/80479?collection_id=80479&search_context=pasta&tags=layout_CCS_Pasta&type=rcv2",
      text: "Pasta",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurant curated for pasta",
      altTextCta: "open",
    },
    entityId:
      "swiggy://collectionV2?collection_id=80479&tags=layout_CCS_Pasta&search_context=pasta",
    frequencyCapping: {},
    externalMarketing: {},
  },
  {
    id: "750131",
    imageId:
      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Dosa.png",
    action: {
      link: "https://www.swiggy.com/collections/80424?collection_id=80424&tags=layout_CCS_Dosa&type=rcv2",
      text: "Dosa",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurants curated for dosa",
      altTextCta: "open",
    },
    entityId: "swiggy://collectionV2?collection_id=80424&tags=layout_CCS_Dosa",
    frequencyCapping: {},
    externalMarketing: {},
  },
  {
    id: "750571",
    imageId:
      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pure Veg.png",
    action: {
      link: "https://www.swiggy.com/collections/80435?collection_id=80435&tags=layout_CCS_PureVeg&type=rcv2",
      text: "Pure Veg",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurants curated for veg",
      altTextCta: "open",
    },
    entityId:
      "swiggy://collectionV2?collection_id=80435&tags=layout_CCS_PureVeg",
    frequencyCapping: {},
    externalMarketing: {},
  },
  {
    id: "749762",
    imageId:
      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/3f2c40d3-96c7-44ce-8b35-aef6ea746cdc_lassi.png",
    action: {
      link: "https://www.swiggy.com/collections/80458?collection_id=80458&tags=layout_BAU_Contextual%2Classi&type=rcv2",
      text: "Lassi",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurant curated for lassi",
      altTextCta: "open",
    },
    entityId: "80458",
    frequencyCapping: {},
    externalMarketing: {},
  },
  {
    id: "749760",
    imageId:
      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Khichdi.png",
    action: {
      link: "https://www.swiggy.com/collections/80455?collection_id=80455&tags=layout_BAU_Contextual%2Ckhichdi&type=rcv2",
      text: "Khichdi",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurants curated for khichdi",
      altTextCta: "open",
    },
    entityId: "80455",
    frequencyCapping: {},
    externalMarketing: {},
  },
];

const CategorySlider = ({ style, slider, data }) => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  console.log("custom logger [slider]", slider);
  return (
    <div className="relative w-full">
      {slider?.length ? (
        <>
          <div className="text-2xl font-bold px-5 my-5">
            {data?.header?.title}
          </div>
          <div className="flex items-center justify-end px-4 mb-3">
            <div className="flex gap-2">
              <button onClick={() => scroll("left")}>
                <SlArrowLeft />
              </button>
              <button onClick={() => scroll("right")}>
                <SlArrowRight />
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start mb-10 mt-4 relative no-scrollbar">
            <div
              ref={scrollRef}
              className="slides-container flex gap-4 overflow-x-auto px-4 scrollbar-hide no-scrollbar slides-container overflow-hidden space-x-2 rounded scroll-smooth"
            >
              {slider?.map((data, index) => (
                <Link
                  key={data.id}
                  target="__blank"
                  to={data?.action?.link}
                  className={`slide flex-shrink-0 duration-500 snap-center rounded  `}
                >
                  <img
                    className={`${style} object-cover`}
                    src={`${IMG_CDN_URL}/${data.imageId}`}
                    alt="mountain_image"
                  />
                </Link>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="flex px-4 flex-col gap-20">
          <Skeleton className="bg-slate-200 h-7 w-48" />
          <div className="flex gap-5">
            {Array.from({ length: 8 }).map((_, key) => (
              <Skeleton key={key} className="bg-slate-200 h-36 w-36" />
            ))}
          </div>
        </div>
      )}
      {/* <div className="flex px-4 flex-col gap-20">
        <Skeleton className="bg-slate-200 h-7 w-48" />
        <div className="flex  gap-5">
          {Array.from({ length: 8 }).map((_, key) => (
            <Skeleton key={key} className="bg-slate-200 h-36 w-36" />
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default CategorySlider;

// import React, {  useState, useEffect } from 'react';
// import { IMG_CDN_URL } from '../config';
// import { Link } from 'react-router-dom';
// import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
// const slider = [
//   {
//     id: '750579',
//     imageId:
//       'MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png',
//     action: {
//       link: 'https://www.swiggy.com/collections/83631?collection_id=83631&search_context=pizza&tags=layout_CCS_Pizza&type=rcv2',
//       text: 'Pizzas',
//       type: 'WEBLINK',
//     },
//     entityType: 'BANNER',
//     accessibility: {
//       altText: 'restaurants curated for pizza',
//       altTextCta: 'open',
//     },
//     entityId:
//       'swiggy://collectionV2?collection_id=83631&tags=layout_CCS_Pizza&search_context=pizza',
//     frequencyCapping: {},
//     externalMarketing: {},
//   },
//   {
//     id: '750589',
//     imageId:
//       'MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_burger.png',
//     action: {
//       link: 'https://www.swiggy.com/collections/83637?collection_id=83637&search_context=burger&tags=layout_CCS_Burger&type=rcv2',
//       text: 'Burgers',
//       type: 'WEBLINK',
//     },
//     entityType: 'BANNER',
//     accessibility: {
//       altText: 'restaurants curated for burger',
//       altTextCta: 'open',
//     },
//     entityId:
//       'swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger&search_context=burger',
//     frequencyCapping: {},
//     externalMarketing: {},
//   },
//   {
//     id: '750222',
//     imageId:
//       'MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/17/58760e8e-324f-479e-88fa-31800120ea38_Rolls1.png',
//     action: {
//       link: 'https://www.swiggy.com/collections/83669?collection_id=83669&tags=layout_CCS_Rolls&type=rcv2',
//       text: 'Rolls',
//       type: 'WEBLINK',
//     },
//     entityType: 'BANNER',
//     accessibility: {
//       altText: 'restaurants curated for roll',
//       altTextCta: 'open',
//     },
//     entityId: 'swiggy://collectionV2?collection_id=83669&tags=layout_CCS_Rolls',
//     frequencyCapping: {},
//     externalMarketing: {},
//   },
//   {
//     id: '750201',
//     imageId:
//       'MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Paratha.png',
//     action: {
//       link: 'https://www.swiggy.com/collections/80475?collection_id=80475&tags=layout_CCS_Paratha&type=rcv2',
//       text: 'Paratha',
//       type: 'WEBLINK',
//     },
//     entityType: 'BANNER',
//     accessibility: {
//       altText: 'restaurants curated for paratha',
//       altTextCta: 'open',
//     },
//     entityId:
//       'swiggy://collectionV2?collection_id=80475&tags=layout_CCS_Paratha',
//     frequencyCapping: {},
//     externalMarketing: {},
//   },
//   {
//     id: '750586',
//     imageId:
//       'MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Gulab jamun.png',
//     action: {
//       link: 'https://www.swiggy.com/collections/80430?collection_id=80430&tags=layout_BAU_Contextual%2Cgulab_jamun&type=rcv2',
//       text: 'Gulab Jamun',
//       type: 'WEBLINK',
//     },
//     entityType: 'BANNER',
//     accessibility: {
//       altText: 'restaurant curated for gulab jamun',
//       altTextCta: 'open',
//     },
//     entityId: '80430',
//     frequencyCapping: {},
//     externalMarketing: {},
//   },
//   {
//     id: '749768',
//     imageId:
//       'MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Momos.png',
//     action: {
//       link: 'https://www.swiggy.com/collections/80461?collection_id=80461&tags=layout_CCS_Momos&type=rcv2',
//       text: 'Momos',
//       type: 'WEBLINK',
//     },
//     entityType: 'BANNER',
//     accessibility: {
//       altText: 'restaurant curated for momos',
//       altTextCta: 'open',
//     },
//     entityId: 'swiggy://collectionV2?collection_id=80461&tags=layout_CCS_Momos',
//     frequencyCapping: {},
//     externalMarketing: {},
//   },
//   {
//     id: '750591',
//     imageId:
//       'MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png',
//     action: {
//       link: 'https://www.swiggy.com/collections/83639?collection_id=83639&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2',
//       text: 'Biryani',
//       type: 'WEBLINK',
//     },
//     entityType: 'BANNER',
//     accessibility: {
//       altText: 'restaurants curated for biryani',
//       altTextCta: 'open',
//     },
//     entityId:
//       'swiggy://collectionV2?collection_id=83639&tags=layout_CCS_Biryani&search_context=biryani',
//     frequencyCapping: {},
//     externalMarketing: {},
//   },
//   {
//     id: '749772',
//     imageId:
//       'MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Noodles.png',
//     action: {
//       link: 'https://www.swiggy.com/collections/80463?collection_id=80463&tags=layout_BAU_Contextual%2Cnoodles&type=rcv2',
//       text: 'Noodles',
//       type: 'WEBLINK',
//     },
//     entityType: 'BANNER',
//     accessibility: {
//       altText: 'restaurant curated for noodles',
//       altTextCta: 'open',
//     },
//     entityId: '80463',
//     frequencyCapping: {},
//     externalMarketing: {},
//   },
//   {
//     id: '750216',
//     imageId:
//       'MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pav Bhaji.png',
//     action: {
//       link: 'https://www.swiggy.com/collections/80362?collection_id=80362&tags=layout_PavBhaji_Contextual&type=rcv2',
//       text: 'Pav Bhaji',
//       type: 'WEBLINK',
//     },
//     entityType: 'BANNER',
//     accessibility: {
//       altText: 'restaurant curated for pav bhaji',
//       altTextCta: 'open',
//     },
//     entityId:
//       'swiggy://collectionV2?collection_id=80362&tags=layout_PavBhaji_Contextual',
//     frequencyCapping: {},
//     externalMarketing: {},
//   },
//   {
//     id: '750208',
//     imageId:
//       'MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_pastry.png',
//     action: {
//       link: 'https://www.swiggy.com/collections/80355?collection_id=80355&tags=layout_CCS_Pastry&type=rcv2',
//       text: 'Pastry',
//       type: 'WEBLINK',
//     },
//     entityType: 'BANNER',
//     accessibility: {
//       altText: 'restaurant curated for Pastry',
//       altTextCta: 'open',
//     },
//     entityId:
//       'swiggy://collectionV2?collection_id=80355&tags=layout_CCS_Pastry',
//     frequencyCapping: {},
//     externalMarketing: {},
//   },
//   {
//     id: '749984',
//     imageId:
//       'MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_coffee.png',
//     action: {
//       link: 'https://www.swiggy.com/collections/83659?collection_id=83659&tags=layout_CCS_Coffee&type=rcv2',
//       text: 'Coffee',
//       type: 'WEBLINK',
//     },
//     entityType: 'BANNER',
//     accessibility: {
//       altText: 'restaurants curated for coffee',
//       altTextCta: 'open',
//     },
//     entityId:
//       'swiggy://collectionV2?collection_id=83659&tags=layout_CCS_Coffee',
//     frequencyCapping: {},
//     externalMarketing: {},
//   },
//   {
//     id: '750252',
//     imageId:
//       'MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/cb5669c8-d6f1-46ab-b24d-3da99b9fa32c_tea.png',
//     action: {
//       link: 'https://www.swiggy.com/collections/80406?collection_id=80406&tags=layout_CCS_Tea&type=rcv2',
//       text: 'Tea',
//       type: 'WEBLINK',
//     },
//     entityType: 'BANNER',
//     accessibility: {
//       altText: 'restaurants curated for tea',
//       altTextCta: 'open',
//     },
//     entityId: 'swiggy://collectionV2?collection_id=80406&tags=layout_CCS_Tea',
//     frequencyCapping: {},
//     externalMarketing: {},
//   },
//   {
//     id: '750581',
//     imageId:
//       'MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_North Indian.png',
//     action: {
//       link: 'https://www.swiggy.com/collections/83633?collection_id=83633&search_context=northindian&tags=layout_CCS_NorthIndian&type=rcv2',
//       text: 'North Indian',
//       type: 'WEBLINK',
//     },
//     entityType: 'BANNER',
//     accessibility: {
//       altText: 'restaurants curated for north indian',
//       altTextCta: 'open',
//     },
//     entityId:
//       'swiggy://collectionV2?collection_id=83633&tags=layout_CCS_NorthIndian&search_context=northindian',
//     frequencyCapping: {},
//     externalMarketing: {},
//   },
//   {
//     id: '750587',
//     imageId:
//       'MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Chinese.png',
//     action: {
//       link: 'https://www.swiggy.com/collections/83636?collection_id=83636&tags=layout_CCS_Chinese&type=rcv2',
//       text: 'Chinese',
//       type: 'WEBLINK',
//     },
//     entityType: 'BANNER',
//     accessibility: {
//       altText: 'restaurant curated for chinese',
//       altTextCta: 'open',
//     },
//     entityId:
//       'swiggy://collectionV2?collection_id=83636&tags=layout_CCS_Chinese',
//     frequencyCapping: {},
//     externalMarketing: {},
//   },
//   {
//     id: '749876',
//     imageId:
//       'MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_chole bhature.png',
//     action: {
//       link: 'https://www.swiggy.com/collections/80382?collection_id=80382&tags=layout_CCS_CholeBhature&type=rcv2',
//       text: 'Chole Bhature',
//       type: 'WEBLINK',
//     },
//     entityType: 'BANNER',
//     accessibility: {
//       altText: 'restaurant curated for chhole bhatoore',
//       altTextCta: 'open',
//     },
//     entityId:
//       'swiggy://collectionV2?collection_id=80382&tags=layout_CCS_CholeBhature',
//     frequencyCapping: {},
//     externalMarketing: {},
//   },
//   {
//     id: '750206',
//     imageId:
//       'MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_pasta.png',
//     action: {
//       link: 'https://www.swiggy.com/collections/80479?collection_id=80479&search_context=pasta&tags=layout_CCS_Pasta&type=rcv2',
//       text: 'Pasta',
//       type: 'WEBLINK',
//     },
//     entityType: 'BANNER',
//     accessibility: {
//       altText: 'restaurant curated for pasta',
//       altTextCta: 'open',
//     },
//     entityId:
//       'swiggy://collectionV2?collection_id=80479&tags=layout_CCS_Pasta&search_context=pasta',
//     frequencyCapping: {},
//     externalMarketing: {},
//   },
//   {
//     id: '750131',
//     imageId:
//       'MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Dosa.png',
//     action: {
//       link: 'https://www.swiggy.com/collections/80424?collection_id=80424&tags=layout_CCS_Dosa&type=rcv2',
//       text: 'Dosa',
//       type: 'WEBLINK',
//     },
//     entityType: 'BANNER',
//     accessibility: {
//       altText: 'restaurants curated for dosa',
//       altTextCta: 'open',
//     },
//     entityId: 'swiggy://collectionV2?collection_id=80424&tags=layout_CCS_Dosa',
//     frequencyCapping: {},
//     externalMarketing: {},
//   },
//   {
//     id: '750571',
//     imageId:
//       'MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pure Veg.png',
//     action: {
//       link: 'https://www.swiggy.com/collections/80435?collection_id=80435&tags=layout_CCS_PureVeg&type=rcv2',
//       text: 'Pure Veg',
//       type: 'WEBLINK',
//     },
//     entityType: 'BANNER',
//     accessibility: {
//       altText: 'restaurants curated for veg',
//       altTextCta: 'open',
//     },
//     entityId:
//       'swiggy://collectionV2?collection_id=80435&tags=layout_CCS_PureVeg',
//     frequencyCapping: {},
//     externalMarketing: {},
//   },
//   {
//     id: '749762',
//     imageId:
//       'MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/3f2c40d3-96c7-44ce-8b35-aef6ea746cdc_lassi.png',
//     action: {
//       link: 'https://www.swiggy.com/collections/80458?collection_id=80458&tags=layout_BAU_Contextual%2Classi&type=rcv2',
//       text: 'Lassi',
//       type: 'WEBLINK',
//     },
//     entityType: 'BANNER',
//     accessibility: {
//       altText: 'restaurant curated for lassi',
//       altTextCta: 'open',
//     },
//     entityId: '80458',
//     frequencyCapping: {},
//     externalMarketing: {},
//   },
//   {
//     id: '749760',
//     imageId:
//       'MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Khichdi.png',
//     action: {
//       link: 'https://www.swiggy.com/collections/80455?collection_id=80455&tags=layout_BAU_Contextual%2Ckhichdi&type=rcv2',
//       text: 'Khichdi',
//       type: 'WEBLINK',
//     },
//     entityType: 'BANNER',
//     accessibility: {
//       altText: 'restaurants curated for khichdi',
//       altTextCta: 'open',
//     },
//     entityId: '80455',
//     frequencyCapping: {},
//     externalMarketing: {},
//   },
// ];

// const Slider = ({ style }) => {
//   const [slide, setSlide] = useState(0);
//   const SLIDE_STEP = 2;
//   const MAX_SLIDE = Math.max(slider.length - SLIDE_STEP, 0);

//   const handleNextClick = () => {
//     setSlide((prevSlide) => Math.min(prevSlide + SLIDE_STEP, MAX_SLIDE));
//   };

//   const handlePrevClick = () => {
//     setSlide((prevSlide) => Math.max(prevSlide - SLIDE_STEP, 0));
//   };

//   return (
//     <>
//       <div className="flex items-end justify-end gap-4">
//         <div
//           onClick={handlePrevClick}
//           className="bg-gray-300 rounded-full py-3 px-3 cursor-pointer">
//           <SlArrowLeft size={20} className="" />
//         </div>
//         <div
//           onClick={handleNextClick}
//           className="bg-gray-300 rounded-full py-3 px-3 cursor-pointer">
//           <SlArrowRight size={20} className="" />
//         </div>
//       </div>
//       <div className="flex flex-col justify-center items-start mb-10 mt-4 relative ">
//         <div
//           // ref={slidesContainerRef}
//           className="slides-container flex overflow-hidden space-x-2 rounded scroll-smooth">
//           {slider?.map((data, index) => {
//             return (
//               <Link
//                 key={data.id}
//                 target="__blank"
//                 to={data?.action?.link}
//                 // ref={slideRef}
//                 style={{
//                   transform: `translate(-${slide * 100}%)`,
//                   // transform: `translate(-00%)`,
//                 }}
//                 className={`slide flex-shrink-0 duration-500 snap-center rounded  `}>
//                 <img
//                   className={`${style} object-cover`}
//                   src={`${IMG_CDN_URL}/${data.imageId}`}
//                   alt="mountain_image"
//                 />
//               </Link>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Slider;
