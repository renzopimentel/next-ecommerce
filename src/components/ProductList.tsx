import Image from "next/image"
import Link from "next/link"

const ProductList = () => {
    return (
        <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap">
            <Link
            href={`/test`}
            className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
            >
                <div className="relative w-full h-80">
                    <Image
                    src="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    fill
                    sizes="25vw"
                    className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                    <Image
                    src="https://images.pexels.com/photos/6835134/pexels-photo-6835134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    fill
                    sizes="25vw"
                    className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">$49</span>
                </div>
                <div className="text-sm text-gray-500">My description</div>
                <button className="rounded-2xl ring-1 ring-nueveonce text-nueveonce w-max py-2 px-2 text-xs hover:bg-nueveonce hover:text-white">Añadir al carro</button>
            </Link>
            <Link
            href={`/test`}
            className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
            >
                <div className="relative w-full h-80">
                    <Image
                    src="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    fill
                    sizes="25vw"
                    className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                    <Image
                    src="https://images.pexels.com/photos/6835134/pexels-photo-6835134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    fill
                    sizes="25vw"
                    className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">$49</span>
                </div>
                <div className="text-sm text-gray-500">My description</div>
                <button className="rounded-2xl ring-1 ring-nueveonce text-nueveonce w-max py-2 px-2 text-xs hover:bg-nueveonce hover:text-white">Añadir al carro</button>
            </Link>
            <Link
            href={`/test`}
            className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
            >
                <div className="relative w-full h-80">
                    <Image
                    src="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    fill
                    sizes="25vw"
                    className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                    <Image
                    src="https://images.pexels.com/photos/6835134/pexels-photo-6835134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    fill
                    sizes="25vw"
                    className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">$49</span>
                </div>
                <div className="text-sm text-gray-500">My description</div>
                <button className="rounded-2xl ring-1 ring-nueveonce text-nueveonce w-max py-2 px-2 text-xs hover:bg-nueveonce hover:text-white">Añadir al carro</button>
            </Link>
            <Link
            href={`/test`}
            className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
            >
                <div className="relative w-full h-80">
                    <Image
                    src="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    fill
                    sizes="25vw"
                    className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                    <Image
                    src="https://images.pexels.com/photos/6835134/pexels-photo-6835134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    fill
                    sizes="25vw"
                    className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">$49</span>
                </div>
                <div className="text-sm text-gray-500">My description</div>
                <button className="rounded-2xl ring-1 ring-nueveonce text-nueveonce w-max py-2 px-2 text-xs hover:bg-nueveonce hover:text-white">Añadir al carro</button>
            </Link>
            {/* <Link href={`/test`} className="group relative block overflow-hidden w-full  sm:w-[45%] lg:w-[22%]">
                <button
                    className="absolute end-4 top-4 z-20 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
                >
                    <span className="sr-only">Wishlist</span>

                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                    </svg>
                </button>

                <div className="relative w-full h-80">
                    <Image
                    src="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    fill
                    sizes="25vw"
                    className="absolute object-cover z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                    <Image
                    src="https://images.pexels.com/photos/6835134/pexels-photo-6835134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    fill
                    sizes="25vw"
                    className="absolute object-cover z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                </div>
                <div className="relative border border-gray-100 bg-white p-6">
                    <span className="whitespace-nowrap bg-nueveonce text-white px-3 py-1.5 text-xs font-medium"> New </span>

                    <h3 className="mt-4 text-lg font-medium text-gray-900">Robot Toy</h3>

                    <p className="mt-1.5 text-sm text-gray-700">$14.99</p>

                    <form className="mt-4">
                    <button
                        className="block w-full rounded bg-nueveonce text-white p-4 text-sm font-medium transition hover:scale-105"
                    >
                        Add to Cart
                    </button>
                    </form>
                </div>
            </Link> */}
        </div>
    );
}

export default ProductList
