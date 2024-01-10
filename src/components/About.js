import React, { useState } from "react";

const Section = ({ id, title, desc, activeIndex, setActiveIndex }) => {
  return (
    <div className="p-2 m-2 border border-black ">
      <h2 className="text-2xl font-bold">{title}</h2>
      <button
        onClick={() => setActiveIndex((prev) => (prev === id ? null : id))}>
        {activeIndex === id ? "Hide" : "Show"}
      </button>
      {activeIndex === id && <p className="text-xl">{desc}</p>}
    </div>
  );
};

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="relative">
      <Section
        id={0}
        title={"About Us"}
        desc={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, animi?
        Obcaecati ullam numquam neque placeat alias voluptate, blanditiis sunt,
        tempora corporis dolor voluptas!`}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <Section
        id={1}
        title={"Teams"}
        desc={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, animi?
        Obcaecati ullam numquam neque placeat alias voluptate, blanditiis sunt,
        tempora corporis dolor voluptas!`}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <Section
        id={2}
        title={"Carrer"}
        desc={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, animi?
        Obcaecati ullam numquam neque placeat alias voluptate, blanditiis sunt,
        tempora corporis dolor voluptas!`}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <Section
        id={3}
        title={"Products"}
        desc={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, animi?
        Obcaecati ullam numquam neque placeat alias voluptate, blanditiis sunt,
        tempora corporis dolor voluptas!`}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </div>
  );
};

// class About extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log("Parent Constructor");
//   }
//   componentDidMount() {
//     console.log("Parent DID MOUNT");
//   }
//   render() {
//     console.log("Parent Render");
//     return (
//       <div>
//         <h2>About Us</h2>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
//           animi? Obcaecati ullam numquam neque placeat alias voluptate,
//           blanditiis sunt, tempora corporis dolor voluptas!!
//         </p>
//         <ProfileClass name="First" />
//         {/* <ProfileClass name="Second" /> */}
//       </div>
//     );
//   }
// }

export default About;
