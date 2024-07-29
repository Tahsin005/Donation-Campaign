import { useEffect, useState } from "react";
import HomePageCard from "../HomePageCard/HomePageCard";

import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePageCards = ({ searchValue = null }) => {
  let [allCards, setAllCards] = useState([]);
  let [displayCards, setDisplayedCards] = useState([]);

  useEffect(() => {
    fetch("api.json")
      .then((response) => response.json())
      .then((data) => {
        setAllCards(data);
        setDisplayedCards(data);
      });
  }, []);

  useEffect(() => {
    if (searchValue) {
      const searchVal = searchValue.toLowerCase();
      let filteredCards = [];

      for (let i = 0; i < allCards.length; i++) {
        console.log(allCards[i].title.toLowerCase());
        if (allCards[i].title.toLowerCase().includes(searchVal.toLowerCase()) || allCards[i].category_name.toLowerCase().includes(searchVal.toLowerCase())) {
          filteredCards.push(allCards[i]);
        }
      }
      if (filteredCards.length > 0) {
        setDisplayedCards(filteredCards);
      } else {
        toast("No matching search found", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
        setDisplayedCards(allCards);
      }
    } else {
      setDisplayedCards(allCards);
    }
  }, [searchValue, allCards]);

  return (
    <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-12">
      {displayCards.map((card) => (
        <HomePageCard key={card.id} card={card} />
      ))}
      <Toaster
        toastOptions={{
          className: '',
          style: {
            padding: '16px',
            color: 'white',
            backgroundColor: 'red'
          },
        }}
      />
    </div>
  );
};

export default HomePageCards;
