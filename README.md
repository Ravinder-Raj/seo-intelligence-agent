# SEO Intelligence Agent 🚀

An AI-powered SEO research agent that automatically analyzes a company's SEO health and generates a full actionable report with weekly content plan.

## Live Demo

- Frontend: https://seo-intelligence-agent.netlify.app
- Backend: https://seo-intelligence-agent.onrender.com

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

### Backend
- Python
- FastAPI
- LangChain
- LangGraph
- NVIDIA NIM API (Llama 3.1 8B)
- Tavily Search API

### Frontend
- React.js
- Vite
- Tailwind CSS
- Axios

## Project Structure

seo-intelligence-agent/
├── backend/
│   ├── main.py            # FastAPI app and CORS
│   ├── agent.py           # LangGraph pipeline
│   ├── nodes.py           # 8 agent nodes
│   ├── prompts.py         # All prompts
│   ├── state.py           # Agent state class
│   ├── requirements.txt   # Python dependencies
│   └── .env               # Environment variables (not committed)
├── frontend/
│   ├── src/
│   │   ├── App.jsx        # Main React component
│   │   └── index.css      # Global styles
│   ├── .env               # Frontend environment variables (not committed)
│   └── package.json
├── .gitignore
└── README.md

## How to Run Locally

### Backend Setup

cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt

Create a .env file inside the backend folder:

NVIDIA_API_KEY=your_nvidia_key
NVIDIA_BASE_URL=https://integrate.api.nvidia.com/v1
LLM_MODEL=meta/llama-3.1-8b-instruct
TAVILY_API_KEY=your_tavily_key
FRONTEND_URL=http://localhost:5173

Start the backend server:

uvicorn main:app --reload

Backend runs on: http://localhost:8000

### Frontend Setup

cd frontend
npm install
npm run dev

Create a .env file inside the frontend folder:

VITE_API_URL=http://localhost:8000

Frontend runs on: http://localhost:5173

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
        ↓
React displays full SEO report

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

## Environment Variables

### Backend
Variable         | Description
NVIDIA_API_KEY   | Your NVIDIA NIM API key
NVIDIA_BASE_URL  | https://integrate.api.nvidia.com/v1
LLM_MODEL        | meta/llama-3.1-8b-instruct
TAVILY_API_KEY   | Your Tavily Search API key
FRONTEND_URL     | Frontend URL for CORS

### Frontend
Variable         | Description
VITE_API_URL     | Backend API URL

## Key Features

- 8 specialized AI agent nodes
- Real time web search using Tavily
- Production level prompts for each node
- Separate prompts file for clean code
- Modular and clean code structure
- Environment based configuration
- No hardcoded values
- CORS enabled with env based frontend URL
- Animated loading progress per node
- Collapsible report sections
- Fully responsive dark UI

## Deployment

- Backend deployed on Render
- Frontend deployed on Netlify
- Both connected via GitHub for auto deploy
- Environment variables set in Render and Netlify dashboards

## Author

Ravinder Raj
GitHub: https://github.com/Ravinder-Raj
Email: rraj81482@gmail.com