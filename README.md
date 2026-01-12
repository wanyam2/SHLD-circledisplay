# My Display App

React와 Vite를 사용하여 구축된 웹 애플리케이션입니다.

## 사전 요구사항

이 프로젝트를 실행하기 전에 다음이 설치되어 있어야 합니다:

- **Node.js** (버전 18 이상 권장)
- **npm** 또는 **yarn** (Node.js와 함께 설치됨)

Node.js가 설치되어 있는지 확인하려면 터미널에서 다음 명령어를 실행하세요:

```bash
node --version
npm --version
```

## 설치 방법

1. 프로젝트를 클론하거나 다운로드합니다:

```bash
git clone <repository-url>
cd my-display-app
```

또는 ZIP 파일을 다운로드한 경우 압축을 해제하고 해당 디렉토리로 이동합니다.

2. 프로젝트 디렉토리에서 의존성을 설치합니다:

```bash
npm install
```

## 실행 방법

개발 서버를 시작하려면 다음 명령어를 실행하세요:

```bash
npm run dev
```

브라우저에서 `http://localhost:5173` (또는 터미널에 표시된 주소)로 접속하여 애플리케이션을 확인할 수 있습니다.

개발 서버는 파일 변경 시 자동으로 새로고침됩니다 (Hot Module Replacement).

## 빌드 방법

프로덕션용 빌드를 생성하려면:

```bash
npm run build
```

빌드된 파일은 `dist` 디렉토리에 생성됩니다.

빌드된 애플리케이션을 미리보려면:

```bash
npm run preview
```

## 사용 가능한 스크립트

- `npm run dev` - 개발 서버 시작
- `npm run build` - 프로덕션용 빌드 생성
- `npm run preview` - 빌드된 애플리케이션 미리보기
- `npm run lint` - ESLint를 사용한 코드 검사

## 기술 스택

- **React** ^19.2.0
- **Vite** ^7.2.4
- **ESLint** - 코드 품질 관리

## 문제 해결

### 포트가 이미 사용 중인 경우

다른 포트를 사용하려면 `vite.config.js`에서 포트를 변경하거나, 환경 변수를 설정할 수 있습니다.

### 의존성 설치 오류

`node_modules` 폴더와 `package-lock.json`을 삭제한 후 다시 설치해보세요:

```bash
rm -rf node_modules package-lock.json
npm install
```

## 라이선스

이 프로젝트는 개인 프로젝트입니다.
