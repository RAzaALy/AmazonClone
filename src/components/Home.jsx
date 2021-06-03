import React from "react";
import Product from "./Product";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="home">
        <img className="img" src="banner.jpg" alt="banner" />
        {/* product id,title,rating,image,price */}
        <h1>Computer Products</h1>
        <div className="row">
          <Product
            id={16}
            key="1"
            title="Personal Computer"
            desc="Gaming computers are specialized personal computers designed for playing video games. ...were first being developed. Today, many companies offer gaming computers in a variety of configurations"
            price={32.68}
            rating={4}
            image="images/product2.png"
          />

          <Product
            id={15}
            key="2"
            title="IPad"
            desc="Gaming computers are specialized personal computers designed for playing video games. ...were first being developed. Today, many companies offer gaming computers in a variety of configurations"
            price={32.68}
            rating={4}
            image="images/product12.png"
          />
        </div>
        <div className="row">
          <Product
            id={14}
            key="3"
            title="Gaming PC"
            desc="Gaming computers are specialized personal computers designed for playing video games. Gaming computers typically differ from mainstream computers by using high-performance video cards."
            price={45.86}
            rating={5}
            image="images/product13.png"
          />
        </div>

        <h1>Mobile Phone</h1>
        <div className="row">
          <Product
            id={13}
            key="4"
            title="IPhone"
            desc="The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface. The iPhone runs the iOS operating system "
            price={25.32}
            rating={5}
            image="images/product8.png"
          />
          <Product
            id={12}
            key="18"
            title="Samsung Phone"
            desc="Samsung, South Korean company that is one of the world's largest producers of electronic devices. Samsung specializes in the production of a wide variety of consumer and industry electronics"
            price={15.97}
            rating={3}
            image="images/product6.png"
          />
        </div>
        <h1>Liquid Crystal Dispaly</h1>
        <div className="row">
          <Product
            id={11}
            key="5"
            title="Samsung LCD"
            desc="Stands for Liquid Crystal Display. LCD is a flat panel display technology commonly used in TVs and computer monitors. ... Instead of firing electrons at a glass screen."
            price={46.2}
            rating={4}
            image="images/product16.png"
          />
          <Product
            id={10}
            key="6"
            title="Acer LCD"
            desc="Various Sizes LED Screen for Outdoor and Indoor Advertising LED Screen Solution! 9 Years' Experience in Custom Solutions, Over 3000 Successful Cases. Creative Solutions. Lifelong Maintenance. "
            price={42.73}
            rating={5}
            image="images/product17.png"
          />
        </div>
        <div className="row">
          <Product
            key="7"
            id={9}
            title="SONY X90J"
            desc="Gaming computers are specialized personal computers designed for playing video games. Gaming computers typically differ from mainstream computers by using high-performance video cards"
            price={245.62}
            rating={5}
            image="images/product03.png"
          />
        </div>
        <h1>Gaming Curved LCD</h1>
        <div className="row">
          <Product
            key="72"
            id={193}
            title="SAMSUNG Q900A"
            desc="Gaming computers are specialized personal computers designed for playing video games. Gaming computers typically differ from mainstream computers by using high-performance video cards"
            price={415.62}
            rating={5}
            image="images/product02.png"
          />
          <Product
            key="77"
            id={192}
            title="MI QLED TV"
            desc="Gaming computers are specialized personal computers designed for playing video games. Gaming computers typically differ from mainstream computers by using high-performance video cards"
            price={345.62}
            rating={5}
            image="images/product04.png"
          />
        </div>
        <div className="row">
          <Product
            key="77"
            id={179}
            title="SONY Z8H"
            desc="Gaming computers are specialized personal computers designed for playing video games. Gaming computers typically differ from mainstream computers by using high-performance video cards"
            price={425.62}
            rating={5}
            image="images/product01.png"
          />
        </div>
        <h1>Electronics</h1>
        <div className="row">
          <Product
            key="8"
            id={8}
            title="Cooling AC"
            desc="The Process of Cooling Your Home with AC. Your air conditioning unit uses chemicals that convert from gas to liquid and back again quickly."
            price={36.21}
            rating={5}
            image="images/product7.png"
          />

          <Product
            id={7}
            key="9"
            title="Orient Cooler"
            desc="These air coolers will perch perfectly on a window sill and cool your room evenly with a 4-way air deflection system. ... Their special Humidity Control feature turns humid air into a cool and pleasant breeze. "
            price={16.7}
            rating={3}
            image="images/product14.png"
          />
        </div>
        <div className="row">
          <Product
            id={6}
            key="10"
            title="Camera"
            desc="Camera, in photography, device for recording an image of an object on a light-sensitive surface; it is essentially a light-tight box with an aperture to admit light focused onto a sensitized film or plate."
            price={39.34}
            rating={5}
            image="images/product10.png"
          />

          <Product
            id={5}
            key="11"
            title="Mouse"
            desc="A computer mouse (plural mice, rarely mouses) is a hand-held pointing device that detects two-dimensional motion relative to a surface. This motion is typically translated into the motion of a pointer on a display, which allows a smooth control of the graphical user interface of a computer."
            price={16.7}
            rating={4}
            image="images/product11.png"
          />
        </div>

        <h1>Vehicles</h1>
        <div className="row">
          <Product
            id={4}
            key="12"
            title="Luxury Car"
            desc="A luxury car is a car that provides increased levels of comfort, equipment, amenities, quality, performance, and status relative to regular cars for an increased price."
            price={436.22}
            rating={5}
            image="images/product1.png"
          />

          <Product
            id={3}
            key="13"
            title="Sports Bike"
            desc="Bicycle, also called bike, two-wheeled steerable machine that is pedaled by the rider's feet. On a standard bicycle the wheels are mounted in-line in a metal frame, with the front wheel held in a rotatable fork. "
            price={216.73}
            rating={4}
            image="images/product4.png"
          />
        </div>
        <h1>Furniture</h1>
        <div className="row">
          <Product
            id={2}
            key="14"
            title="Luxury Sofa"
            desc="A sofa is a piece of furniture that a few people can comfortably sit on together. ... Sofas are typically upholstered, with a high back and arms. "
            price={136.43}
            rating={5}
            image="images/product3.png"
          />

          <Product
            id={1}
            key="15"
            title="Gaming Chair"
            desc="A gaming chair is a type of chair designed for the comfort of gamers. They differ from most office chairs in having high backrest designed to support the upper back and shoulders"
            price={99.99}
            rating={4}
            image="images/product9.png"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
