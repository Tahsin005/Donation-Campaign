const getDonations = () =>{
    const savedDonationsLS = localStorage.getItem('donations');
    if(savedDonationsLS){
        return JSON.parse(savedDonationsLS);
    }
    return [];
}


const addToDonations = id =>{
    const savedDonations = getDonations();
    const exists = savedDonations.find(donationId => donationId === id);
    if(!exists){
        savedDonations.push(id);
        localStorage.setItem('donations', JSON.stringify(savedDonations));
        return true;
    }
    return false;
}

export { getDonations, addToDonations}