# GraphQL Queries and Mutations for Posts

## 1. Get All Posts

```graphql
query {
  posts {
    _id
    title
    text
    author
    createdAt
    updatedAt
  }
}
```

## 2. Get a Specific Post by ID

```graphql
query {
  post(id: "your-post-id-here") {
    _id
    title
    text
    author
    createdAt
    updatedAt
  }
}
```

## 3. Create a New Post

```graphql
mutation {
  createPost(
    input: { title: "Новий пост", text: "Текст нового посту", author: "Автор" }
  ) {
    _id
    title
    text
    author
  }
}
```

## 4. Update a Post

```graphql
mutation {
  updatePost(
    id: "your-post-id-here"
    input: {
      title: "Оновлений заголовок"
      text: "Оновлений текст"
      author: "Оновлений автор"
    }
  ) {
    _id
    title
    text
    author
  }
}
```

## 5. Delete a Post

```graphql
mutation {
  deletePost(id: "your-post-id-here") {
    _id
    title
  }
}
```
