export interface StrapiAtrributes {
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface StrapiData<T> {
  id: number;
  attributes: StrapiAtrributes & T;
}

export interface StrapiPopulate<T> {
  data: StrapiData<T>[];
}

export interface StrapiPagination {
  page: number;
  pageSize: number;
  pageCounter: number;
  total: number;
}

export interface StrapiPaginationData<T> extends StrapiPopulate<T> {
  meta: { pagination: StrapiPagination };
}

export interface StrapiImage {
  data: {
    attributes: {
      publishedAt: string;
      createdAt: string;
      updatedAt: string;
      url: string;
      mime: string;
    };
  };
}
