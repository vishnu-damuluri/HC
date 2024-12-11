import img1 from '../assets/gitamCapN.png';
import img2 from '../assets/gitamShirtN.png';
import img3 from '../assets/gitamBookN.png';

export default function Merch() {
  return (
    <div className="flex flex-col items-center lg:flex-row justify-between p-4 lg:p-8 gap-8">
      {/* Title: Display First in Mobile View */}
      <h2 className="text-6xl pt-10 sm:text-6xl font-bold text-left text-cyan-600 mb-4  lg:hidden">
        Carry Gitam with You
      </h2>

      {/* Images: Stacked in Mobile, Horizontal in Desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex gap-6">
        {[
          { src: img1, alt: 'GITAM Cap' },
          { src: img2, alt: 'GITAM Shirt' },
          { src: img3, alt: 'GITAM Notebook' },
        ].map((item, index) => (
          <div
            key={index}
            className="group w-auto h-auto sm:w-auto sm:h-auto bg-white rounded-lg flex items-center justify-center overflow-hidden transition-all duration-300 hover:bg-red-500"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-auto h-auto transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* Right Side: Text and Button */}
      <div className="max-w-md text-center lg:text-left px-4">
        {/* Title: Hidden on Mobile, Shown on Desktop */}
        <h2 className="hidden lg:block text-4xl font-bold text-blue-600 mb-4">
          Carry Gitam with You
        </h2>
        <p className="text-gray-700 mb-6 font-semibold text-lg">
          From hoodies to stationery and everything in between, our merchandise lets you carry a
          piece of Gitam wherever you go. Wear it, use it, and keep the memories close!
        </p>
        <button className="bg-emerald-600 text-white flex justify-center items-center px-4 py-2 rounded-full text-2xl font-semibold hover:bg-emerald-700 transition duration-300">
         <a href='https://shop.gitam.edu/' target='_blank' className='mb-1' >Shop Now</a> 
        </button>
      </div>
    </div>
  );
}
