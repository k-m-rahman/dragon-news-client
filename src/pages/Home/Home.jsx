import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../Shared/NewsCard/NewsCard";

const Home = () => {
  const allNews = useLoaderData();
  return (
    <div>
      <h4 className=" mb-5">Home page has {allNews.length} news</h4>
      {allNews.map((news) => (
        <NewsCard key={news._id} news={news}></NewsCard>
      ))}
    </div>
  );
};

export default Home;
