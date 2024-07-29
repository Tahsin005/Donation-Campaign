
const HomePageCard = ({card}) => {
    const {id, title, category_name, imgLink, accentColor, mainColor, btnBg, description, price} = card;
    return (
        <div className="">
            <div className="h-full flex flex-col items-start justify-items-start border-gray-200 rounded-lg shadow"  style={{ backgroundColor: accentColor }}>
                
                <img src={imgLink} alt="" className="rounded-t-lg object-cover w-full"/>
                <div className="p-5">
                    <button className="inline-flex items-center px-3 py-2 mb-2 text-sm font-medium text-center focus:ring-4 focus:outline-none rounded-lg" style={{ color: mainColor, backgroundColor: btnBg}}>
                        {category_name}
                    
                    </button>
                    <h5 className={`mb-2 text-xl font-bold tracking-tight flex-grow`} style={{ color: mainColor }}>
                        {title}
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default HomePageCard;