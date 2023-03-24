interface IAccessInfo {
  country: string;
  accessViewStatus: string;
  embeddable: boolean;
}

interface ISaleInfo {
  country: string;
  isEbook: boolean;
  saleability: string;
}

interface ISearchInfo {
  textSnippet: string;
}

interface IImageLinks {
  smallThumbnail: string;
  thumbnail: string;
}

interface IIndustryIdentifiers {
  identifier: string;
  type: string;
}

interface IPanelizationSummary {
  containsEpubBubbles: boolean;
  containsImageBubbles: boolean;
}

interface IReadingModes {
  image: boolean;
  text: boolean;
}

interface IVolumeInfo {
  allowAnonLogging: boolean;
  authors: [string];
  canonicalVolumeLink: string;
  categories: [string];
  contentVersion: string;
  description: string;
  imageLinks: IImageLinks;
  industryIdentifiers: IIndustryIdentifiers[];
  infoLink: string;
  language: string;
  maturityRating: string;
  pageCount: number;
  panelizationSummary: IPanelizationSummary;
  previewLink: string;
  printType: string;
  publishedDate: string;
  publisher: string;
  readingModes: IReadingModes;
  title: string;
}

export interface IITems {
  accessInfo: IAccessInfo;
  etag: string;
  id: string;
  kind: string;
  saleInfo: ISaleInfo;
  searchInfo: ISearchInfo;
  selfLink: string;
  volumeInfo: IVolumeInfo;
}

export interface IBook {
  items: IITems[];
}
