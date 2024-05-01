import React, { useEffect } from "react";
import Slider from "react-slick";

const AboutUs = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 998, // Breakpoint for smaller screens
        settings: {
          slidesToShow: 1, // Adjust the number of slides for smaller screens
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="about">
        <div className="info-about">
          <h1>About Ecoyaan</h1>
          <p>
            At Ecoyaan, we are more than just a platform. Our goal is to build a
            community of eco-conscious people who share a common vision and
            passion for a more sustainable world. We recognize that
            sustainability is a journey (as the Sanskrit word “yaan” suggests).
            To keep you motivated on this journey, on our platform and our
            social media pages, you can find:
          </p>
          <ul>
            <li>
              {" "}
              Tips and tricks to adopt a more eco-friendly and low-waste
              lifestyle
            </li>
            <li>
              {" "}
              Videos, posts, and quizzes on climate change and sustainability
            </li>
            <li>
              Events and pledges that invite you to adopt a more sustainable
              lifestyle
            </li>
          </ul>
        </div>
        <div className="image-about">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/024/680/793/small_2x/world-economy-organization-textile-service-earth-globe-world-business-ai-generative-free-png.png"
            alt=""
          />
        </div>
      </div>
      <div className="values-section">
        <h1 className="head-value">Our Values</h1>
        <div className="icons">
          <div className="icon-card">
            <img src="https://ecoyaan.com/images/Trust.png" alt="" />
            <h1>Trust</h1>
            <p>
              We value the trust of our community. We strive to be transparent
              and honest in everything we do, from the content we share today to
              sourcing our products in the future.
            </p>
          </div>
          <div className="icons">
            <div className="icon-card">
              <img src="https://ecoyaan.com/images/Authenticity.png" alt="" />
              <h1>Authenticity</h1>
              <p>
                We are genuine in our mission to promote sustainability and
                environmental awareness. An authentic community of eco-conscious
                people can inspire each other on the journey towards
                sustainability.
              </p>
            </div>
            <div className="icons">
              <div className="icon-card">
                <img src="https://ecoyaan.com/images/Impact.png" alt="" />
                <h1>Impact</h1>
                <p>
                  We measure our success by our impact on the planet and our
                  community. We aim to empower our sellers and customers to make
                  responsible choices that benefit their well-being and the
                  well-being of others.
                </p>
              </div>
            </div>
            <div className="icons">
              <div className="icon-card">
                <img
                  src="https://ecoyaan.com/images/FunAndEngaging.png"
                  alt=""
                />
                <h1>Fun & Engaging</h1>
                <p>
                  Moving towards a sustainable lifestyle and the constant news
                  around climate change can be stressful. We aim to inject fun
                  and creativity into everything we do, from designing our
                  products to providing services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="community-book">
        <div className="community-2">
          <div className="heading">
            <h1>Our Story</h1>
          </div>
          <p>
            We started Ecoyaan after watching an episode of “Our Planet II”,
            where we saw the devastating impact of plastic pollution and climate
            change on the albatross birds. That moment ignited our mission. Our
            research suggests that many Indians understand global warming, yet
            access to sustainable practices and products remains limited. We
            also noticed that there is a lack of support for eco-friendly
            businesses. We created Ecoyaan to connect consumers, businesses, and
            sustainability experts. We want to make it easy and convenient for
            people to access eco-friendly products and services, learn and share
            best practices, and support sustainability initiatives. As founders,
            we are not perfect, but we are passionate. We believe that every
            small step matters. Join us and be a part of the Ecoyaan community —
            together, we’ll make a difference.
            <br />
            <br />
            <a href="" className="co-f">
              <i className="fa-brands fa-linkedin"></i> Abhishek Rao
            </a>{" "}
            <a href="" className="co-f">
              <i className="fa-brands fa-linkedin"></i> Sarwanjeet Singh
            </a>
          </p>
          <p></p>
        </div>
      </div>
      <div className="team">
        <h1>Meet the Team</h1>
        <div>
          <Slider className="slider" {...settings}>
          <div className="team-card">
                  <img
                    src="https://ecoyaan.com/images/about-us-social-media-team-02.png"
                    alt=""
                  />
                  <h1>URMIL</h1>
                  <h2>
                    SOCIAL MEDIA <i class="fa-brands fa-instagram"></i>
                  </h2>
                  <p>
                    Urmil creates engaging content for us. She runs her own
                    sustainable apparel store with her sister and advocates for
                    slow fashion. Check out her business
                  </p>
                </div>
                <div className="team-card">
                  <img
                    src="https://ecoyaan.com/images/about-us-product-team-01.png"
                    alt=""
                  />
                  <h1>DIVYA</h1>
                  <h2>
                    UX DESIGN <i class="fa-brands fa-instagram"></i>
                  </h2>
                  <p>
                    Divya creates user-friendly and engaging interfaces for our
                    platform. Check out more of her work on
                  </p>
                </div>
                <div className="team-card">
                  <img
                    src="https://ecoyaan.com/images/about-us-social-media-team-01.png"
                    alt=""
                  />
                  <h1>SHRUTHI</h1>
                  <h2>
                    SOCIAL MEDIA <i class="fa-brands fa-instagram"></i>
                  </h2>
                  <p>
                    Shruthi is in charge of our Instagram. She is a practising
                    Vegan and cares deeply about sustainability. Follow her
                    small business
                  </p>
                </div>
                <div className="team-card">
                  <img
                    src="https://ecoyaan.com/images/about-us-product-team-02.png"
                    alt=""
                  />
                  <h1>PRASHANITH</h1>
                  <h2>
                    ENGINEERING <i class="fa-brands fa-linkedin"></i>
                  </h2>
                  <p>
                    Prashanith is our front-end engineer, who brings the UX
                    designs to life
                  </p>
                </div>
                <div className="team-card">
                  <img
                    src="https://ecoyaan.com/images/about-us-product-team-03.png"
                    alt=""
                  />
                  <h1>SAI ABHILASH</h1>
                  <h2>
                    ENGINEERING <i class="fa-brands fa-linkedin"></i>
                  </h2>
                  <p>
                    Sai Abhilash is our back-end engineer, who manages and
                    optimises the infrastructure and logic of our platform
                  </p>
                </div>
                <div className="team-card">
                  <img src="https://ecoyaan.com/images/favicon.png" alt="" />
                  <h1>??</h1>
                  <h2>TEAM ECOYAAN</h2>
                  <p>This spot awaits you. <br />Check out our <button className="button-position">Open positions</button></p>
                </div>

          </Slider>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
