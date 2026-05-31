def company_overview_prompt(company, search):
    return f"""
    You are an expert SEO and business analyst.
    Based on this search data: {search}
    
    Provide a structured company overview for "{company}" including:
    - What the company does
    - Their main products or services
    - Their target audience
    - Their industry and niche
    - Their unique value proposition
    
    Be specific, factual and concise. No fluff. Use bullet points.
    """

def seo_ranking_prompt(company, keyword, search):
    return f"""
    You are an expert SEO analyst.
    Based on this search data: {search}
    
    Analyze the current SEO status of "{company}" for keyword "{keyword}" including:
    - Estimated domain authority
    - Current ranking keywords
    - Organic traffic estimate
    - Their strongest ranking pages
    - Overall SEO health assessment
    
    Be specific and data driven. Use bullet points.
    If exact data is not available, provide best estimates based on available information.
    """

def blog_overview_prompt(company, search):
    return f"""
    You are an expert content strategist.
    Based on this search data: {search}
    
    Analyze the blog and content strategy of "{company}" including:
    - How frequently they publish content
    - Main topics and categories they cover
    - Content quality and depth
    - Types of content they produce
    - Gaps in their current content strategy
    
    Be specific and actionable. Use bullet points.
    """

def trending_topics_prompt(company, keyword, search):
    return f"""
    You are an expert content trend analyst.
    Based on this search data: {search}
    
    Identify current trending topics for keyword "{keyword}" including:
    - Top 5 trending topics right now
    - Why each topic is trending
    - Content opportunity for each trend
    - Estimated search interest level (High/Medium/Low)
    - How "{company}" can leverage each trend
    
    Be specific and actionable. Use bullet points.
    """

def keyword_analysis_prompt(keyword, search):
    return f"""
    You are an expert SEO keyword researcher.
    Based on this search data: {search}
    
    Provide detailed keyword analysis for "{keyword}" including:
    - Top 10 recommended keywords to target
    - Search intent for each keyword (informational/commercial/transactional)
    - Competition level (High/Medium/Low)
    - Content format recommendation for each keyword
    - Long tail keyword opportunities
    - Quick win keywords (low competition, decent volume)
    
    Be specific and prioritize by opportunity. Use bullet points.
    """

def competitor_analysis_prompt(company, keyword, search):
    return f"""
    You are an expert competitive SEO analyst.
    Based on this search data: {search}
    
    Analyze top competitors of "{company}" for keyword "{keyword}" including:
    - Top 3 to 5 main competitors
    - What keywords each competitor ranks for
    - Their content strategy and strengths
    - Their weaknesses and content gaps
    - What "{company}" can learn from each competitor
    - Opportunities to outrank competitors
    
    Be specific and strategic. Use bullet points.
    """

def improvement_plan_prompt(company, state):
    return f"""
    You are an expert SEO strategist.
    Based on this complete analysis:
    
    Company Overview: {state['company_overview']}
    Current SEO Ranking: {state['seo_ranking']}
    Blog Overview: {state['blog_overview']}
    Trending Topics: {state['trending_topics']}
    Keyword Analysis: {state['keyword_analysis']}
    Competitor Analysis: {state['competitor_analysis']}
    
    Create a detailed SEO improvement plan for "{company}" including:
    - Top 5 immediate action items (quick wins)
    - Technical SEO improvements needed
    - Content gaps to fill
    - Link building opportunities
    - On page optimization suggestions
    - Timeline for expected results
    
    Be specific, prioritized and actionable. Use bullet points.
    """

def final_report_prompt(company, state):
    return f"""
    You are an expert SEO consultant writing a professional report.
    Based on this complete analysis:
    
    Company Overview: {state['company_overview']}
    SEO Ranking: {state['seo_ranking']}
    Blog Overview: {state['blog_overview']}
    Trending Topics: {state['trending_topics']}
    Keyword Analysis: {state['keyword_analysis']}
    Competitor Analysis: {state['competitor_analysis']}
    Improvement Plan: {state['improvement_plan']}
    
    Write a complete professional SEO report for "{company}" including:
    
    1. EXECUTIVE SUMMARY
    - Current SEO health score (1-10)
    - 3 biggest opportunities
    - 3 biggest threats
    
    2. CONTENT PLAN FOR THIS WEEK
    - Exact number of blogs to publish this week
    - Topic for each blog with target keyword
    - Recommended word count for each blog
    - Priority order (which to publish first)
    
    3. TOP KEYWORDS TO TARGET
    - List top 5 keywords with priority
    
    4. COMPETITOR THREATS
    - Who is the biggest threat and why
    
    5. ACTION ITEMS
    - This week (immediate)
    - This month
    - Next 3 months
    
    6. FINAL RECOMMENDATION
    - One paragraph summary of what to focus on most
    
    Be professional, specific and actionable.
    """