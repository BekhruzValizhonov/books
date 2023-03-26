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
          `https://www.googleapis.com/books/v1/volumes?q=${search}+printType=${category}&orderBy=${sort}&maxResults=${this.pageCount}&key=AIzaSyCCdslo43Rxy5pKZulL40KK2GO4qjwxBts`
        )
        .then((res) => {
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
          `https://www.googleapis.com/books/v1/volumes/${id}?key=AIzaSyCCdslo43Rxy5pKZulL40KK2GO4qjwxBts`
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
