running this query:

```graphql
{
  AllHomes {
    address
    ... on Apartment {
      floor
    }
    ... on House {
      floors
    }
  }
}

```

should result in this data:

```json
{
  "data": {
    "AllHomes": [
      {
        "address": "dom",
        "floors": "3"
      },
      {
        "address": "apartment",
        "floor": "10"
      },
      {
        "address": "dom",
        "floors": "4"
      },
      {
        "address": "dom",
        "floors": "5"
      }
    ]
  }
}
```
