# Customizing Queries

The lucid_custom_queries branch is for my tutorial on [customizing database queries](https://www.youtube.com/watch?v=lzhHjE6Ry3c) based on query parameters sent from the front end.

This sort of customization helps us respond to user input and keeps our API routes more reusable.

[Subscribe to the channel](https://www.youtube.com/channel/UCF5w1QdWroWOoxxXMgp88AQ?sub_confirmation=1) to catch all my videos. I publish new tutorials throughout the week on VueJS and NodeJS / AdonisJS.

## Getting Started

Once you clone the repo, install dependencies and run migrations, you'll need to add some data to your database.

Use a tool like Postman to add a few customers, projects and tasks.

```bash
# Clone the project
git clone https://github.com/patrickodacre/simple-api-adonis-js.git

# If on Master branch...
git checkout lucid_custom_queries

npm install

# Run migrations
adonis migration:run
```
