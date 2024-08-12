import propTypes from 'prop-types';
import { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { GoInfo } from 'react-icons/go';

const VideoTitle = ({ originalTitle, overview }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxWords = 20;

  // Function to get the truncated overview
  const getTruncatedDescription = () => {
    const words = overview.split(' ');
    if (words.length <= maxWords || isExpanded) {
      return overview;
    }
    return words.slice(0, maxWords).join(' ') + '...';
  };

  // Function to toggle the expanded state
  const toggleIsExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="pt-[30%] md:pt-[20%] px-20 relative bg-gradient-to-r from-black w-screen aspect-video bottom-0">
      <div>
        <h1 className="text-6xl font-bold mb-4 md:w-3/4 text-white">
          {originalTitle}
        </h1>
        <p className="text-md py-6 md:w-1/4 text-white">
          {getTruncatedDescription()}{' '}
          {overview.split(' ').length > maxWords && (
            <button onClick={toggleIsExpanded} className="text-blue-500">
              {isExpanded ? 'View Less' : 'View More'}
            </button>
          )}
        </p>
      </div>
      <div className="flex mt-4 ">
        <div>
          <button className="px-4 py-1 mr-4 rounded border-gray-800 flex items-center bg-white">
            <FaPlay className="mr-1" /> Play
          </button>
        </div>
        <div>
          <button className="px-4 py-1 rounded flex items-center bg-gray-100">
            <GoInfo className="mr-1" /> More Info
          </button>
        </div>
      </div>
    </div>
  );
};

VideoTitle.propTypes = {
  originalTitle: propTypes.string,
  overview: propTypes.string,
};

export default VideoTitle;
