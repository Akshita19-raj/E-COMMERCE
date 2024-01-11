import React from "react";
import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online platform that facilitates buying
          and selling goods or services. It provides a virtual marketplace where
          businesses showcase their products, and consumers can browse, compare,
          and make purchases conveniently. These platforms often offer secure
          payment options, order tracking, and customer support. E-commerce
          websites revolutionize retail by offering a global reach, personalized
          shopping experiences, and the convenience of 24/7 accessibility,
          making it a cornerstone of modern retail and transforming the way
          people shop for products and services.
        </p>
        <p>
          E-commerce refers to online commercial transactions, allowing
          businesses and consumers to buy and sell goods or services
          electronically. It streamlines shopping, providing convenience,
          accessibility, and global reach. E-commerce platforms enable secure
          transactions, order tracking, and personalized experiences,
          transforming traditional retail methods in the digital age.
        </p>
      </div>
    </div>
  );
};
export default DescriptionBox;
