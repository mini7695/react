import React from "react";

function Virtual() {
  return (
    <>
      <div className="md:ml-[205px]">
        <h2 className="text-[40px] md:text-[85px] font-bold bg-gradient-to-b from-colorvirtual1 to-colorvirtual2 text-transparent bg-clip-text ">
          Virtual
        </h2>
        <div className="md:flex gap-10">
          <h3 className="md:text-[48px] text-colorvirtual3 font-semibold ">
            Tour
          </h3>
          <p className="text-colorvirtual4 md:text-[16px] pt-10 md:w-[60%]">
            Despite being a technology that originated decades ago, many people
            are still unfamiliar with the concept of Virtual Reality. It is also
            quite common to confuse the term Virtual Reality with augmented
            reality.
            <br /> <br />
            The main difference between the two is that VR builds the world in
            which we immerse ourselves through a specific headset. It is fully
            immersive and everything we see is part of an environment
            artificially constructed through images, sounds, etc. On the other
            hand, in augmented reality , our own world becomes the framework
            within which objects, images or similar are placed. Everything we
            see is in a real environment and it may not be strictly necessary to
            wear a headset. The clearest and most mainstream example of this
            concept is Pokémon Go.
            <br />
            <br />
            However, there is also a combination of both realities called mixed
            reality. This hybrid technology makes it possible, for example, to
            see virtual objects in the real world and build an experience in
            which the physical and the digital are practically
            indistinguishable.
          </p>
        </div>
      </div>
    </>
  );
}
export default Virtual;
