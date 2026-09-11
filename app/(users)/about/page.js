import Image from "next/image"
import Car from '@/public/car.jpeg';

function page() {
    return (
        <div className="" style={{ width: "500px", height: "500px" }} >This is About Page
            <Image src={Car}
                alt="Nexon"
                placeholder="blur"
            />
        </div>
    )
}

export default page