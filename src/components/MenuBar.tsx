import wind_m from '../icons/wind_m.png'

function MenuBar() {
    return (
        <div className="basis-20 p-2">
            <div className="bg-slate-700 rounded-2xl p-2 h-full">
            <ul className='mt-4'>   
                <li className='bg-slate-600 p-0.5 rounded-2xl'>
                    <img src={wind_m}/>
                </li>
            </ul>
            </div>
        </div>
    );
}

export default MenuBar