<img src = "./md/giphyme.gif" width = "100%" />

# API for the lightfilms repository.

# Setup

```sh
$git clone https://github.com/ssandry/lf-api.git
$cd lf-api
```

# Start

```sh
$npm run start # or yarn start
```

# Example of a GraphQL query

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

# Example of a GraphQL response

```json
{
  "data": {
    "getAllFilms": [
      {
        "id": "0",
        "title": "Male-female",
        "briefAbout": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia."
      }
    ]
  }
}
```