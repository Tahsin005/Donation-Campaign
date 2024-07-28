
const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-center font-semibold text-8xl">Oops...</h1>            
            <button onClick={() => history.back()} className="mt-12 font-bold border-[1px] rounded-lg bg-[#FF444A] text-white p-4 text-xl">Go back</button>
        </div>
    );
};

export default ErrorPage;