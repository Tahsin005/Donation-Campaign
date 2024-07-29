import { useEffect, useState } from "react";
import HomePageCard from "../HomePageCard/HomePageCard";

const HomePageCards = () => {
    const [allCards, setAllCards] = useState([]);
    const [displayCards, setDisplayedCards] = useState([]);

    useEffect(() => {
        fetch('api.json')
        .then(response => response.json())
        .then(data => {
            setAllCards(data);
            setDisplayedCards(data);
        })
    }, [])
    return (
        <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-12">
            {
                displayCards.map((card) => (
                    <HomePageCard key={card.id} card={card}></HomePageCard>
                ))
            }
        </div>
    );
};

export default HomePageCards;