import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
import styled from "styled-components";

  export default function Home() {
  return (
      <>
      <Hero>
        <Banner title="luxurious rooms" subtitle=
        "deluxe rooms starting at $500">
         
         <Link to="/" className="btn-primary"> 
            Return HomePage
          </Link>
          
        </Banner>
      
      </Hero>
     <Services />
     
     
     </>
  );
}

