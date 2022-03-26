
function FooterCard({ _speed, _pressure, _humidity}) {
    
    return (
        <ul className="grid grid-cols-2 gap-2 mt-8  mx-4">
            <li className="container p-4 flex items-center justify-center my-4 mx-8 bg-gray-200 rounded-lg mr-1">
                <div className="my-auto text-center">
                    <p className="font-bold text-3xl text-red-600 mb-2">Speed</p>
                    <p className="font-bold text-3xl text-red-600 mb-2">
                        {_speed} km/sa
                    </p>
                </div>
            </li>
            <li className="container p-4 flex items-center justify-center mx-12 bg-gray-200 rounded-lg my-auto mr-1">
                <div className="my-auto text-center">
                    <p className="font-bold text-3xl text-red-600 mb-2">pressure</p>
                    <p className="font-bold text-3xl text-red-600 mb-2">
                        {_pressure} &#13169; 
                    </p>
                </div>
            </li>
            <li className="container p-4 flex items-center justify-center mx-8 bg-gray-200 rounded-lg my-auto mr-1">
                <div className="my-auto text-center ">
                    <p className="font-bold text-3xl text-red-600 mb-2">
                        Humidity       
                    </p>
                    <p className="font-bold text-3xl text-red-600 mb-2">
                        &#37;{_humidity}     
                    </p>
                    
                
                </div>
            </li>
        </ul>
        

    )
}

export default FooterCard