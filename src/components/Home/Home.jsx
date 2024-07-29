import { useState } from "react";
import Hero from "../Hero/Hero";
import HomePageCards from "../HomePageCards/HomePageCards";

const Home = () => {
    const [searchValue, setValue] = useState(null);
    return (
        <div>
            <Hero setValue={setValue}></Hero>
            <HomePageCards searchValue={searchValue}></HomePageCards>
        </div>
      );
};

export default Home;