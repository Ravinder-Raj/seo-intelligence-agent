# SEO Intelligence Agent 🚀

An AI-powered SEO research agent that automatically analyzes a company's SEO health and generates a full actionable report.

## What it does

You enter a company name and keyword — the agent automatically:

- Finds company overview
- Analyzes current SEO ranking
- Reviews blog content strategy
- Finds trending topics in the niche
- Analyzes best keywords to target
- Studies competitor SEO strategies
- Creates an improvement plan
- Generates a full SEO report with weekly blog plan

## Tech Stack

- **LLM** — Meta Llama 3.1 8B via NVIDIA NIM API
- **Search** — Tavily Search API
- **Framework** — LangChain + LangGraph
- **Backend** — FastAPI
- **Frontend** — React + Vite + Tailwind CSS

## Project Structure

seo-intelligence-agent/
├── backend/
│   ├── main.py
│   ├── agent.py
│   ├── nodes.py
│   ├── prompts.py
│   ├── state.py
│   └── requirements.txt
├── frontend/
│   └── (React app)
└── README.md

## How to Run Locally

### Backend Setup

cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt

Create a .env file inside the backend folder and add:

NVIDIA_API_KEY=your_nvidia_key
NVIDIA_BASE_URL=https://integrate.api.nvidia.com/v1
LLM_MODEL=meta/llama-3.1-8b-instruct
TAVILY_API_KEY=your_tavily_key

Start the server:

uvicorn main:app --reload

## API Endpoint

POST /analyze

Request body:

{
  "company": "Netflix",
  "keyword": "streaming"
}

Response includes:
- company_overview
- seo_ranking
- blog_overview
- trending_topics
- keyword_analysis
- competitor_analysis
- improvement_plan
- final_report

## Agent Flow

User Input (Company Name + Keyword)
        ↓
Node 1 — Company Overview
        ↓
Node 2 — SEO Ranking Analysis
        ↓
Node 3 — Blog Overview
        ↓
Node 4 — Trending Topics
        ↓
Node 5 — Keyword Analysis
        ↓
Node 6 — Competitor Analysis
        ↓
Node 7 — Improvement Plan
        ↓
Node 8 — Final Report
        ↓
FastAPI sends response to Frontend

## Environment Variables

Variable | Description
NVIDIA_API_KEY | Your NVIDIA NIM API key
NVIDIA_BASE_URL | https://integrate.api.nvidia.com/v1
LLM_MODEL | meta/llama-3.1-8b-instruct
TAVILY_API_KEY | Your Tavily Search API key

## Key Features

- 8 specialized AI agent nodes
- Real time web search using Tavily
- Production level prompts for each node
- Modular and clean code structure
- Environment based configuration
- No hardcoded values
- CORS enabled for frontend integration

## Deployment

- Backend deployed on Render
- Frontend deployed on Netlify
- Both connected via GitHub for auto deploy

## Author

Ravinder Raj
GitHub: https://github.com/Ravinder-Raj
Email: rraj81482@gmail.com