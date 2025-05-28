import { Link } from 'react-router-dom';

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Text Section */}
      <div className="md:w-1/2 flex flex-col items-start justify-center p-6 ml-36 -mt-36">
        <h1 className="text-6xl font-bold text-black mb-2">About Me</h1>
        <div className="w-16 h-1 bg-blue-600 mb-4"></div>
        <p className="text-gray-600 mb-6 text-2xl">
          A brief introduction about me and my interest.
        </p>
        <Link to="/learn-more">
          <button className="px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition">
            Learn More
          </button>
        </Link>
      </div>
      {/* Image Grid Section */}
      <div className="md:w-1/2 grid grid-cols-2 gap-2 p-6">
        <div className="bg-gray-300 h-48 w-full flex items-center justify-center">
          <span className="text-gray-500">[Image 1]</span>
        </div>
        <div className="bg-gray-300 h-48 w-full flex items-center justify-center">
          <span className="text-gray-500">[Image 2]</span>
        </div>
        <div className="bg-gray-300 h-48 w-full flex items-center justify-center">
          <span className="text-gray-500">[Image 3]</span>
        </div>
        <div className="bg-gray-300 h-48 w-full flex items-center justify-center">
          <span className="text-gray-500">[Image 4]</span>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;