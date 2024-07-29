import { useEffect, useMemo, useState } from "react";
import { getDonations } from "../../utilities/LocalStorage";
import Donation from "../Donation/Donation";

const Donations = () => {
    const [allCards, setAllCards] = useState([]);
    const [donationsList, setDonationsList] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("api.json");
                const data = await response.json();
                setAllCards(data);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        };

        fetchData();
    }, []);

    const donations = useMemo(() => {
        const donationIds = getDonations();
        return allCards.filter(card => donationIds.includes(card.id));
    }, [allCards]);

    useEffect(() => {
        setDonationsList(donations);
    }, [donations]);

  
    return (
        <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 my-12 ">
            <div className="grid md:grid-cols-2 gap-4">
                {
                    donationsList && (
                        donationsList.slice(0, dataLength).map(card => (
                            <Donation key={card.id} card={card}></Donation>
                        ))
                    )
                }    
            </div>       
            {
                donationsList && (
                    <div className="flex items-center justify-center my-12">
                        <button onClick={() => setDataLength(donationsList.length)} className="bg-red-500 text-white p-3 rounded-lg">Show More</button>
                    </div>
                )
            }   
        </div>
    );
};

export default Donations;

{/* <div className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.slice(0, dataLength).map((job) => (
            <Job key={job.id} job={job}></Job>
          ))}
        </div>
        <div className="flex items-center justify-center mt-12">
          <div className={dataLength === jobs.length ? "hidden" : ""}>
            <button
              onClick={() => setDataLength(jobs.length)}
              className="btn text-white bg-gradient-to-r from-indigo-500 to-blue-400"
            >
              Show All Jobs
            </button>
          </div>
        </div>
      </div> */}