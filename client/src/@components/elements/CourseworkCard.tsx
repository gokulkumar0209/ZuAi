import React from 'react';

interface CourseworkCardProps {
  file: {
    id: string;
    name: string;
    content: string;
    title: React.ReactNode;
    subject?: string;
    course: string;
    rating: number;
    resultRating: number;
    language: string;
    words: number;
    timeToRead: number;
    criteria: any;
    review: string;
    timestamp: string;
    image: string | undefined;
  };
}

const CourseworkCard: React.FC<CourseworkCardProps> = ({ file }) => {
  return (
    <div
      key={file.id}
      className="bg-white shadow-md rounded-lg flex items-center space-x-4"
      style={{ width: '440px', height: '172px' }}
    >
      <div className="w-1/4 p-2">
        <img
          src={file.image}
          alt={file.title as string}
          className="w-full h-auto rounded-lg"
        />
      </div>
      <div className="w-3/4 p-2">
        <h2 className="text-md font-bold text-gray-800 truncate">
          {file.title}
        </h2>
        <p className="text-gray-600 mt-1 text-sm truncate">
          How does the temperature of a Copper pipe affect the time it
          takes a magnet to fall through it?
        </p>
        <div className="grid grid-cols-3 text-xs text-gray-500">
          <span>🧔🏻{file.subject || 'Other'}</span>
          <span>⭐ {file.resultRating}/{file.rating}</span>
          <span>📄 {file.words} words</span>
          <span>🗣️ {file.language}</span>
          <span>⏱️ {file.timeToRead} min read</span>
        </div>
      </div>
    </div>
  );
};

export default CourseworkCard;
