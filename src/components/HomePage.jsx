import React from 'react';

const HomePage = () => {
  return (
    <div>
      <section className="flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-10 md:py-20 mt-40 md:mt-30 z-0">
        {/* Left Section - Text Content */}
        <div className="max-w-lg text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-[#008DDA] text-600 leading-tight">
            Dhaval Velani<br /> <span className='text-[#F7374F] text-2xl md:text-3xl font-semibold'>Southern California’s Premier Real Estate Expert</span>
          </h1>
          <p className="mt-4 text-[#34495E] text-lg text-justify">
            Welcome to Limaa Inc., where dreams find their address and homes become the heart of unforgettable
            stories. As a premier real estate company, we are dedicated to transforming aspirations into reality, one
            property at a time.
          </p>
          <p className="mt-2 text-[#34495E] text-lg text-justify">
            At Limaa Inc., we pride ourselves on being more than just a real estate firm; we are your trusted partner
            in the journey of finding the perfect home or investment opportunity. With a commitment to excellence
            and a passion for delivering unparalleled service, we have established ourselves as a beacon of integrity
            and reliability in the real estate industry.
          </p>
          <button className="mt-6 bg-[#34495E] text-white py-2 px-6 rounded-full hover:bg-gray-600 transition">
            Get Started
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="mt-10 md:mt-0 md:ml-10 relative w-full max-w-lg">
          {/* Circular Border */}
          <div className="absolute -inset-2 rounded-full border-4 border-gray-200"></div>
          {/* Image */}
          <img
            src="/dhaval_photo.png" // Replace with your image URL
            alt="Mortgage"
            className="rounded-full object-cover relative z-10"
          />
        </div>
      </section>
      <div className="flex sm:flex-col lg:flex-row mt-4 mb-4 gap-8 lg:justify-evenly ">
        <span className="flex justify-center items-center flex-col gap-2">
          <div className="rounded-full bg-[#EC7FA9]  w-[54px] h-[54px] text-white flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-emoji-smile "
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5" />
            </svg>
          </div>
          <h2 className="text-3xl text-[#3498DB] font-bold">124</h2>
          <p className='text-[#34495E]'>Happy Clients</p>
        </span>
        <span className="flex justify-center items-center flex-col gap-2 mx-auto md:mx-0">
          <div className="rounded-full bg-[#EC7FA9]  w-[54px] h-[54px] text-white flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-journal-richtext"
              viewBox="0 0 16 16"
            >
              <path d="M7.5 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-.861 1.542 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047L11 4.75V7a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 7v-.5s1.54-1.274 1.639-1.208M5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5" />
              <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" />
              <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
            </svg>
          </div>
          <h2 className="text-3xl text-[#3498DB] font-bold">168</h2>
          <p className='text-[#34495E]'>Projects</p>
        </span>
        <span className="flex justify-center items-center flex-col gap-2">
          <div className="rounded-full bg-[#EC7FA9]  w-[54px] h-[54px] text-white flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-headset"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5" />
            </svg>
          </div>
          <h2 className="text-3xl text-[#3498DB] font-bold">6453</h2>
          <p className='text-[#34495E]'>Hours Of Support</p>
        </span>
        {/* <span className="flex justify-center items-center flex-col gap-2">
          <div className="rounded-full bg-[#03233F]  w-[54px] h-[54px] text-white flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-people"
              viewBox="0 0 16 16"
            >
              <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold">15</h2>
          <p>Hard Workers</p>
        </span> */}
      </div>
      {/* Second Section */}
      <section className="py-12">
        {/* Top Content */}
       

        {/* Bottom Content */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-10 px-6 md:px-16 ">
          {/* Text Section */}
          <div className="max-w-lg text-center md:text-left">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 text-lg text-justify">
              Our mission is to redefine the real estate experience by providing our clients with personalized and
              comprehensive solutions. We strive to create lasting relationships based on trust, transparency, and
              results. Whether you are buying, selling, or investing, we are here to guide you through every step of the
              process.
            </p>

          </div>

          {/* Image Section */}
          <div className="mt-10 md:mt-0 relative w-full max-w-lg">
            {/* Circular Border */}
            <div className="absolute -inset-2 rounded-full border-4 border-gray-200"></div>
            {/* Image */}
            <img
              src="/final1.png" 
              alt="Woman working on laptop"
              className="rounded-full object-fill relative z-10"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
