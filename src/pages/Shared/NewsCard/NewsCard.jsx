import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { _id, total_view, title, author, image_url, details, rating } = news;

  const handleBookmark = () => {};
  return (
    <Card className="mb-5 text-start">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <div className="d-flex gap-3 align-items-center">
          <Image
            style={{ height: "50px" }}
            roundedCircle
            src={author?.img}
          ></Image>
          <div className=" d-flex flex-column ">
            <span>
              {" "}
              <small>{author?.name}</small>{" "}
            </span>
            <span>
              {" "}
              <small>{author?.published_date}</small>{" "}
            </span>
          </div>
        </div>
        <div className="d-flex gap-1">
          <FaRegBookmark
            onClick={handleBookmark}
            className="cursor-pointer"
          ></FaRegBookmark>
          <FaShareAlt className="cursor-pointer"></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Image className="mt-2 mb-4" src={image_url} fluid></Image>
        <Card.Text>
          {details?.length > 250 ? (
            <p>
              {" "}
              {details.slice(0, 250) + "..."}{" "}
              <Link to={`/news/${_id}`}>Read More</Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between">
        <div className="d-flex gap-2 align-items-center">
          <FaStar className="text-warning"></FaStar>
          <span>{rating?.number}</span>
        </div>
        <div className="d-flex gap-2 align-items-center">
          <FaEye></FaEye>
          <span>{total_view}</span>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
