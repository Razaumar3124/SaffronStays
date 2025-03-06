import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "@mui/material/Card";
import { Box, Avatar, CardContent, CardMedia, Typography } from "@mui/material";
import { FaBed } from "react-icons/fa";
import { LuLeaf } from "react-icons/lu";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import firegif from "../assets/HeroImg/fire.gif"
import meditationimg from "../assets/HeroImg/meditation.gif"
import { TiStarOutline } from "react-icons/ti";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/b3/ab/c0/tents-n-trails.jpg?w=1200&h=-1&s=1",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/da/91/bb/tents-n-trails.jpg?w=1200&h=-1&s=1",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/cd/ed/b7/caption.jpg?w=700&h=-1&s=1",
];

const icons = [
  { icon: <FaBed size={20} color="#1E3A5F" />, key: "bed" },
  { icon: <LuLeaf size={20} color="green" />, key: "leaf" },
];

const Cards = () => {
  const cardRef = useRef(null);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const element = cardRef.current;

    gsap.fromTo(
      element,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const handleCardClick = () => {
    setIsClicked(!isClicked); // Toggle scale on click
  };

  return (
    <Card
      ref={cardRef}
      onClick={handleCardClick}
      sx={{
        maxWidth: { xs: "90%", sm: 345, md: 340 },
        overflow: "hidden",
        borderRadius: 3,
        boxShadow: "5px 5px 15px rgba(0,0,0,0.2)",
        mx: "auto",
        transition: "transform 0.3s ease-out, box-shadow 0.3s ease-out",
        transform: isClicked ? "scale(1.1)" : "scale(1)", // Click effect (enlarges card)
        "&:hover": {
          transform: isClicked ? "scale(1.15)" : "scale(1.05)", // Hover grows more if clicked
          boxShadow: "15px 15px 30px rgba(0,0,0,0.3)",
          cursor: "pointer",
        },
      }}
    >
      <Box>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={10}
          slidesPerView={1}
          style={{
            "--swiper-pagination-color": "#ff9800",
            "--swiper-pagination-bullet-inactive-color": "#fff",
            "--swiper-pagination-bullet-inactive-opacity": "0.5",
            "--swiper-pagination-bullet-size": "10px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
          }}
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <CardMedia
                sx={{
                  height: { xs: 250, sm: 300, md: 340 },
                  objectFit: "cover",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
                image={img}
                title={`Camp view ${i + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Box
        height="30px"
        width="70px"
        display="flex"
        justifyContent="space-around"
        position="absolute"
        top="15px"
        left="15px"
        zIndex={2}
        >
          <img src={meditationimg} style={{ maxWidth: "100%", maxHeight: "100%", borderRadius: "50px"}} />
          <img src={firegif} style={{ maxWidth: "100%", maxHeight: "100%", borderRadius: "50px" }} />   
        </Box>
        <Box
        height="30px"
        width="110px"
        display="flex"
        justifyContent="space-around"
        position="absolute"
        top="15px"
        right="15px"
        bgcolor="white"
        borderRadius="50px"
        zIndex={2}
        >
          <Box 
          width="50%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRight="2px solid black"
          >
            <TiStarOutline style={{fontSize: "25px", color: "goldenrod"}}/>
            <span >4.5</span>
          </Box>
          <Box 
          width="50%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          >
            28<sup>°</sup>C
          </Box>
        </Box>
      </Box>
      <CardContent>
        <Typography variant="body2" sx={{ color: "grey", fontSize: { xs: "12px", sm: "14px" } }}>
          Borivali
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Typography gutterBottom variant="h6" sx={{ fontSize: { xs: "17px", sm: "18px" } }}>
            Whispering Woods Tents
          </Typography>
          <Box display="flex" gap={1}>
            {icons.map(({ icon, key }) => (
              <Avatar
                key={key}
                sx={{
                  width: { xs: 30, sm: 35 },
                  height: { xs: 30, sm: 35 },
                  border: "2px solid grey",
                  bgcolor: "white",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.2)",
                  },
                }}
              >
                {icon}
              </Avatar>
            ))}
          </Box>
        </Box>
        <Box display="flex" gap={1}>
          <Typography variant="body2" sx={{ color: "green", fontSize: { xs: "16px", sm: "18px" } }}>
            ₹6,000
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              fontSize: { xs: "14px", sm: "16px" },
              textDecorationLine: "line-through",
            }}
          >
            ₹6,000
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Cards;
