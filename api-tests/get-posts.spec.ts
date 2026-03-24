import { test, expect } from '@playwright/test';

test('get all posts', async ({ request }) => {
  const posts = await request.get('/posts');
  expect(posts.ok()).toBeTruthy();
});

test('get a single post', async ({ request }) => {
  const posts = await request.get('/posts/1');
  expect(posts.ok()).toBeTruthy();
});
