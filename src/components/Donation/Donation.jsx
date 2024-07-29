import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const Donation = ({card}) => {
    const {id, title, category_name, imgLink, accentColor, mainColor, btnBg, price} = card;
    
    return (
        <div className="">
            <div className="card lg:card-side bg-base-100 shadow-xl w-full h-full" style={{ backgroundColor: accentColor }}>
                <figure>
                    <img
                    src={imgLink}
                    alt="Donation" className="w-full h-full" />
                </figure>
                <div className="card-body">
                    <button className="inline-flex items-center px-3 py-2 mb-2 text-sm font-medium text-center focus:ring-4 focus:outline-none rounded-lg" style={{ color: mainColor, backgroundColor: btnBg}}>
                            {category_name}
                    </button>
                    <h5 className={`mb-2 text-xl font-bold tracking-tight flex-grow`} style={{ color: mainColor }}>{title}</h5>
                    <p style={{ color: mainColor }}>${price}</p>
                    <div className="card-actions justify-end">
                    <Link to={`/details/${id}`} state={card} className="btn" style={{ color: mainColor, backgroundColor: btnBg}}>View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

Donation.propTypes = {
    card: PropTypes.object
}
export default Donation;