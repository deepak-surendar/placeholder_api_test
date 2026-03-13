import { test, expect } from '@playwright/test';

test('JSONPlaceholder - get all posts', async ({ request }) => {
  const posts = await request.get('/posts');
  expect(posts.ok()).toBeTruthy();
  // posts.json().then(v => console.log(v));
});

test('JSONPlaceholder - get single post', async ({ request }) => {
  const posts = await request.get('/posts/1');
  expect(posts.ok()).toBeTruthy();
  posts.json().then(v => console.log(v));
});
