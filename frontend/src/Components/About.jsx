import React from "react";

const About = () => {
  return (
    <div className="about">
        <div className="info-about">
        <h1>About Ecoyaan</h1>
      <p>
        At Ecoyaan, we are more than just a platform. Our goal is to build a
        community of eco-conscious people who share a common vision and passion
        for a more sustainable world. We recognize that sustainability is a
        journey (as the Sanskrit word “yaan” suggests). To keep you motivated on
        this journey, on our platform and our social media pages, you can find:
      </p>
      <ul>
        <li> Tips and tricks to adopt a more eco-friendly and low-waste lifestyle</li>
        <li> Videos, posts, and quizzes on climate change and sustainability</li>
        <li>Events
        and pledges that invite you to adopt a more sustainable lifestyle</li>
      </ul>
        </div>
     <div className="image-about">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/024/680/793/small_2x/world-economy-organization-textile-service-earth-globe-world-business-ai-generative-free-png.png" alt="" />
     </div>
    </div>
  );
};

export default About;
