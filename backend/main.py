from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from agent import run_agent
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.getenv("FRONTEND_URL", "http://localhost:5173")],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class AnalyzeRequest(BaseModel):
    company: str
    keyword: str

@app.get("/")
def root():
    return {"message": "SEO Intelligence Agent is running!"}

@app.post("/analyze")
async def analyze(request: AnalyzeRequest):
    result = run_agent(request.company, request.keyword)
    return {
        "company_overview": result["company_overview"],
        "seo_ranking": result["seo_ranking"],
        "blog_overview": result["blog_overview"],
        "trending_topics": result["trending_topics"],
        "keyword_analysis": result["keyword_analysis"],
        "competitor_analysis": result["competitor_analysis"],
        "improvement_plan": result["improvement_plan"],
        "final_report": result["final_report"]
    }