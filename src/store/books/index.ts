import axios from "axios";
import { makeAutoObservable, runInAction } from "mobx";
import { IParams } from "@/types/param";
import { IBook, IITems } from "@/types/book";

class Book {
  books: IBook = { items: [] };
  book = {} as IITems;
  pageCount: number = 10;
  spinner: boolean = false;
  constructor() {
    makeAutoObservable(this);
  }

  pageIncrement() {
    if (this.pageCount === 40) return;
    runInAction(() => {
      this.pageCount += 10;
    });
  }

  fetchBooks({ search, category, sort }: IParams) {
    try {
      this.spinner = true;
      axios
        .get(
          `${process.env.REACT_APP_BASE_URL}/volumes?q=${search}+printType=${category}&orderBy=${sort}&maxResults=${this.pageCount}&key=${process.env.REACT_APP_MY_API_KEY}`
        )
        .then((res) => {
          // Qilinadigan ishla
          // docker, server i yuborish
          runInAction(() => {
            this.books.items = res.data.items;
          });
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => (this.spinner = false));
    } catch (error) {
      console.log(error);
    }
  }

  fetchSingleBook(id: string) {
    try {
      this.spinner = true;
      axios
        .get(
          `${process.env.REACT_APP_BASE_URL}/volumes/${id}?key=${process.env.REACT_APP_MY_API_KEY}`
        )
        .then((res) => {
          runInAction(() => {
            this.book = res.data;
          });
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => (this.spinner = false));
    } catch (error) {
      console.log(error);
    }
  }
}

export default new Book();
