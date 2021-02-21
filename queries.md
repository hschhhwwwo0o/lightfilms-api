# GraphQL query examples

**Test queries here**

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

```graphql
{
  getAllFilms {
    id
    title
  }
}
```

```graphql
{
  getPerson(id: "0") {
    id
    name
    countries
  }
}
```