import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Input from "@/components/Input";
import bg_image from "@/utils/images/bg_image.jpg";
import bookStore from "@/store/books";
import { observer } from "mobx-react-lite";
import Select from "@/components/Select";
import { categories } from "@/utils/mock/options";
import { Container } from "react-bootstrap";
import style from "./header.module.css";

const bgImage = { backgroundImage: `url(${bg_image})` };

const Header: FC = observer(() => {
  const params = useParams();
  const [search, setSearch] = useState<string>(
    !params.search ? " " : params.search
  );
  const [sort, setSort] = useState<string>(
    !params.sort ? "relevance" : params.sort
  );
  const [category, setCategory] = useState<string>(
    !params.category ? "all" : params.category
  );
  const navigate = useNavigate();

  useEffect(() => navigate(`/main/${search}/${category}/${sort}`), []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      navigate(`/main/${search.trim()}/${category}/${sort}`);
      bookStore.fetchBooks({ search, category, sort });
    } catch (error) {
      console.log(error);
    }
  };

  const handleCategoriesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
    navigate(`/main/${search}/${e.target.value}/${sort}`);
    bookStore.fetchBooks({ search, category: e.target.value, sort });
  };

  const handleSortsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value);
    navigate(`/main/${search}/${category}/${e.target.value}`);
    bookStore.fetchBooks({ search, category, sort: e.target.value });
  };

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
            onChange={handleCategoriesChange}
          >
            <option disabled>Categories</option>
            {categories.map((option) => (
              <option value={option} key={option} className={style.options}>
                {option}
              </option>
            ))}
          </Select>

          <Select className="mb-2" value={sort} onChange={handleSortsChange}>
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
