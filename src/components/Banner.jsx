export default function Banner() {
    return (
        <section className="bg-[url('images/herobg.png')] bg-auto lg:bg-cover bg-no-repeat lg:h-[600px] rounded-3xl">
            <div>
                <h1 className="text-3xl pt-6 px-6 lg:pt-32 lg:px-52 lg:text-6xl text-center text-white">Discover an
                    exceptional cooking class tailored
                    for you</h1>
                <h1 className="lg:pt-6 lg:px-52 px-6 text-center text-white">Discover an exceptional cooking class tailored
                    for you.
                    Discover king class tailored for you.</h1>
                <div className="flex justify-center gap-10 mt-5 lg:mt-36 pb-8">
                    <button className="py-3 px-6 bg-green-500 font-bold rounded-full hover:bg-green-400">Explore
                        Now</button>
                    <button
                        className="py-3 px-6 border-[1px] text-white font-bold rounded-full hover:bg-green-100 hover:text-black">
                        Our Feedback</button>
                </div>
            </div>
        </section>
    )
}