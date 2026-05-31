from langgraph.graph import StateGraph, END
from state import AgentState
from nodes import (
    company_overview,
    seo_ranking,
    blog_overview,
    trending_topics,
    keyword_analysis,
    competitor_analysis,
    improvement_plan,
    final_report
)

def run_agent(company: str, keyword: str):
    # Initialize state
    initial_state = AgentState(
        company=company,
        keyword=keyword,
        company_overview="",
        seo_ranking="",
        blog_overview="",
        trending_topics="",
        keyword_analysis="",
        competitor_analysis="",
        improvement_plan="",
        final_report=""
    )

    # Build graph
    graph = StateGraph(AgentState)

    # Add all nodes
    graph.add_node("company_overview", company_overview)
    graph.add_node("seo_ranking", seo_ranking)
    graph.add_node("blog_overview", blog_overview)
    graph.add_node("trending_topics", trending_topics)
    graph.add_node("keyword_analysis", keyword_analysis)
    graph.add_node("competitor_analysis", competitor_analysis)
    graph.add_node("improvement_plan", improvement_plan)
    graph.add_node("final_report", final_report)

    # Connect nodes in order
    graph.set_entry_point("company_overview")
    graph.add_edge("company_overview", "seo_ranking")
    graph.add_edge("seo_ranking", "blog_overview")
    graph.add_edge("blog_overview", "trending_topics")
    graph.add_edge("trending_topics", "keyword_analysis")
    graph.add_edge("keyword_analysis", "competitor_analysis")
    graph.add_edge("competitor_analysis", "improvement_plan")
    graph.add_edge("improvement_plan", "final_report")
    graph.add_edge("final_report", END)

    # Compile and run
    app = graph.compile()
    result = app.invoke(initial_state)

    return result