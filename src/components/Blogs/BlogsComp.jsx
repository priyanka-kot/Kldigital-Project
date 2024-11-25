import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/blog/blog1.png";
import Img2 from "../../assets/blog/blog2.png";
import Img3 from "../../assets/blog/blog3.png";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Personal development and lifestyle blogs",
    description:
      "“Personal development and lifestyle blogs focus on self-improvement, offering advice, tips, and insights on various aspects of life, such as personal growth, health and wellness, relationships, productivity, and happiness. .",
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 2,
    image: Img2,
    title: "Niche expertise blogs",
    description:
      "“Blogs that delve deep into a specific niche or industry can be highly successful. By focusing on a specialized topic, such as technology, finance, fashion, music, fitness, parenting, product marketing, or B2B marketing, bloggers can establish themselves as authoritative voices in their respective fields. ",
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 3,
    image: Img3,
    title: "Realtime analytics",
    description:
      "“Real-time analytics is the process of analyzing and responding to data as it's generated, to gain insights that can be used to make quick decisions. It's built on data streaming, which is the process of processing data as it arrives ",
    author: "Someone",
    date: "April 22, 2022",
  },
];

const BlogsComp = () => {
  return (
    <>
      
      <span id="Blogs"></span>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-white py-10 pb-14">
        <section data-aos="fade-up" className="container ">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-semibold">
            Our Blogs
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
          <div className="text-center">
            <button className="primary-btn">View All Posts</button>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;