import { useLocation } from "react-router-dom";
import { addToDonations } from "../../utilities/LocalStorage";

import toast, { Toaster } from 'react-hot-toast';
import { Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

const DonationDetails = () => {
    const {state} = useLocation()
    const {id, title, imgLink, description, price} = state;
    
    const [successToastShown, setSuccessToastShown] = useState(false);
    const [alreadyDonatedToastShown, setAlreadyDonatedToastShown] = useState(false);

    const handleAddToDonation = () => {
        if (addToDonations(id)) {
            if (!successToastShown) {
                toast("Donation successful!", {
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
                setSuccessToastShown(true);
            }
        } else {
            if (!alreadyDonatedToastShown) {
                toast("Already Donated!", {
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
                setAlreadyDonatedToastShown(true);
            }
        }
    };


    return (
        <>
            <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 my-12">
                <div className="relative">
                    <div>
                        <img src={imgLink} alt="" className="w-full h-3/4 mx-auto rounded-md"/>
                    </div>
                    <div className="absolute bottom-10 left-5">
                        <button onClick={handleAddToDonation} className="bg-red-500 p-4 text-white rounded-lg">Donate ${price}</button>
                    </div>
                </div>
            </div>
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
            <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 my-12">
                <h1 className="mb-4 font-bold text-2xl">{title}</h1>
                <p>{description}</p>
            </div>
        </>
    );
};

export default DonationDetails;