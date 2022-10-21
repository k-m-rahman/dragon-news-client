import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const News = () => {
  const news = useLoaderData();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/news-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const { image_url, title, details, category_id } = news;

  const category = categories.find((ct) => ct.id === category_id);

  return (
    <Card className="text-start">
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{details}</Card.Text>
        <Link to={`/category/${category_id}`}>
          <Button variant="primary">Go to {category?.name}</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default News;
