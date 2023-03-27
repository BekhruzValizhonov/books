import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import bookStore from "@/store/books";
import { observer } from "mobx-react-lite";
import { Container, Row, Col } from "react-bootstrap";
import books from "@/store/books";
import Loader from "@/components/Loader";
import style from "./info.module.css";

const Info: FC = observer(() => {
  const { id } = useParams();
  const { book } = bookStore;
  const { spinner } = books;
  useEffect(() => bookStore.fetchSingleBook(id as string), [id]);

  return (
    <Container className="mt-5 mb-5">
      {spinner ? (
        <div className="text-center">
          <Loader animation="border" variant="primary" />
        </div>
      ) : (
        <Row>
          <Col md={"6"} sm={"12"} lg={"5"}>
            <img
              src={book?.volumeInfo?.imageLinks?.thumbnail}
              alt="404"
              className={style.images}
            />
          </Col>
          <Col md={"6"} sm={"12"} lg={"7"}>
            <div>
              {book?.volumeInfo?.authors?.map((author, idx) => (
                <p className="text-muted" key={idx}>
                  {author}
                </p>
              ))}
            </div>
            <div>
              <h3>{book?.volumeInfo?.title}</h3>
            </div>
            <div>
              {book?.volumeInfo?.categories?.map((category, idx) => (
                <p className="text-muted" key={idx}>
                  {category}
                </p>
              ))}
            </div>
            <div>
              <p className={style.description}>
                {book?.volumeInfo?.description}
              </p>
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
});

export default Info;
