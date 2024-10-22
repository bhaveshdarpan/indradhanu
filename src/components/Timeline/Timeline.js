import React from "react";
import TimelineItem from "./TimelineEvent";
import timelineData from "./timelineData";
const Timeline = () => {
  return (
    <div className="container w-full h-full p-5">
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border line"></div>
        {timelineData.map((item, index) => (
          <TimelineItem
            key={index}
            year={item.year}
            color={item.color}
            events={item.events}
            imgSrc={item.imgSrc}
            isRight={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
