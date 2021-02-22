# GraphQL query examples

**Test queries here**

## Get certain fields of all persons

```graphql
{
  getAllPersons {
    id
    name
    countries
    type
  }
}
```

## Get certain fields of all films

```graphql
{
  getAllFilms {
    id
    title
  }
}
```

## Get certain fields of a certain person

```graphql
{
  getPerson(id: "0") {
    id
    name
    countries
  }
}
```

## Get certain fields of a certain film

```graphql
{
  getFilm(id: "0") {
    id
    title
  }
}
```