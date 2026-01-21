# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

개인 포트폴리오/랜딩 페이지 (정병진). React + TypeScript 기반의 싱글 페이지 애플리케이션. Lovable.dev에서 생성됨.

## Commands

```bash
npm run dev          # 개발 서버 실행 (localhost:8080)
npm run build        # 프로덕션 빌드
npm run build:dev    # 개발 모드 빌드
npm run preview      # 빌드된 결과물 미리보기
npm run lint         # ESLint 실행
npm run test         # Vitest 테스트 실행
npm run test:watch   # 테스트 watch 모드

# 단일 테스트 파일 실행
npx vitest run src/test/example.test.ts
```

## Tech Stack

- **Build**: Vite + SWC
- **UI**: React 18, Tailwind CSS, shadcn/ui (Radix 기반)
- **Animation**: Framer Motion
- **3D**: @splinetool/react-spline
- **State**: TanStack Query
- **Routing**: React Router DOM
- **Testing**: Vitest + Testing Library (jsdom 환경)

## Architecture

싱글 페이지 랜딩: `src/pages/Index.tsx`가 모든 섹션 컴포넌트를 조합.

```
src/
├── components/           # 페이지 섹션 컴포넌트
│   ├── ui/               # shadcn/ui 컴포넌트 (자동 생성, 직접 수정 지양)
│   └── FadeIn.tsx        # Framer Motion 애니메이션 래퍼
├── pages/Index.tsx       # 메인 랜딩 페이지 (섹션 조합)
├── hooks/use-mobile.tsx  # 모바일 감지 훅
├── test/setup.ts         # Vitest 설정 (matchMedia 모킹 포함)
└── lib/utils.ts          # cn() 유틸리티 (clsx + tailwind-merge)
```

## Key Patterns

- **Path Alias**: `@/` → `src/`
- **CSS Variables**: 테마 색상은 `src/index.css`의 CSS 변수로 정의 (다크 테마 기본)
- **Font**: Pretendard (CDN)
- **컨테이너**: `max-w-4xl` (약 896px)
- **Custom Utilities**: `text-gradient`, `glow`, `hover-surface` 등 (`src/index.css`)

## Adding shadcn/ui Components

```bash
npx shadcn@latest add [component-name]
```

설정은 `components.json` 참조. 컴포넌트는 `src/components/ui/`에 추가됨.
