import React from "react";
import BookCard from "@/components/Card";
import bookStore from "@/store/books";
import Loader from "@/components/Loader";
import Btn from "@/components/Button";
import { observer } from "mobx-react-lite";
import style from "./books.module.css";

const Books = observer(() => {
  return (
    <>
      <div className={`${style.container} mt-5`}>
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
    </>
  );
});

export default Books;
