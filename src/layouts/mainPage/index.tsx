import { FC, useEffect } from "react";
import BookCard from "@/components/Card";
import bookStore from "@/store/books";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import Loader from "@/components/Loader";
import Btn from "@/components/Button";
import style from "./main.module.css";

const Main: FC = observer(() => {
  const params = useParams();
  const search = params.search;
  const category = params.category;
  const sort = params.sort;

  useEffect(() => {
    if (search || category || sort) {
      bookStore.fetchBooks({ search, category, sort });
    }
  }, [bookStore.pageCount]);

  return (
    <div className={style.main_container}>
      <div className={`${style.cards_container} mt-5`}>
        {bookStore.spinner ? (
          <Loader animation="border" variant="primary" />
        ) : (
          bookStore?.books?.items?.map((el, idx) => (
            <BookCard elements={el} key={idx} />
          ))
        )}
      </div>
      {bookStore?.books?.items?.length > 0 && (
        <div className="text-center mt-5 mb-5">
          <Btn
            variant="primary"
            type="submit"
            title="Load more"
            onClick={() => bookStore.pageIncrement()}
          />
        </div>
      )}
    </div>
  );
});

export default Main;
