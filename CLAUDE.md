# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

정병진 개인 포트폴리오/랜딩 페이지. React 18 + TypeScript SPA, Lovable.dev에서 생성됨.

**Lovable.dev 워크플로우**: 이 프로젝트는 Lovable.dev에서 관리됨. Lovable에서의 변경은 자동 커밋되고, 로컬 push도 Lovable에 반영됨 (양방향 동기화).

## Commands

```bash
npm run dev          # 개발 서버 (localhost:8080)
npm run build        # 프로덕션 빌드
npm run build:dev    # 개발 모드 빌드
npm run preview      # 빌드 결과물 미리보기
npm run lint         # ESLint 실행
npm run test         # Vitest 테스트 실행
npm run test:watch   # 테스트 watch 모드

# 단일 테스트 파일 실행
npx vitest run src/test/example.test.ts

# shadcn/ui 컴포넌트 추가 (설정: components.json, 출력: src/components/ui/)
npx shadcn@latest add [component-name]
```

## Tech Stack

- **Build**: Vite + SWC
- **UI**: React 18, Tailwind CSS, shadcn/ui (Radix 기반)
- **Animation**: Framer Motion, @splinetool/react-spline (3D)
- **State/Routing**: TanStack Query, React Router DOM
- **Backend**: Supabase (Edge Functions로 관리자 인증)
- **Testing**: Vitest + Testing Library (jsdom)

## Architecture

Provider 계층 (`src/App.tsx`):
QueryClientProvider → AuthProvider → TooltipProvider → BrowserRouter

**Routes**:
- `/` — 메인 랜딩 페이지
- `/admin-dashboard` — 관리자 대시보드 (sessionStorage 기반 인증)

**랜딩 페이지 섹션 순서** (`src/pages/Index.tsx`):
HeroSection → LectureLink → HighlightsSection → CareerSection → ExperienceSection → SkillsSection → SocialLinks → Footer

**관리자 인증 흐름**:
HeroSection 프로필 이미지를 3초 내 10회 클릭 → AdminLoginModal 표시 → Supabase Edge Function `verify-admin` 호출 → 성공 시 sessionStorage에 `admin_session='authenticated'` 저장 → `/admin-dashboard`로 이동. AdminDashboard는 Edge Function `get-analytics`로 데이터 조회.

**주요 코드 위치**:
- `src/components/` — 페이지 섹션 컴포넌트
- `src/components/ui/` — shadcn/ui 컴포넌트 (자동 생성, 직접 수정 지양)
- `src/components/FadeIn.tsx` — Framer Motion 순차 fade-in 래퍼
- `src/contexts/AuthContext.tsx` — 관리자 인증 상태 (sessionStorage)
- `src/integrations/supabase/` — Supabase 클라이언트 (자동 생성)

## Key Patterns

- **Path Alias**: `@/` → `src/`
- **Theme**: 다크 테마 기본, 골드 액센트 (`--primary: 45 90% 55%`), CSS 변수 기반 (`src/index.css`)
- **Layout**: `max-w-4xl` 컨테이너 (약 896px)
- **Custom Tailwind Utilities**: `text-gradient`, `glow`, `hover-surface` (`src/index.css`)
- **Font**: Pretendard (CDN)
- **Animation**: `FadeIn` 컴포넌트에 delay prop으로 섹션별 순차 등장

## Configuration Notes

- **TypeScript**: strict 모드 비활성화 (`noImplicitAny: false`, `strictNullChecks: false`)
- **ESLint**: flat config 형식 (eslint 9+), `@typescript-eslint/no-unused-vars: "off"`
- **Responsive breakpoints**: `sm` 640px, `md` 768px. 모바일 감지 hook(`use-mobile.tsx`)은 768px 기준.
- **Spline 3D**: HeroSection에 iframe으로 임베드, `pointerEvents: 'none'`으로 클릭 차단 처리

## Environment Variables

```
VITE_SUPABASE_URL=...
VITE_SUPABASE_PUBLISHABLE_KEY=...
```
