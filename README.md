
# Mercado Libre's clone

This is a Mercado Libre's clone made it with Nextjs, Typescript, Axios, ReactQuery, Tailwind.


## Demo

[Demo](https://mercado-libre-clone-marcos-iorio.vercel.app/)


## Purpose

The porpuse of the webapp is to clone the design of the original app. The app has not functionality at all.
You can only search and view product info.
## Appendix

The tech stack used in the app is:

- React
- Next.js 12
- Typescript
- Tailwind
- Axios
- React-Query
- React-paginate
- React-image-magnfify
- Eslint
- Prettier



## API Reference

#### Get all items

```https
  GET https://api.mercadolibre.com/sites/MLA/search?q=${searchParam}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `search param` | `string` | **Required**. A string to make a search a retrive the products |

#### Get item

```https
  GET https://api.mercadolibre.com/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of the product to fetch data |

#### Get seller data

```https
  GET https://api.mercadolibre.com/users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of the seller to fetch data |

#### Get product attributes data

```https
  GET `https://api.mercadolibre.com/products/${id}`
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of the product to retrieve attributes |

All this information is here and how to use it


https://developers.mercadolibre.com.ar/en_us/api-docs

## Installation

Install my-project with npm

```bash
  npm clone https://github.com/Marcos-Iorio/mercado-libre-clone.git
  cd my-project

  npm Install

  npm run dev
```
