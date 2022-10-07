import React, { useEffect, useState } from "react";
import { images } from "../../assets";
import { client, urlFor } from "../../sanitySetup";

const BlogPost = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const blogQuery = '*[_type == "blog"]';
    client.fetch(blogQuery).then((data) => {
      setBlogs(data);
    });
  }, []);
  console.log(blogs);
  return (
    <>
      <div className="container">
        {blogs.map((item) => {
          return (
            <div className="col" key={item._id}>
              <h1>{item.title}</h1>
              <img src={urlFor(item.blogimage)} alt={item.blogimage.caption} />
            </div>
          );
        })}
        <img src={images.bgImage} alt="ss" />
      </div>
    </>
  );
};

export default BlogPost;
