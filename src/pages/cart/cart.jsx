import Pic1 from './../../supports/assets/rewards-carousel-1_tcm121-77064.webp'
import Pic2 from './../../supports/assets/rewards-carousel-2_tcm121-77065.webp'
import Pic3 from './../../supports/assets/rewards-carousel-3_tcm121-77066.webp'
import Pic4 from './../../supports/assets/iced_drink.webp'
import Pic5 from './../../supports/assets/hot_drink.webp'

export default function Cart(){
    return(
        <div className="flex pt-20">
            <div className="basis-3/5 pt-10 flex-col items-center">
                <h1 className=" my-fs-30 font-bold sticky">
                    Order List
                </h1>
            </div>
            <div>
                halo
            </div>
            <div className="basis-2/5 border-l h-fit">
                <div className="sticky h-screen bottom-0 flex justify-center items-center">
                    <div className='fixed'>
                        <h1 className="my-fs-30 font-bold sticky">
                            Order Summary
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}