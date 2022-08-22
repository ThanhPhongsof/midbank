import { IconArrowLeft, IconArrowRight } from "components/icon";
import { LayoutContainer } from "components/layout";
import React, { useEffect, useRef, useState } from "react";
import { IBlog } from "services/interface";
import { BlogBackground, BlogContent } from "./parts/blog";

const blogs = [
  {
    image: "/blog-img-01.png",
    title: "Love of Our Customers",
    desc: "In promotion and advertising, a testimonial or show consists of a person's written or spoken statement extolling the virtue of a product.",
    author: "Justin Pierre",
    position: "UX/UI Derigner",
  },
  {
    image: "/blog-img-02.png",
    title: "Love of Our Customers",
    desc: "We operate our banking services in many countries around the world.",
    author: "Hellen Nguyen",
    position: "Project Manager",
  },
  {
    image: "/blog-img-03.png",
    title: "Love of Our Customers",
    desc: "Ut ut nemo ipsum alias. Dolor veritatis eum voluptatibus quaerat sequi. Qui tempora laudantium quisquam.",
    author: "Mike Petrucci",
    position: "CEO",
  },
  {
    image: "/blog-img-04.png",
    title: "Love of Our Customers",
    desc: "Quia consequatur non est reprehenderit facilis. Sequi quas suscipit illo et. ",
    author: "Vivian Nguyen",
    position: "Software Developer",
  },
  {
    image: "/blog-img-05.png",
    title: "Love of Our Customers",
    desc: "Repudiandae aut fuga cupiditate pariatur cumque ea. Mollitia veritatis odio voluptate sed.",
    author: "Jealynn Castillo",
    position: "Devops Developer",
  },
  {
    image: "/blog-img-06.png",
    title: "Love of Our Customers",
    desc: "Amet in sint deleniti pariatur. Dolorum repellendus explicabo nesciunt vitae.",
    author: "Nick Karvounis",
    position: "Blockchain Developer",
  },
];

const Blog = () => {
  const [sliderItemWidth, setSliderItemWidth] = useState(0);
  const [positionX, setPositionX] = useState(0);
  const [direction, setDirection] = useState(0);
  const [sliderLength, setSliderLength] = useState(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const sliderItems = document.querySelectorAll(
      ".slider-item"
    ) as NodeListOf<Element>;
    setSliderLength(sliderItems.length);
    setSliderItemWidth((sliderItems[0] as HTMLElement).offsetWidth);
  }, [sliderItemWidth]);

  useEffect(() => {
    const sliderMain = document.querySelector(".slider-main") as HTMLDivElement;
    if (direction === 1) {
      if (index >= sliderLength) return;
      sliderMain.style.transform = `translateX(${positionX}px)`;
    } else {
      if (index < 0) return;
      sliderMain.style.transform = `translateX(${positionX}px)`;
    }
  }, [positionX]);

  function handleChangeSlide(direction: number) {
    setDirection(direction);
    if (direction === 1) {
      if (index >= sliderLength - 1) return;
      setIndex((index) => index + 1);
      setPositionX(positionX - sliderItemWidth);
    } else {
      if (index <= 0) return;
      setIndex((index) => index - 1);
      setPositionX(positionX + sliderItemWidth);
    }
  }
  return (
    <section id="blog" className="blog lg:px-[150px]">
      <LayoutContainer>
        <div className="flex items-center justify-between gap-10 slider">
          <IconArrowLeft onClick={() => handleChangeSlide(2)} />
          <div className="slider-wrapper">
            <div className="slider-main">
              {blogs?.map((item: IBlog) => (
                <div key={item.author} className="slider-item">
                  <BlogBackground image={item.image} />
                  <BlogContent
                    title={item.title}
                    desc={item.desc}
                    author={item.author}
                    position={item.position}
                  />
                </div>
              ))}
            </div>
          </div>
          <IconArrowRight onClick={() => handleChangeSlide(1)} />
        </div>
      </LayoutContainer>
    </section>
  );
};

export default Blog;
