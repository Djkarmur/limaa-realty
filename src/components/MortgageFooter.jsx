import React from 'react';
import { Instagram } from 'lucide-react';

const MortgageFooter = () => {
  return (
    <div className="w-full">
      {/* Testimonial Section */}
      <div className="text-center py-8">
        <h2 className="text-3xl text-gray-600 font-semibold">What our clients say about us!</h2>
      </div>

      {/* CTA Section */}
      <div className="bg-slate-600 text-white text-center py-16">
        <h2 className="text-3xl font-semibold mb-4">Call Dhaval at LIMAA, Inc.</h2>
        <p className="mb-8">Unlock the door to your dream home with the guidance of trusted realtor!</p>
        <button className="bg-neutral-400 text-white px-8 py-3 rounded-full hover:bg-neutral-500 transition-colors">
          Get Started
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-neutral-500 text-white py-12 flex flex-col md:flex-row items-center justify-between">
        <div className='flex justify-center items-center'>
        <img
          src="./limma_navbar.png"
          alt="limaa"
          height="200"
          width="200"
          className="rounded-md h-28 w-52 m-4"
        />
        
        </div>
       
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* About Us */}
          <div>
            <h3 className="font-semibold mb-4">About Us</h3>
            {/* <p className="mb-2">We've been helping customers afford the home of their dreams for many years and we love what we do..</p> */}
            <p className="mb-2">Limaa Inc.</p>
            <p className="mb-2">Residential and commercial real estate</p>
            <p className="mb-2">DRE #02072029</p>
            <p className="mb-2">DRE #01953024</p>
            {/* <a href="#" className="hover:underline">NMLS Consumer Access</a> */}
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">3020 Quartz LN.</p>
            <p className="mb-2">#1 Fullerton, CA 92831</p>
            <p className="mb-2">Phone: (909) 859-9977</p>
            <a href="mailto:limaarealty1@gmail.com" className="hover:underline">
            limaarealty1@gmail.com
            </a>
          </div>

          {/* Disclaimers */}
          {/* <div>
            <h3 className="font-semibold mb-4">Disclaimers</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Legal</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Accessibility Statement</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Site Map</a></li>
            </ul>
          </div> */}

          {/* Resources */}
          {/* <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Loan Programs</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Loan Process</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Mortgage Basics</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Online Forms</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">FAQ</a></li>
            </ul>
          </div> */}
        </div>

        {/* Footer Bottom */}
        <div className="max-w-6xl mx-auto px-4 mt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            {/* <img 
              src="/api/placeholder/100/50" 
              alt="Equal Housing Opportunity" 
              className="h-12"
            /> */}
          </div>
          <div className="flex items-center space-x-4">
            {/* <a href="#" className="hover:text-gray-200">
              <Instagram size={24} />
            </a> */}
            <div className="flex items-center">
              <span className="text-sm">Powered By</span>
              <a href="https://gotestli.com" className="ml-2 hover:underline">
                Gotestli.com
              </a>
            </div>
          </div>
        </div>
        <div className='absolute bottom-[1px]  right-10 flex justify-center items-center'>
        <img
          src="./eho.jpg"
          alt="limaa"
          height="50"
          width="70"
          className="rounded-md h-auto w-10 m-4"
        />
        </div>
      </footer>
    </div>
  );
};

export default MortgageFooter;