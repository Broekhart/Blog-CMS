import { defineDb, defineTable, column, NOW } from 'astro:db';

const User = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    username: column.text(),
    email: column.text(),
    password: column.text(),
    createdAt: column.date({ default: NOW }),
  },
});

const Post = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    authorId: column.text({ references: () => User.columns.id }),
    body: column.text(),
    category: column.text({ optional: true }),
    published: column.date({ default: NOW }),
  },
});

export default defineDb({
  tables: { Post, User },
});
