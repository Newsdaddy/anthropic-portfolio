# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

개인 포트폴리오/랜딩 페이지 (정병진). React + TypeScript 기반의 싱글 페이지 애플리케이션.

## Commands

```bash
npm run dev          # 개발 서버 실행 (localhost:8080)
npm run build        # 프로덕션 빌드
npm run lint         # ESLint 실행
npm run test         # Vitest 테스트 실행
npm run test:watch   # 테스트 watch 모드
```

## Tech Stack

- **Build**: Vite + SWC
- **UI**: React 18, Tailwind CSS, shadcn/ui (Radix 기반)
- **Animation**: Framer Motion
- **3D**: @splinetool/react-spline
- **State**: TanStack Query
- **Routing**: React Router DOM

## Architecture

```
src/
├── components/          # 페이지 섹션 컴포넌트
│   ├── ui/              # shadcn/ui 컴포넌트 (자동 생성)
│   ├── HeroSection.tsx  # 메인 히어로 (Spline 3D 포함)
│   ├── CareerSection.tsx
│   ├── ExperienceSection.tsx
│   ├── SkillsSection.tsx
│   └── FadeIn.tsx       # Framer Motion 애니메이션 래퍼
├── pages/
│   └── Index.tsx        # 메인 랜딩 페이지
├── hooks/               # 커스텀 훅
└── lib/utils.ts         # cn() 유틸리티 (clsx + tailwind-merge)
```

## Key Patterns

- **Path Alias**: `@/` → `src/` (vite.config.ts, tsconfig.json)
- **CSS Variables**: Tailwind 테마 색상은 `src/index.css`의 CSS 변수로 정의
- **Dark Mode**: `darkMode: ["class"]` - 클래스 기반 다크 모드
- **컨테이너**: max-width 900px로 제한됨

## Adding shadcn/ui Components

```bash
npx shadcn@latest add [component-name]
```

설정은 `components.json` 참조. 컴포넌트는 `src/components/ui/`에 추가됨.
