
function MainCard({_weatherIcon, _weatherDescription, _region, _Temperature}) {
    

    return (
        <div className="container p-4 mx-12 flex items-center justify-center shadow-lg rounded-lg bg-white h-1/3 mb-auto">
            
            <div className="my-auto">
                <div className="flex">
                    <p className="flex-1 font-bold text-center text-7xl text-red-500 my-12  ml-8">
                        {_Temperature}&deg;C    
                        <div className="bg-local bg-center bg-green-300 rounded-b-lg ">
                            <p className="mt-2 text-center text-gray-600 text-xl font-bold uppercase tracking-widest">
                                {_weatherDescription}            
                            </p> 
                        </div>
                             
                    </p>
                    <img src={_weatherIcon} className="flex-1 w-24 inline ml-24 my-6" />
                </div>
                
                
                <div className="my-4 border-l-4 border-r-4 border-gray-400 p-2">
                    
                    <p className="text-gray-500 ml-2 font-semibold text-xl uppercase tracking-widest">{_region}</p>
                </div>
            </div>
            {/* alttaki bilgiler yukardakilerin altına gelecek yni alttaki div olmayacak */}
            <br/>

            
            
        </div>
    )
}



export default MainCard