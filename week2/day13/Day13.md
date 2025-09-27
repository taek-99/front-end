# Day13 — Github Pages 배포 연습

## 🎯 목표
- Github Pages를 활용하여 **React(Vite) 프로젝트**를 웹에 배포
- `main` 브랜치에 push 시 자동 반영되도록 설정

---

## 📌 절차

### 1) 준비
- Github에 새 저장소 생성
- 로컬 프로젝트와 연결
  ```bash
  git init
  git remote add origin https://github.com/username/repo.git
  git add .
  git commit -m "init"
  git push -u origin main
