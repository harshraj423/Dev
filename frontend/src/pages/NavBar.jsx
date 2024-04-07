

export default function NavBar() {
    return (
        <div>
            <div className="pb-1 border-2 border-radius-sm flex justify-between pt-2">
                <div className="pl-4 text-blue-500 text-2xl font-semibold">
                    Deviant
                </div>
                <div className="flex justify-evenly">
                    <button>
                        Home
                    </button>
                    <button className="pl-8">
                        Courses
                    </button >
                    <button className="pl-8">
                        Plans
                    </button>
                    <button className="pl-8">
                        About Us
                    </button>
                </div>
                <button className="pr-4 bg-blue-600 pl-4 mr-4 rounded-full text-white">
                    Login / Sign up
                </button>
            </div>
        </div>
    )
}