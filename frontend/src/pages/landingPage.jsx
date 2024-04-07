import LoginCard from "../components/loginCard";
import NavBar from "./NavBar";


export default function LandingPage() {
    return (
      <div>
        <NavBar></NavBar>
        <div className="bg-purple-500">
          <div className="pl-12 pr-12 text-black-900 font-bold text-center text-8xl">
            Let's Learn about new Knowledge and abilities
          </div>
          <div className='grid grid-cols-12'>
          <div className='col-span-2 pt-12 rounded-md'>
              <LoginCard img="/card4.jpg" title="Another Book Title" />
              <div className="">
                <div className="rounded-md font-bold text-xl text-black-900 mb-12">
                  Drawing and coloring picture book
                </div>
              </div>
            </div>
            <div className='col-span-1'></div>
            <div className='col-span-2 pt-12 rounded-md'>
              <LoginCard img="/card2.jpg" title="Another Book Title" />
              <div className="">
                <div className="rounded-md font-bold text-xl text-black-900 mb-12">
                  Drawing and coloring picture book
                </div>
              </div>
            </div>
            <div className='col-span-1'></div>
            <div className='col-span-2 pt-12 rounded-md'>
              <LoginCard img="/card3.jpg" title="Another Book Title" />
              <div className="">
                <div className="rounded-md font-bold text-xl text-black-900 mb-12">
                  Drawing and coloring picture book
                </div>
              </div>
            </div>
            <div className='col-span-1'></div>
            <div className='col-span-2 pt-12 rounded-md'>
              <LoginCard img="/card4.jpg" title="Another Book Title" />
              <div className="">
                <div className="rounded-md font-bold text-xl text-black-900 mb-12">
                  Drawing and coloring picture book
                </div>
              </div>
            </div>
          </div>
        </div>
  
      </div>
    );
  }