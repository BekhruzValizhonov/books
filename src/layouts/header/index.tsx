import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Input from "@/components/Input";
import bg_image from "@/utils/images/bg_image.jpg";
import bookStore from "@/store/books";
import { observer } from "mobx-react-lite";
import Select from "@/components/Select";
import { categories } from "@/utils/mock/options";
import style from "./header.module.css";
import { Container } from "react-bootstrap";

const bgImage = { backgroundImage: `url(${bg_image})` };

const Header: FC = observer(() => {
  const [search, setSearch] = useState<string>("");
  const [sort, setSort] = useState<string>("relevance");
  const [category, setCategory] = useState<string>("all");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      bookStore.fetchBooks({ search, category, sort });
      navigate(
        `/search=${search.replace(/\s/g, "")}/category=${category}/sort=${sort}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      navigate(`/search=${search}/category=${category}/sort=${sort}`);
      bookStore.fetchBooks({ search, category, sort });
    } catch (error) {
      console.log(error);
    }
  }, [sort, category]);

  return (
    <div className={style.header} style={bgImage}>
      <Container>
        <div className={style.wrapper}>
          <h1 className="text-white text-center">Search for books</h1>
          <Form onSubmit={handleSubmit}>
            <Input
              search={search}
              onChange={(e) => setSearch(e.target.value)}
              holder="Enter book title"
              className="mb-3"
            />
          </Form>

          <Select
            className="mb-2"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option disabled>Categories</option>
            {categories.map((option) => (
              <option value={option} key={option} className={style.options}>
                {option}
              </option>
            ))}
          </Select>

          <Select
            className="mb-2"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option disabled>Sorting by</option>
            <option value="newest">Newest</option>
            <option value="relevance">Relevance </option>
          </Select>
        </div>
      </Container>
    </div>
  );
});

export default Header;
