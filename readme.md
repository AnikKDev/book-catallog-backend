# live link

https://book-catallog-omega.vercel.app/

## API Routes

### User Routes

1. **Sign Up**:

   - Endpoint: `api/v1/auth/signup`
   - Method: `POST`

2. **Sign In**:

   - Endpoint: `api/v1/auth/signin`
   - Method: `POST`

3. **Get All Users**:

   - Endpoint: `api/v1/users`
   - Method: `GET`

4. **Get Single User**:

   - Endpoint: `api/v1/users/:id`
   - Method: `GET`
   - Example: `api/v1/users/60ecd837-85a8-4757-b4db-999f29d5aa2b`

5. **Update User**:

   - Endpoint: `api/v1/users/:id`
   - Method: `PATCH`

6. **Delete User**:

   - Endpoint: `api/v1/users/:id`
   - Method: `DELETE`

### Category Routes

1. **Create Category**:

   - Endpoint: `api/v1/categories/create-category`
   - Method: `POST`

2. **Get All Categories**:

   - Endpoint: `api/v1/categories`
   - Method: `GET`

3. **Get Single Category**:

   - Endpoint: `api/v1/categories/:id`
   - Method: `GET`
   - Example: `api/v1/categories/a9653b04-0be1-4ae8-9b2e-01f6c74e8a75`

4. **Update Category**:

   - Endpoint: `api/v1/categories/:id`
   - Method: `PATCH`

5. **Delete Category**:
   - Endpoint: `api/v1/categories/:id`
   - Method: `DELETE`

### Books Routes

1. **Create Book**:

   - Endpoint: `api/v1/books/create-book`
   - Method: `POST`

2. **Get All Books**:

   - Endpoint: `api/v1/books`
   - Method: `GET`

3. **Get Books By Category**:

   - Endpoint: `api/v1/books/:categoryId/category`
   - Method: `GET`

4. **Get Single Book**:

   - Endpoint: `api/v1/books/:id`
   - Method: `GET`

5. **Update Book**:

   - Endpoint: `api/v1/books/:id`
   - Method: `PATCH`

6. **Delete Book**:
   - Endpoint: `api/v1/books/:id`
   - Method: `DELETE`

### Orders Routes

1. **Create Order**:

   - Endpoint: `api/v1/orders/create-order`
   - Method: `POST`

2. **Get All Orders**:

   - Endpoint: `api/v1/orders`
   - Method: `GET`

3. **Get Single Order**:
   - Endpoint: `api/v1/orders/:orderId`
   - Method: `GET`
