import React from "react";
import "./Vibhinn.css";
import VibhinnFlyer from "../../assets/images/vibhinn-flyer.svg";
// import "@fortawesome/fontawesome-free/css/all.min.css";

// const Vibhinn = () => {
//   return (
//     <div className="vibhinn">
//       <div id="rectangle">
//         <img
//           className="image"
//           src="../../assets/images/vibhinn-flyer.svg"
//           alt="vibhinn-flyer"
//         />
//       </div>
//       {/* <a href="/index.html">
//         <div id="transparent"></div>
//       </a> */}
//       {/* <a href="/index.html">
//         <div id="websitebutton">Indradhanu Website</div>
//       </a> */}
//       <a
//         href="https://instagram.com/indradhanu.iitd"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <div id="igminor">Indradhanu IG</div>
//       </a>
//     </div>
//   );
// };

// export default Vibhinn;

const Vibhinn = () => {
  return (
    <div className="vibhinn">
      <div id="flyer">
        <img className="image" src={VibhinnFlyer} alt="vibhinn-flyer" />
      </div>
      {/* <a href="/index.html">
        <div id="transparent"></div>
      </a> */}
      <a href="/index.html">
        <div id="websitebutton">Indradhanu Website</div>
      </a>
      <a
        href="https://instagram.com/indradhanu.iitd"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div id="igminor">Indradhanu IG</div>
      </a>
    </div>
  );
};

export default Vibhinn;
