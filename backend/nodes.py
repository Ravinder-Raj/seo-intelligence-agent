from langchain_openai import ChatOpenAI
from tavily import TavilyClient
from state import AgentState
from prompts import (
    company_overview_prompt,
    seo_ranking_prompt,
    blog_overview_prompt,
    trending_topics_prompt,
    keyword_analysis_prompt,
    competitor_analysis_prompt,
    improvement_plan_prompt,
    final_report_prompt
)
import os
from dotenv import load_dotenv

load_dotenv()

llm = ChatOpenAI(
    base_url=os.getenv("NVIDIA_BASE_URL"),
    api_key=os.getenv("NVIDIA_API_KEY"),
    model=os.getenv("LLM_MODEL"),
    temperature=0.3
)
tavily = TavilyClient(api_key=os.getenv("TAVILY_API_KEY"))


# Node 1 - Company Overview
def company_overview(state: AgentState):
    search = tavily.search(f"{state['company']} company overview products services")
    result = llm.invoke(company_overview_prompt(state['company'], search))
    state['company_overview'] = result.content
    return state


# Node 2 - SEO Ranking
def seo_ranking(state: AgentState):
    search = tavily.search(f"{state['company']} SEO ranking keywords domain authority {state['keyword']}")
    result = llm.invoke(seo_ranking_prompt(state['company'], state['keyword'], search))
    state['seo_ranking'] = result.content
    return state


# Node 3 - Blog Overview
def blog_overview(state: AgentState):
    search = tavily.search(f"{state['company']} blog content marketing strategy articles")
    result = llm.invoke(blog_overview_prompt(state['company'], search))
    state['blog_overview'] = result.content
    return state


# Node 4 - Trending Topics
def trending_topics(state: AgentState):
    search = tavily.search(f"trending topics {state['keyword']} 2025 latest news")
    result = llm.invoke(trending_topics_prompt(state['company'], state['keyword'], search))
    state['trending_topics'] = result.content
    return state


# Node 5 - Keyword Analysis
def keyword_analysis(state: AgentState):
    search = tavily.search(f"best SEO keywords for {state['keyword']} high volume low competition 2025")
    result = llm.invoke(keyword_analysis_prompt(state['keyword'], search))
    state['keyword_analysis'] = result.content
    return state


# Node 6 - Competitor Analysis
def competitor_analysis(state: AgentState):
    search = tavily.search(f"top competitors of {state['company']} {state['keyword']} SEO strategy")
    result = llm.invoke(competitor_analysis_prompt(state['company'], state['keyword'], search))
    state['competitor_analysis'] = result.content
    return state


# Node 7 - Improvement Plan
def improvement_plan(state: AgentState):
    result = llm.invoke(improvement_plan_prompt(state['company'], state))
    state['improvement_plan'] = result.content
    return state


# Node 8 - Final Report
def final_report(state: AgentState):
    result = llm.invoke(final_report_prompt(state['company'], state))
    state['final_report'] = result.content
    return state