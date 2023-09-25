import weather_m from '../icons/weather_m.png'

function MenuBar() {
    return (
        <div className="absolute inset-y-0 left-2 w-16 rounded">
            <div className="bg-gray-100 rounded-lg p-2 h-full">
            <ul className='mt-4'>   
                <li>
                    <img src={weather_m}/>
                </li>
            </ul>
            </div>
        </div>
    );
}

export default MenuBar