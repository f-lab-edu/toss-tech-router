<br />
<div align="center">
  <img src="https://i.imgur.com/cdzrwrt.png" width="500" />
</div>
<br />
<br />

# 토스 테크 라우터 (SPA)
Javascript로 [toss.tech](https://toss.tech) 사이트를 구현하고, 그 과정을 기록했습니다.  
<br />

# 프로젝트 실행 방법 🧑🏻‍💻  
### CLI
```bash
git clone https://github.com/f-lab-edu/toss-tech-route
npm install
npm run start
```
### Script
```bash
npm run start: 프로젝트를 실행해요.  
npm run test: 테스트코드를 실행해요.  
npm run lint: eslint를 활용하여 코드컨벤션을 확인해요.  
npm run prettier:write: prettier를 활용하여 코드컨벤션에 맞게 코드를 수정해요.  
npm run prettier:check: prettier를 활용하여 코드컨벤션을 확인해요.  
```
<br />


# 프로젝트를 진행하며 고민한 부분이 있었나요? 🤔  
### 프로젝트 컨벤션을 엄격하게 지키려 노력했습니다.
1. [일관된 코드 스타일](https://github.com/airbnb/javascript)을 유지하기 위해 `eslint`와 `prettier`를 설정했습니다.
2. 정해진 규칙의 [commit 메세지](https://github.com/f-lab-edu/toss-tech-router/wiki/01.-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%BB%A8%EB%B2%A4%EC%85%98#commit)를 작성하여 이력을 명확히 표현했습니다.
3. pre-commit 단계에서 코드 컨벤션 규칙을 검사하였습니다.
4. github action을 사용하여 [CI](https://github.com/f-lab-edu/toss-tech-router/actions)를 구현했습니다.  
### 구현 내용을 리뷰어에게 명확하게 전달하려고 고민했습니다.
1. 개발 순서를 세부적으로 계획하고, [issues](https://github.com/f-lab-edu/toss-tech-router/issues)에 등록하여 진행했습니다.
2. [PR 템플릿](https://github.com/f-lab-edu/toss-tech-router/blob/main/.github/PULL_REQUEST_TEMPLATE.md)을 사용하여 리뷰어가 이해하기 쉽게 구현 내용을 전달했습니다.
3. [코드리뷰](https://github.com/f-lab-edu/toss-tech-router/pull/6)에 작성한 [위키](https://github.com/f-lab-edu/toss-tech-router/wiki)를 첨부하여, 구현 내용을 상세하게 전달했습니다.
### 코드의 모듈화와 일관성을 유지하기 위해 노력했습니다.
1. 프로젝트 구조를 lib와 ui로 나누어 폴더 구조를 명확하게 구조화 했습니다.  
2. 하드코딩을 지양하고, 재사용 가능한 코드는 모듈화하여 관리했습니다.
3. 유틸 함수는 테스트 코드를 작성하여 개발했습니다.  
<br />

# 개발 상세 내용 📖  
[01. 프로젝트 컨벤션](https://github.com/f-lab-edu/toss-tech-router/wiki/01.-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%BB%A8%EB%B2%A4%EC%85%98)  
[02. 개발환경 구성](https://github.com/f-lab-edu/toss-tech-router/wiki/02.-%EA%B0%9C%EB%B0%9C%ED%99%98%EA%B2%BD-%EA%B5%AC%EC%84%B1)  
[03. 라우터 구현](https://github.com/f-lab-edu/toss-tech-router/wiki/03.-%EB%9D%BC%EC%9A%B0%ED%84%B0-%EA%B5%AC%ED%98%84)  
[04. 데이터 API 요청 처리](https://github.com/f-lab-edu/toss-tech-router/wiki/04.-%EB%8D%B0%EC%9D%B4%ED%84%B0-API-%EC%9A%94%EC%B2%AD-%EC%B2%98%EB%A6%AC)  
[05. UI 구현](https://github.com/f-lab-edu/toss-tech-router/wiki/05.-UI-%EA%B5%AC%ED%98%84)  
<br />
