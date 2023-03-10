import { rest } from 'msw';

export const handlers = [
  rest.get('/api/articles', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          title: '똑똑하게 브라우저 Polyfill 관리하기',
          description: '현대적인 JavaScript를 쓰면서도 넓은 범위의 기기를 지원하기 위한 Polyfill을 어떻게 똑똑하게 설정할 수 있는지 소개합니다.',
          createdAt: '2023. 1. 21',
          thumbnail: 'https://toss.tech/wp-content/uploads/2023/01/js_center.png',
          link: '/article/smart-polyfills',
        },
      ]),
    );
  }),
];
