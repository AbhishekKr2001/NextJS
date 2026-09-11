
import Image from "next/image";
import Car from "@/public/car.jpeg";

function Page() {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="mx-auto max-w-5xl">
                <h1 className="mb-8 text-3xl font-bold text-gray-800">
                    This is Image component.
                </h1>

                <div className="grid gap-8 md:grid-cols-2">
                    {/* Fixed size image */}
                    <div className="overflow-hidden rounded-2xl shadow-lg">
                        <Image
                            src={Car}
                            width={500}
                            height={500}
                            alt="Nexon"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    {/* Fill image */}
                    <div className="relative h-[500px] overflow-hidden rounded-2xl shadow-lg">
                        <Image
                            src={Car}
                            alt="New Nexon"
                            fill
                            quality={100}
                            priority={false}
                            placeholder="blur"
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;

