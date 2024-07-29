import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { getDonations } from '../../utilities/LocalStorage';

ChartJS.register(ArcElement, Tooltip, Legend);
const Statistics = () => {
    const donations = getDonations();
    console.log(donations.length);
    let data = null;
    if (donations.length == 0) {
        data = {
            labels: ['Your Donation', 'Total Donation'],
            datasets: [
                {
                    label: 'Values',
                    data: [0, 100], 
                    backgroundColor: ['#FF444A', '#00C49F'],
                    borderColor: ['#FF444A', '#00C49F'],
                    borderWidth: 1,
                },
            ],
        };
    } else {
        data = {
            labels: ['Your Donation', 'Total Donation'],
            datasets: [
                {
                    label: 'Values',
                    data: [(donations.length / 12) * 100, (100 - ((donations.length / 12) * 100))], 
                    backgroundColor: ['#FF444A', '#00C49F'],
                    borderColor: ['#FF444A', '#00C49F'],
                    borderWidth: 1,
                },
            ],
        };
    }
    

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        const label = context.label || '';
                        const value = context.raw;
                        const percentage = ((value / data.datasets[0].data.reduce((a, b) => a + b)) * 100).toFixed(2);
                        return `${label}: ${value} (${percentage}%)`;
                    },
                },
            },
        },
    };
    return (
        <div className='max-w-screen-xl mx-auto px-8 md:px-16 lg:px-2'>
            <div className='h-3/4 mx-auto mt-20'>
            <Pie className=' mx-auto' data={data} options={options} />
        </div>           
        </div>
    );
};

export default Statistics;