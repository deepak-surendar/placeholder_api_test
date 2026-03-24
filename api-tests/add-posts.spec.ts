import { test, expect } from '@playwright/test';

test('add new post', async ({ request }) => {
    const titleText = 'This is post title text. Used for testing purposes',
        bodyText = 'This is post body text. Used for testing purposes',
        userIdNo = 11;
    
    const post = await request.post('/posts', {
        data: {
            title: titleText,
            body: bodyText,
            userId: userIdNo
        },
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    });
    expect(post.ok()).toBeTruthy();

    const postBody = await post.json();
    expect(postBody.title).toEqual(titleText);
    expect(postBody.body).toEqual(bodyText);
    expect(postBody.userId).toEqual(userIdNo);

    expect(postBody).toEqual(expect.objectContaining({
        title: titleText,
        body: bodyText,
        userId: userIdNo
    }));
});