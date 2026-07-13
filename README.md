<div align="center">

# 🛡️ SentinelAI

### AI-Powered Cybersecurity Defense Platform

*Smarter threat detection. Real-time defense. One dashboard.*

<img src="https://img.shields.io/badge/status-in%20development-yellow?style=for-the-badge" alt="status">
<img src="https://img.shields.io/badge/frontend-React%20%2B%20Vite%20%2B%20Tailwind-38bdf8?style=for-the-badge" alt="frontend">
<img src="https://img.shields.io/badge/backend-FastAPI-009688?style=for-the-badge" alt="backend">
<img src="https://img.shields.io/badge/license-MIT-lightgrey?style=for-the-badge" alt="license">

</div>

---

## 📖 Table of Contents

- [About](#-about)
- [Why SentinelAI](#-why-sentinelai)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Development Roadmap](#-development-roadmap)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🔍 About

Cyberattacks are getting smarter, faster, and harder to catch with rule-based systems alone. **SentinelAI** brings machine learning into the defense loop — analyzing patterns, scoring risk in real time, and giving users a clear, actionable view of their security posture through a clean, modern dashboard.

This project is being built end-to-end as a hands-on engineering effort — every module (detection engine, ML pipeline, scanner, assistant) is implemented from scratch to deeply understand how real security tooling works under the hood, not just wired together from existing libraries.

## 💡 Why SentinelAI

| Traditional Tools | SentinelAI |
|---|---|
| Static, rule-based detection | ML-driven, adapts to new patterns |
| Fragmented tools for each threat type | One unified dashboard |
| Technical alerts, hard to parse | AI assistant explains threats in plain language |
| Manual report generation | Auto-generated analytics & reports |

---

## ✨ Features

> Features are being rolled out progressively — see the [roadmap](#-development-roadmap) for live status.

| Feature | Description | Status |
|---|---|---|
| 🖥️ Security Dashboard | Real-time visibility into threats, alerts, system health | 🟡 In Progress |
| 🧠 ML Threat Detection | Anomaly detection using trained models, not static rules | ⚪ Planned |
| 🦠 Malware Scanner | Scan files/inputs for known and suspicious patterns | ⚪ Planned |
| 🌐 URL & Phishing Detection | Flags malicious links before they cause harm | ⚪ Planned |
| 🤖 AI Security Assistant | Conversational assistant explaining threats & next steps | ⚪ Planned |
| 📊 Reports & Analytics | Exportable, visual breakdowns of threats over time | ⚪ Planned |

---

## 🧰 Tech Stack

<div align="center">

<img src="https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB" alt="React">
<img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite">
<img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind">
<img src="https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white" alt="FastAPI">
<img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white" alt="Python">

</div>

| Layer | Technology |
|---|---|
| Frontend | React, Vite, Tailwind CSS |
| Backend | FastAPI (Python) |
| ML / AI | Python (scikit-learn / custom models) |
| Prototyping | Streamlit (rapid demo interface) |
| Database | *TBD — SQLite for dev, PostgreSQL for prod (likely)* |
| Containerization | Docker / Docker Compose |
| Deployment | *TBD* |

---

## 🏗️ Architecture

```
┌────────────────────┐        REST API        ┌──────────────────────┐
│    React + Vite      │  <──────────────────>  │       FastAPI          │
│   (Frontend / UI)     │                        │   (Backend + Routing)   │
└────────────────────┘                        └──────────────────────┘
                                                          │
                                          ┌───────────────┼────────────────┐
                                          ▼                                 ▼
                                ┌──────────────────┐            ┌────────────────────┐
                                │  ML Detection      │            │  Scanner / Phishing   │
                                │  Engine              │            │  Modules              │
                                └──────────────────┘            └────────────────────┘
```

*(Will be updated with real data flow once backend services are finalized in Week 2–3.)*

---

## 📅 Development Roadmap

| Week | Goal | Status |
|---|---|---|
| Week 1 | UI + Dashboard | 🟡 In Progress |
| Week 2 | Backend APIs | ⚪ Upcoming |
| Week 3 | Malware Scanner | ⚪ Upcoming |
| Week 4 | ML Model | ⚪ Upcoming |
| Week 5 | URL + Phishing Detection | ⚪ Upcoming |
| Week 6 | AI Assistant | ⚪ Upcoming |
| Week 7 | Reports + Analytics | ⚪ Upcoming |
| Week 8 | Polish + Deployment | ⚪ Upcoming |

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- Python (3.10+)
- npm or yarn
- Git

### 1. Clone the repository
```bash
git clone https://github.com/rajneeshkaur19/Sentinel_AI.git
cd Sentinel_AI
```

### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
Runs at `http://localhost:5173`

### 3. Backend Setup
```bash
cd backend
python -m venv venv
venv\Scripts\activate       # Windows PowerShell
pip install -r requirements.txt
uvicorn main:app --reload
```
Runs at `http://localhost:8000`

### 4. (Optional) Run with Docker
```bash
docker-compose up --build
```

---

## 📁 Project Structure

```
SentinelAI/
├── frontend/              # React + Vite + Tailwind UI
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── assets/
│   └── ...
├── backend/                # FastAPI application
│   ├── app/
│   │   ├── routes/
│   │   └── services/
│   └── ...
├── ml/                      # ML models & training pipeline
├── streamlit_demo/          # Streamlit-based demo/prototype
├── docs/                    # Documentation & diagrams
├── docker-compose.yml
├── .gitignore
├── LICENSE
└── README.md
```

---

## 🖼️ Screenshots

> Coming soon — dashboard preview will be added after Week 1.

---

## 🤝 Contributing

This project is in early, active development. Contribution guidelines will be added once the core architecture stabilizes (post Week 2–3). Issues and suggestions are welcome in the meantime!

---

## 📄 License

Licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

## 📬 Contact

Built by **Rajneesh Kaur (Cherry)**

<div align="left">
<a href="https://github.com/rajneeshkaur19"><img src="https://img.shields.io/badge/GitHub-rajneeshkaur19-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub"></a>
</div>

---

<div align="center">
<i>SentinelAI — because defense should be as smart as the attacks it fights. 🛡️</i>
</div>
