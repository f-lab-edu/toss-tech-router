export const REGEXP = {
  ROUTE_PARAMETER: /:(\w+)/g,
  URL_FRAGMENT: '([^\\/]+)',
};

export const BASE_URL = '/api';

export const API_URL = {
  ARTICLES: `${BASE_URL}/articles`,
  ARTICLE_DETAIL: `${BASE_URL}/article`,
};

export const API_MOCK = {
  ARTICLES: API_URL.ARTICLES,
  ARTICLE_DETAIL: `${API_URL.ARTICLE_DETAIL}/:articleId`,
};

export const ARTICLES = [
  {
    thumbnail:
      'https://toss.tech/wp-content/uploads/2023/01/js_center-300x150.png 300w, https://toss.tech/wp-content/uploads/2023/01/js_center-1024x512.png 1024w, https://toss.tech/wp-content/uploads/2023/01/js_center-768x384.png 768w, https://toss.tech/wp-content/uploads/2023/01/js_center.png 1200w',
    title: '똑똑하게 브라우저 Polyfill 관리하기',
    description: '현대적인 JavaScript를 쓰면서도 넓은 범위의 기기를 지원하기 위한 Polyfill을 어떻게 똑똑하게 설정할 수 있는지 소개합니다.',
    date: '2023. 1. 21',
    link: '/article/16',
  },
  {
    thumbnail:
      'https://toss.tech/wp-content/uploads/2022/12/01-1-300x150.png 300w, https://toss.tech/wp-content/uploads/2022/12/01-1-1024x512.png 1024w, https://toss.tech/wp-content/uploads/2022/12/01-1-768x384.png 768w, https://toss.tech/wp-content/uploads/2022/12/01-1.png 1200w',
    title: '토스증권 QA 문화 ‘통합테스트’를 아시나요? (feat. 해외주식)',
    description:
      '토스증권 해외주식 출시 전에 사내 임직원 대상으로 진행한 ‘통합테스트’에 대해 소개합니다. 통합테스트 진행 방식을 참고하여 간단한 규칙과 사용자 시나리오를 활용해 사용자의 반응을 미리 확인해 보세요.',
    date: '2022. 12. 12',
    link: '/article/15',
  },
  {
    thumbnail:
      'https://toss.tech/wp-content/uploads/2022/11/tech-article-nest-js-02-300x150.png 300w, https://toss.tech/wp-content/uploads/2022/11/tech-article-nest-js-02-1024x512.png 1024w, https://toss.tech/wp-content/uploads/2022/11/tech-article-nest-js-02-768x384.png 768w, https://toss.tech/wp-content/uploads/2022/11/tech-article-nest-js-02.png 1200w',
    title: 'NestJS 환경에 맞는 Custom Decorator 만들기',
    description:
      'NestJS에서 데코레이터를 만들기 위해서는 NestJS의 DI와 메타 프로그래밍 환경 등을 고려해야 합니다. 어떻게 하면 이러한 NestJS 환경에 맞는 데코레이터를 만들 수 있을지 고민해보았습니다.',
    date: '2022. 11. 22',
    link: '/article/14',
  },
  {
    thumbnail:
      'https://toss.tech/wp-content/uploads/2022/10/tech-article-ts-300x150.png 300w, https://toss.tech/wp-content/uploads/2022/10/tech-article-ts-1024x512.png 1024w, https://toss.tech/wp-content/uploads/2022/10/tech-article-ts-768x384.png 768w, https://toss.tech/wp-content/uploads/2022/10/tech-article-ts.png 1200w',
    title: 'TypeScript 타입 시스템 뜯어보기: 타입 호환성',
    description:
      '타입호환성은 무엇이며 왜 필요할까요? 타입호환이 지원되지 않는 경우가 존재한다는 것을 아셨나요? 평소 익숙했던 개념들에 대해 질문을 던져가며 TypeScript 타입 시스템에 관해 심도있게 알아보고자 합니다. ',
    date: '2022. 10. 26',
    link: '/article/13',
  },
  {
    thumbnail:
      'https://toss.tech/wp-content/uploads/2022/10/tech_M-300x150.png 300w, https://toss.tech/wp-content/uploads/2022/10/tech_M-1024x512.png 1024w, https://toss.tech/wp-content/uploads/2022/10/tech_M-768x384.png 768w, https://toss.tech/wp-content/uploads/2022/10/tech_M.png 1200w',
    title: '토스증권 QA Team을 소개합니다',
    description: '이 글은 토스증권 QA Team에 입사를 고려 중인 지원자들을 위해 작성된 글입니다. 토스증권 QA Manager 하는 역할과 일하는 방식은 어떻게 다를까요?',
    date: '2022. 10. 25',
    link: '/article/12',
  },
  {
    thumbnail:
      'https://toss.tech/wp-content/uploads/2022/10/techblog-11-node-js-300x150.png 300w, https://toss.tech/wp-content/uploads/2022/10/techblog-11-node-js-1024x512.png 1024w, https://toss.tech/wp-content/uploads/2022/10/techblog-11-node-js-768x384.png 768w, https://toss.tech/wp-content/uploads/2022/10/techblog-11-node-js.png 1200w',
    title: 'CommonJS와 ESM에 모두 대응하는 라이브러리 개발하기: exports field',
    description: 'Node.js에는 두 가지 Module System이 존재합니다. 토스 프론트엔드 챕터에서 운영하는 100개가 넘는 라이브러리들은 그것에 어떻게 대응하고 있을까요?',
    date: '2022. 10. 4',
    link: '/article/11',
  },
  {
    thumbnail:
      'https://toss.tech/wp-content/uploads/2022/06/techblog-10-test-code-300x150.png 300w, https://toss.tech/wp-content/uploads/2022/06/techblog-10-test-code-1024x512.png 1024w, https://toss.tech/wp-content/uploads/2022/06/techblog-10-test-code-768x384.png 768w, https://toss.tech/wp-content/uploads/2022/06/techblog-10-test-code.png 1200w',
    title: '테스트 의존성 관리로 높은 품질의 테스트 코드 유지하기',
    description:
      '혹시 테스트 코드에서도 의존성을 관리해본 적이 있으실까요? 해당 포스트에서는 Gradle의 java-test-fixtures 플러그인을 사용하여 테스트 의존성 관리를 통해 높은 품질의 테스트 코드를 유지하는 방법을 알아봅니다.',
    date: '2022. 6. 9',
    link: '/article/10',
  },
  {
    thumbnail:
      'https://toss.tech/wp-content/uploads/2022/05/techblog-09-error-handling-300x150.png 300w, https://toss.tech/wp-content/uploads/2022/05/techblog-09-error-handling-1024x512.png 1024w, https://toss.tech/wp-content/uploads/2022/05/techblog-09-error-handling-768x384.png 768w, https://toss.tech/wp-content/uploads/2022/05/techblog-09-error-handling.png 1200w',
    title: '에러 핸들링을 다른 클래스에게 위임하기 (Kotlin 100% 활용)',
    description: 'Kotlin의 Result로 MSA에서 에러가 전파되지 않는 안전한 환경을 만드는 방법을 알아봅니다.',
    date: '2022. 5. 14',
    link: '/article/9',
  },
  {
    thumbnail:
      'https://toss.tech/wp-content/uploads/2022/04/techblog-08-rest-docs-300x150.png 300w, https://toss.tech/wp-content/uploads/2022/04/techblog-08-rest-docs-1024x512.png 1024w, https://toss.tech/wp-content/uploads/2022/04/techblog-08-rest-docs-768x384.png 768w, https://toss.tech/wp-content/uploads/2022/04/techblog-08-rest-docs.png 1200w',
    title: 'Kotlin으로 DSL 만들기: 반복적이고 지루한 REST Docs 벗어나기',
    description:
      '토스페이먼츠에서는 API docs를 REST Docs를 사용해서 작성할 수 있도록 권장하고 있습니다. 이 글에서는 DSL을 통해서 반복적인 REST Docs 테스트 코드 작성을 줄일 수 있는 방법을 알아봅니다.',
    date: '2022. 4. 11',
    link: '/article/8',
  },
  {
    thumbnail:
      'https://toss.tech/wp-content/uploads/2022/02/techblog-07-jam-stack-300x150.png 300w, https://toss.tech/wp-content/uploads/2022/02/techblog-07-jam-stack-1024x512.png 1024w, https://toss.tech/wp-content/uploads/2022/02/techblog-07-jam-stack-768x384.png 768w, https://toss.tech/wp-content/uploads/2022/02/techblog-07-jam-stack.png 1200w',
    title: '조금만 신경써서 초기 렌더링 빠르게 하기 (feat. JAM Stack)',
    description:
      'SPA(Single Page Application) 구조로 웹 프론트엔드 애플리케이션이 개발되면서 초기 렌더링 속도는 프런트엔드 개발자에게 중요한 과제 중 하나가 되었습니다. 사용자 경험에 영향을 줄 수 있는 가장 큰 요소 중 하나가 바로 속도이기 때문입니다.',
    date: '2022. 2. 9',
    link: '/article/7',
  },
  {
    thumbnail:
      'https://toss.tech/wp-content/uploads/2021/10/techblog-06-agility-300x150.png 300w, https://toss.tech/wp-content/uploads/2021/10/techblog-06-agility-1024x512.png 1024w, https://toss.tech/wp-content/uploads/2021/10/techblog-06-agility-768x384.png 768w, https://toss.tech/wp-content/uploads/2021/10/techblog-06-agility.png 1200w',
    title: '개발자의 애질리티',
    description: '이 글은 토스페이먼츠에 입사하신, 혹은 입사를 고려 중인 개발자분들을 위해 작성된 글입니다. 애자일하게 일한다는 것은 어떠한 의미일까요?',
    date: '2021. 10. 14',
    link: '/article/6',
  },
  {
    thumbnail:
      'https://toss.tech/wp-content/uploads/2021/05/techblog-05-template-literal-300x150.png 300w, https://toss.tech/wp-content/uploads/2021/05/techblog-05-template-literal-1024x512.png 1024w, https://toss.tech/wp-content/uploads/2021/05/techblog-05-template-literal-768x384.png 768w, https://toss.tech/wp-content/uploads/2021/05/techblog-05-template-literal.png 1200w',
    title: 'Template Literal Types로 타입 안전하게 코딩하기',
    description: 'TypeScript 코드베이스의 타입 안전성을 한 단계 올려줄 수 있는 Template Literal Type의 뜻과 응용에 대해 알아봅니다.',
    date: '2021. 5. 14',
    link: '/article/5',
  },
  {
    thumbnail:
      'https://toss.tech/wp-content/uploads/2021/05/techblog-04-yarn-berry-300x150.png 300w, https://toss.tech/wp-content/uploads/2021/05/techblog-04-yarn-berry-1024x512.png 1024w, https://toss.tech/wp-content/uploads/2021/05/techblog-04-yarn-berry-768x384.png 768w, https://toss.tech/wp-content/uploads/2021/05/techblog-04-yarn-berry.png 1200w',
    title: 'node_modules로부터 우리를 구원해 줄 Yarn Berry',
    description: '토스 프론트엔드 레포지토리 대부분에서 사용하고 있는 패키지 매니저 Yarn Berry. 채택하게 된 배경과 사용하면서 좋았던 점을 공유합니다.',
    date: '2021. 5. 7',
    link: '/article/4',
  },
  {
    thumbnail:
      'https://toss.tech/wp-content/uploads/2021/05/techblog-03-jscodeshift-300x150.png 300w, https://toss.tech/wp-content/uploads/2021/05/techblog-03-jscodeshift-1024x512.png 1024w, https://toss.tech/wp-content/uploads/2021/05/techblog-03-jscodeshift-768x384.png 768w, https://toss.tech/wp-content/uploads/2021/05/techblog-03-jscodeshift.png 1200w',
    title: 'JSCodeShift로 기술 부채 청산하기',
    description: '기술 부채는 개발할수록 쌓여만 갑니다. 프론트엔드 챕터가 JSCodeShift를 이용하여 순식간에 100개 서비스의 기술 부채를 해결한 경험을 소개합니다.',
    date: '2021. 5. 4',
    link: '/article/3',
  },
  {
    thumbnail:
      'https://toss.tech/wp-content/uploads/2021/04/techblog-02-webcash-300x150.png 300w, https://toss.tech/wp-content/uploads/2021/04/techblog-02-webcash-1024x512.png 1024w, https://toss.tech/wp-content/uploads/2021/04/techblog-02-webcash-768x384.png 768w, https://toss.tech/wp-content/uploads/2021/04/techblog-02-webcash.png 1200w',
    title: '웹 서비스 캐시 똑똑하게 다루기',
    description: '웹 성능을 위해 꼭 필요한 캐시, 제대로 설정하기 쉽지 않습니다. 토스 프론트엔드 챕터에서 올바르게 캐시를 설정하기 위한 노하우를 공유합니다.',
    date: '2021. 4. 29',
    link: '/article/2',
  },
  {
    thumbnail:
      'https://toss.tech/wp-content/uploads/2021/04/techblog-01-about-fechapter-300x150.png 300w, https://toss.tech/wp-content/uploads/2021/04/techblog-01-about-fechapter-1024x512.png 1024w, https://toss.tech/wp-content/uploads/2021/04/techblog-01-about-fechapter-768x384.png 768w, https://toss.tech/wp-content/uploads/2021/04/techblog-01-about-fechapter.png 1200w',
    title: '토스 프론트엔드 챕터를 소개합니다!',
    description: '토스에서 프론트엔드 개발자가 일하는 방법과 맡고 있는 역할에 대해 소개드립니다.',
    date: '2021. 4. 28',
    link: '/article/1',
  },
];

export const ARTICLE_DETAILS = [
  {
    thumbnail:
      'https://toss.tech/wp-content/uploads/2023/01/js_center-300x150.png 300w, https://toss.tech/wp-content/uploads/2023/01/js_center-1024x512.png 1024w, https://toss.tech/wp-content/uploads/2023/01/js_center-768x384.png 768w, https://toss.tech/wp-content/uploads/2023/01/js_center.png 1200w',
    title: '똑똑하게 브라우저 Polyfill 관리하기',
    writer: {
      image: 'https://wp.toss.tech/wp-content/uploads/2021/06/E01JAGTHP8R-U01K6L12VSL-0974fc35250c-512-312x312.png',
      name: '박서진',
      job: 'ㆍFrontend Developer',
      date: '2023. 1. 21',
    },
    description:
      '토스 앱은 넓은 범위의 기기를 지원하면서도 현대적인 JavaScript를 이용해서 개발되고 있습니다. 그렇지만 최신 JavaScript를 오래된 브라우저 위에서 실행하기 위해서는 “Polyfill” 문제를 해결해야 하는데요.',
    id: 16,
  },
  {
    thumbnail:
      'https://toss.tech/wp-content/uploads/2022/12/01-1-300x150.png 300w, https://toss.tech/wp-content/uploads/2022/12/01-1-1024x512.png 1024w, https://toss.tech/wp-content/uploads/2022/12/01-1-768x384.png 768w, https://toss.tech/wp-content/uploads/2022/12/01-1.png 1200w',
    title: '토스증권 QA 문화 ‘통합테스트’를 아시나요? (feat. 해외주식)',
    writer: {
      image: 'https://toss.tech/wp-content/uploads/2022/12/E01JAGTHP8R-U01JNUFQ6JG-00b732b78f8e-512-312x312.png',
      name: '황채은',
      job: 'ㆍQA Manager',
      date: '2022. 12. 12',
    },
    description: '안녕하세요.&nbsp;토스증권 QA팀에서 일하고 있는 QA Manager&nbsp;황채은입니다.',
    id: 15,
  },
  {
    thumbnail:
      'https://toss.tech/wp-content/uploads/2022/11/tech-article-nest-js-02-300x150.png 300w, https://toss.tech/wp-content/uploads/2022/11/tech-article-nest-js-02-1024x512.png 1024w, https://toss.tech/wp-content/uploads/2022/11/tech-article-nest-js-02-768x384.png 768w, https://toss.tech/wp-content/uploads/2022/11/tech-article-nest-js-02.png 1200w',
    title: 'NestJS 환경에 맞는 Custom Decorator 만들기',
    writer: { image: 'https://toss.tech/wp-content/uploads/2022/11/IMG_1399-312x312.jpg', name: '송현지', job: 'ㆍNode.js Developer', date: '2022. 11. 22' },
    description:
      '데코레이터는 비즈니스와 상관 없는 로직들을 숨기면서 기능을 변경하거나 확장할 수 있게 합니다. 또한 여러 클래스에서 반복되는 공통 관심사가 있을 때 데코레이터를 사용하면 중복된 코드를 줄이고 코드를 모듈 단위로 관리하는 효과를 거둘 수 있습니다.',
    id: 14,
  },
  {
    thumbnail:
      'https://toss.tech/wp-content/uploads/2022/10/tech-article-ts-300x150.png 300w, https://toss.tech/wp-content/uploads/2022/10/tech-article-ts-1024x512.png 1024w, https://toss.tech/wp-content/uploads/2022/10/tech-article-ts-768x384.png 768w, https://toss.tech/wp-content/uploads/2022/10/tech-article-ts.png 1200w',
    title: 'TypeScript 타입 시스템 뜯어보기: 타입 호환성',
    writer: { image: 'https://toss.tech/wp-content/uploads/2022/10/profile_bm-312x312.png', name: '김병묵', job: 'ㆍNode.js Developer', date: '2022. 10. 26' },
    description: '',
    id: 13,
  },
  {
    thumbnail:
      'https://toss.tech/wp-content/uploads/2022/10/tech_M-300x150.png 300w, https://toss.tech/wp-content/uploads/2022/10/tech_M-1024x512.png 1024w, https://toss.tech/wp-content/uploads/2022/10/tech_M-768x384.png 768w, https://toss.tech/wp-content/uploads/2022/10/tech_M.png 1200w',
    title: '토스증권 QA Team을 소개합니다',
    writer: {
      image: 'https://toss.tech/wp-content/uploads/2022/10/E01JAGTHP8R-U01JV29PUE5-03c4e2f93d84-512-312x312.png',
      name: '곽수정',
      job: 'ㆍQA Manager',
      date: '2022. 10. 25',
    },
    description:
      '안녕하세요. 저는 3년 전 토스의 첫 QA Manager로 입사해서 현재 토스증권 QA팀에서 일하고 있는 곽수정입니다. 길다면 긴 3년이란 시간 동안 즐겁고 재밌게 일할 수 있었던 토스와 토스증권의 QA팀을 소개해보려고 해요.',
    id: 12,
  },
  {
    thumbnail:
      'https://toss.tech/wp-content/uploads/2022/10/techblog-11-node-js-300x150.png 300w, https://toss.tech/wp-content/uploads/2022/10/techblog-11-node-js-1024x512.png 1024w, https://toss.tech/wp-content/uploads/2022/10/techblog-11-node-js-768x384.png 768w, https://toss.tech/wp-content/uploads/2022/10/techblog-11-node-js.png 1200w',
    title: 'CommonJS와 ESM에 모두 대응하는 라이브러리 개발하기: exports field',
    writer: { image: 'https://toss.tech/wp-content/uploads/2022/10/IMG_6487-scaled-312x312.jpg', name: '장호승', job: 'ㆍFrontend Developer', date: '2022. 10. 4' },
    description:
      '토스 프론트엔드 챕터에서는 개발 생산성을 극대화하기 위해 코드를 지속적으로 라이브러리로 만들고 있습니다. 그 결과 지금은 100개가 넘는 라이브러리를 운영하고 있습니다.',
    id: 11,
  },
  {
    thumbnail:
      'https://toss.tech/wp-content/uploads/2022/06/techblog-10-test-code-300x150.png 300w, https://toss.tech/wp-content/uploads/2022/06/techblog-10-test-code-1024x512.png 1024w, https://toss.tech/wp-content/uploads/2022/06/techblog-10-test-code-768x384.png 768w, https://toss.tech/wp-content/uploads/2022/06/techblog-10-test-code.png 1200w',
    title: '테스트 의존성 관리로 높은 품질의 테스트 코드 유지하기',
    writer: { image: 'https://secure.gravatar.com/avatar/b7c03d670c9c04da8a2374d37ee5dfa7?s=312&d=mm&r=g', name: '양권성', job: 'ㆍServer Developer', date: '2022. 6. 9' },
    description: '테스트 코드는 애플리케이션 코드 못지 않게 높은 품질을 유지해야 합니다.',
    id: 10,
  },
  {
    thumbnail:
      'https://toss.tech/wp-content/uploads/2022/05/techblog-09-error-handling-300x150.png 300w, https://toss.tech/wp-content/uploads/2022/05/techblog-09-error-handling-1024x512.png 1024w, https://toss.tech/wp-content/uploads/2022/05/techblog-09-error-handling-768x384.png 768w, https://toss.tech/wp-content/uploads/2022/05/techblog-09-error-handling.png 1200w',
    title: '에러 핸들링을 다른 클래스에게 위임하기 (Kotlin 100% 활용)',
    writer: {
      image: 'https://toss.tech/wp-content/uploads/2022/04/E01JAGTHP8R-U01JGK1JWJX-867cb0c757f7-512-312x312.png',
      name: '한규주',
      job: 'ㆍServer Developer',
      date: '2022. 5. 14',
    },
    description: '아래와 같은 서비스 호출 흐름이 있다고 가정해보겠습니다.',
    id: 9,
  },
  {
    thumbnail:
      'https://toss.tech/wp-content/uploads/2022/04/techblog-08-rest-docs-300x150.png 300w, https://toss.tech/wp-content/uploads/2022/04/techblog-08-rest-docs-1024x512.png 1024w, https://toss.tech/wp-content/uploads/2022/04/techblog-08-rest-docs-768x384.png 768w, https://toss.tech/wp-content/uploads/2022/04/techblog-08-rest-docs.png 1200w',
    title: 'Kotlin으로 DSL 만들기: 반복적이고 지루한 REST Docs 벗어나기',
    writer: {
      image: 'https://toss.tech/wp-content/uploads/2022/04/E01JAGTHP8R-U01JGK1JWJX-867cb0c757f7-512-312x312.png',
      name: '한규주',
      job: 'ㆍServer Developer',
      date: '2022. 4. 11',
    },
    description: 'REST Docs 테스트 코드량을 70% 줄여주는 DSL 개발기읽는 데 걸리는 시간: 6분',
    id: 8,
  },
  {
    thumbnail:
      'https://toss.tech/wp-content/uploads/2022/02/techblog-07-jam-stack-300x150.png 300w, https://toss.tech/wp-content/uploads/2022/02/techblog-07-jam-stack-1024x512.png 1024w, https://toss.tech/wp-content/uploads/2022/02/techblog-07-jam-stack-768x384.png 768w, https://toss.tech/wp-content/uploads/2022/02/techblog-07-jam-stack.png 1200w',
    title: '조금만 신경써서 초기 렌더링 빠르게 하기 (feat. JAM Stack)',
    writer: { image: 'https://toss.tech/wp-content/uploads/2021/10/profile-312x312.jpg', name: '한재엽', job: 'ㆍFrontend Developer', date: '2022. 2. 9' },
    description:
      'SPA(Single Page Application) 구조로 웹 프론트엔드 애플리케이션이 개발되면서 초기 렌더링 속도는 프런트엔드 개발자에게 중요한 과제 중 하나가 되었습니다. 사용자 경험에 영향을 줄 수 있는 가장 큰 요소 중 하나가 바로 속도이기 때문입니다. 이번 개선은 Web Vitals 지표를 중심으로 측정했습니다.',
    id: 7,
  },
  {
    thumbnail:
      'https://toss.tech/wp-content/uploads/2021/10/techblog-06-agility-300x150.png 300w, https://toss.tech/wp-content/uploads/2021/10/techblog-06-agility-1024x512.png 1024w, https://toss.tech/wp-content/uploads/2021/10/techblog-06-agility-768x384.png 768w, https://toss.tech/wp-content/uploads/2021/10/techblog-06-agility.png 1200w',
    title: '개발자의 애질리티',
    writer: { image: 'https://toss.tech/wp-content/uploads/2021/10/mars-312x312.png', name: '강병훈', job: 'ㆍHead of Technology', date: '2021. 10. 14' },
    description: '이 글은 토스페이먼츠에 입사하신, 혹은 입사를 고려 중인 개발자분들을 위해 작성된 글입니다.',
    id: 6,
  },
  {
    thumbnail:
      'https://toss.tech/wp-content/uploads/2021/05/techblog-05-template-literal-300x150.png 300w, https://toss.tech/wp-content/uploads/2021/05/techblog-05-template-literal-1024x512.png 1024w, https://toss.tech/wp-content/uploads/2021/05/techblog-05-template-literal-768x384.png 768w, https://toss.tech/wp-content/uploads/2021/05/techblog-05-template-literal.png 1200w',
    title: 'Template Literal Types로 타입 안전하게 코딩하기',
    writer: {
      image: 'https://wp.toss.tech/wp-content/uploads/2021/06/E01JAGTHP8R-U01K6L12VSL-0974fc35250c-512-312x312.png',
      name: '박서진',
      job: 'ㆍFrontend Developer',
      date: '2021. 5. 14',
    },
    description:
      '2020년 11월 TypeScript 4.1이 출시되면서 “Template Literal Type”을 사용할 수 있게 되었습니다. TypeScript로 JSON Parser를 만들거나, document.querySelector 의 결과 타입을 추론할 수 있게 되어 화제가 되었는데요. 이번 아티클에서는 Template Literal Type이란 무엇인지, 이를 바탕으로 어떻게 그런 결과물을 만들 수 있었는지 간단히 예시로 소개드리고자 합니다.',
    id: 5,
  },
  {
    thumbnail:
      'https://toss.tech/wp-content/uploads/2021/05/techblog-04-yarn-berry-300x150.png 300w, https://toss.tech/wp-content/uploads/2021/05/techblog-04-yarn-berry-1024x512.png 1024w, https://toss.tech/wp-content/uploads/2021/05/techblog-04-yarn-berry-768x384.png 768w, https://toss.tech/wp-content/uploads/2021/05/techblog-04-yarn-berry.png 1200w',
    title: 'node_modules로부터 우리를 구원해 줄 Yarn Berry',
    writer: {
      image: 'https://wp.toss.tech/wp-content/uploads/2021/06/E01JAGTHP8R-U01K6L12VSL-0974fc35250c-512-312x312.png',
      name: '박서진',
      job: 'ㆍFrontend Developer',
      date: '2021. 5. 7',
    },
    description:
      '토스 프론트엔드 챕터에서는 지난해부터 의존성을 관리하기 위해 Yarn Berry(v2)를 도입했습니다. 처음에는 일부 레포지토리부터 시작하여, 현재는 대부분의 레포지토리에 Yarn Berry가 적용되어 있는데요. 토스팀이 새로운 패키지 관리 시스템을 도입하게 된 배경과 사용하면서 좋았던 점을 테크 블로그를 통해 공유합니다.',
    id: 4,
  },
  {
    thumbnail:
      'https://toss.tech/wp-content/uploads/2021/05/techblog-03-jscodeshift-300x150.png 300w, https://toss.tech/wp-content/uploads/2021/05/techblog-03-jscodeshift-1024x512.png 1024w, https://toss.tech/wp-content/uploads/2021/05/techblog-03-jscodeshift-768x384.png 768w, https://toss.tech/wp-content/uploads/2021/05/techblog-03-jscodeshift.png 1200w',
    title: 'JSCodeShift로 기술 부채 청산하기',
    writer: {
      image: 'https://wp.toss.tech/wp-content/uploads/2021/06/E01JAGTHP8R-U01JA15NFDL-b3979cc31718-512-312x312.png',
      name: '박지우',
      job: 'ㆍFrontend Developer',
      date: '2021. 5. 4',
    },
    description:
      '토스 프론트엔드 챕터에서는 100개 이상의 서비스들이 작은 패키지 단위로 쪼개져 활발하게 개발되고 있는데요. 공통으로 사용하는 라이브러리에서 인터페이스가 변경되는 Breaking Change가 발생하면, 의존하고 있는 모든 서비스의 코드를 수정해야 했습니다. 관리하는 코드베이스가 점점 커지면서 해야 하는 작업의 양도 계속 늘어나고는 했습니다.',
    id: 3,
  },
  {
    thumbnail:
      'https://toss.tech/wp-content/uploads/2021/04/techblog-02-webcash-300x150.png 300w, https://toss.tech/wp-content/uploads/2021/04/techblog-02-webcash-1024x512.png 1024w, https://toss.tech/wp-content/uploads/2021/04/techblog-02-webcash-768x384.png 768w, https://toss.tech/wp-content/uploads/2021/04/techblog-02-webcash.png 1200w',
    title: '웹 서비스 캐시 똑똑하게 다루기',
    writer: {
      image: 'https://wp.toss.tech/wp-content/uploads/2021/06/E01JAGTHP8R-U01K6L12VSL-0974fc35250c-512-312x312.png',
      name: '박서진',
      job: 'ㆍFrontend Developer',
      date: '2021. 4. 29',
    },
    description:
      '토스 프론트엔드 챕터에서는 웹 성능을 최대한으로 높이기 위해 HTTP 캐시를 적극적으로 사용하고 있습니다. 캐시를 잘못 관리했을 때, 원하는 시점에 캐시가 사라지지 않을 수 있습니다. 필요 이상으로 HTTP 요청이 발생하기도 합니다.',
    id: 2,
  },
  {
    thumbnail:
      'https://toss.tech/wp-content/uploads/2021/04/techblog-01-about-fechapter-300x150.png 300w, https://toss.tech/wp-content/uploads/2021/04/techblog-01-about-fechapter-1024x512.png 1024w, https://toss.tech/wp-content/uploads/2021/04/techblog-01-about-fechapter-768x384.png 768w, https://toss.tech/wp-content/uploads/2021/04/techblog-01-about-fechapter.png 1200w',
    title: '토스 프론트엔드 챕터를 소개합니다!',
    writer: {
      image: 'https://wp.toss.tech/wp-content/uploads/2021/06/E01JAGTHP8R-U01K6L12VSL-0974fc35250c-512-312x312.png',
      name: '박서진',
      job: 'ㆍFrontend Developer',
      date: '2021. 4. 28',
    },
    description:
      '안녕하세요. 토스 프론트엔드 챕터 블로그에 오신 것을 환영합니다. 앞으로 토스팀에서 프론트엔드 개발을 하면서 생기는 이야기들을 정리하여 블로그로 전해드리려고 합니다.',
    id: 1,
  },
];
