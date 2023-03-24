import { FC } from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { IITems } from "@/types/book";

interface ICardProps {
  elements: IITems;
}

const imageStyle = {
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "15rem",
  height: "200px",
};

const BookCard: FC<ICardProps> = ({ elements }) => {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(`/info/${elements?.id}`)}
      style={{ width: "15rem", cursor: "pointer" }}
      className="mt-3 mb-3"
    >
      <Card.Img
        variant="top"
        src={elements?.volumeInfo?.imageLinks?.thumbnail}
        style={imageStyle}
      />
      <Card.Body>
        {elements?.volumeInfo?.categories?.map((category, idx) => (
          <Card.Text key={idx} className="text-muted">
            {category}
          </Card.Text>
        ))}
        <Card.Title>{elements?.volumeInfo?.title}</Card.Title>
        {elements?.volumeInfo?.authors?.map((author, idx) => (
          <span className="text-muted" key={idx}>
            {author}
          </span>
        ))}
      </Card.Body>
    </Card>
  );
};

export default BookCard;
