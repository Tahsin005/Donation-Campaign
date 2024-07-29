import { useLocation, useParams } from "react-router-dom";

const DonationDetails = () => {
    const params = useParams();
    const {state} = useLocation()
    const {id, title, category_name, imgLink, accentColor, mainColor, btnBg, description, price} = state;
    

    return (
        <>
            <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 my-12">
                <div className="relative">
                    <div>
                        <img src={imgLink} alt="" className="w-full h-3/4 mx-auto rounded-md"/>
                    </div>
                    <div className="absolute bottom-10 left-5">
                        <button className="bg-red-500 p-4 text-white rounded-lg">Donate ${price}</button>
                    </div>
                </div>
            </div>
            <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 my-12">
                <h1 className="mb-4 font-bold text-2xl">{title}</h1>
                <p>{description}</p>
            </div>
        </>
    );
};

export default DonationDetails;