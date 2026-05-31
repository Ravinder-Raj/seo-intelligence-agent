import { useState } from "react"
import axios from "axios"
import ReactMarkdown from "react-markdown"

const SECTIONS = [
  { key: "company_overview", label: "Company Overview", icon: "🏢" },
  { key: "seo_ranking", label: "SEO Ranking", icon: "📈" },
  { key: "blog_overview", label: "Blog Overview", icon: "✍️" },
  { key: "trending_topics", label: "Trending Topics", icon: "🔥" },
  { key: "keyword_analysis", label: "Keyword Analysis", icon: "🔑" },
  { key: "competitor_analysis", label: "Competitor Analysis", icon: "⚔️" },
  { key: "improvement_plan", label: "Improvement Plan", icon: "🎯" },
  { key: "final_report", label: "Final Report", icon: "📊" },
]

function ReportSection({ section, data, index }) {
  const [open, setOpen] = useState(index === 7)
  return (
    <div style={{
      background: "#111118",
      border: "1px solid #1e1e2e",
      borderRadius: "16px",
      overflow: "hidden",
      marginBottom: "12px",
      animation: `fadeUp 0.5s ease forwards`,
      animationDelay: `${index * 0.08}s`,
      opacity: 0,
    }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 24px",
          background: open ? "rgba(124,58,237,0.1)" : "transparent",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ fontSize: "1.2rem" }}>{section.icon}</span>
          <span style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: "1rem",
            color: open ? "#a78bfa" : "#e2e8f0",
          }}>
            {section.label}
          </span>
        </div>
        <span style={{ color: "#64748b", fontSize: "1.4rem", lineHeight: 1 }}>
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <div style={{
          padding: "16px 24px 24px",
          borderTop: "1px solid #1e1e2e",
          color: "#e2e8f0",
          fontSize: "0.9rem",
          lineHeight: 1.8,
        }}>
          <ReactMarkdown>{data}</ReactMarkdown>
        </div>
      )}
    </div>
  )
}

function LoadingNode({ label, index, active, done }) {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: "12px",
      padding: "8px 0",
      opacity: active || done ? 1 : 0.3,
    }}>
      <div style={{
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        background: done ? "#10b981" : active ? "#7c3aed" : "#1e1e2e",
        boxShadow: active ? "0 0 10px #7c3aed" : "none",
        transition: "all 0.3s",
        flexShrink: 0,
      }} />
      <span style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: "0.85rem",
        color: done ? "#10b981" : active ? "#a78bfa" : "#64748b",
        fontWeight: active ? 600 : 400,
      }}>
        {done ? "✓ " : ""}{label}
      </span>
    </div>
  )
}

export default function App() {
  const [company, setCompany] = useState("")
  const [keyword, setKeyword] = useState("")
  const [loading, setLoading] = useState(false)
  const [activeNode, setActiveNode] = useState(-1)
  const [doneNodes, setDoneNodes] = useState([])
  const [result, setResult] = useState(null)
  const [error, setError] = useState("")

  const simulateProgress = () => {
    let current = 0
    const interval = setInterval(() => {
      setActiveNode(current)
      if (current > 0) setDoneNodes(prev => [...prev, current - 1])
      current++
      if (current >= SECTIONS.length) clearInterval(interval)
    }, 3500)
    return interval
  }

  const handleSubmit = async () => {
    if (!company || !keyword) {
      setError("Please enter both company name and keyword")
      return
    }
    setError("")
    setResult(null)
    setDoneNodes([])
    setActiveNode(0)
    setLoading(true)
    const interval = simulateProgress()
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/analyze`, { company, keyword })
      clearInterval(interval)
      setDoneNodes([0,1,2,3,4,5,6,7])
      setActiveNode(-1)
      setResult(res.data)
    } catch (err) {
      clearInterval(interval)
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = {
    width: "100%",
    padding: "14px 16px",
    borderRadius: "12px",
    background: "#0a0a0f",
    border: "1px solid #1e1e2e",
    color: "#e2e8f0",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "1rem",
    outline: "none",
  }

  const labelStyle = {
    display: "block",
    marginBottom: "8px",
    fontSize: "0.75rem",
    fontWeight: 600,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    fontFamily: "'Syne', sans-serif",
    color: "#64748b",
  }

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0f", fontFamily: "'DM Sans', sans-serif" }}>

      {/* Header */}
      <div style={{
        textAlign: "center",
        padding: "80px 24px 60px",
        borderBottom: "1px solid #1e1e2e",
        background: "radial-gradient(ellipse at top, rgba(124,58,237,0.08) 0%, transparent 70%)",
      }}>
        <div style={{
          display: "inline-block",
          padding: "4px 16px",
          borderRadius: "999px",
          marginBottom: "24px",
          background: "rgba(124,58,237,0.15)",
          border: "1px solid #7c3aed",
          color: "#a78bfa",
          fontFamily: "'Syne', sans-serif",
          fontSize: "0.7rem",
          fontWeight: 600,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
        }}>
          AI Powered
        </div>

        <h1 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(3rem, 8vw, 6rem)",
          fontWeight: 900,
          letterSpacing: "-2px",
          lineHeight: 1.1,
          color: "#e2e8f0",
          marginBottom: "16px",
        }}>
          SEO{" "}
          <span style={{
            background: "linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            Intelligence
          </span>
          <br />Agent
        </h1>

        <p style={{
          color: "#64748b",
          fontSize: "1.1rem",
          maxWidth: "480px",
          margin: "0 auto",
          lineHeight: 1.6,
        }}>
          Enter a company and keyword — get a full SEO report in minutes.
        </p>
      </div>

      {/* Input Card */}
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "48px 24px" }}>
        <div style={{
          background: "#111118",
          border: "1px solid #1e1e2e",
          borderRadius: "24px",
          padding: "40px",
          boxShadow: "0 0 60px rgba(124,58,237,0.08)",
        }}>
          <div style={{ marginBottom: "20px" }}>
            <label style={labelStyle}>Company Name</label>
            <input
              style={inputStyle}
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="e.g. Netflix"
              onFocus={(e) => e.target.style.borderColor = "#7c3aed"}
              onBlur={(e) => e.target.style.borderColor = "#1e1e2e"}
            />
          </div>

          <div style={{ marginBottom: "24px" }}>
            <label style={labelStyle}>Target Keyword</label>
            <input
              style={inputStyle}
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="e.g. streaming"
              onFocus={(e) => e.target.style.borderColor = "#7c3aed"}
              onBlur={(e) => e.target.style.borderColor = "#1e1e2e"}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            />
          </div>

          {error && (
            <p style={{ color: "#f87171", fontSize: "0.85rem", marginBottom: "16px" }}>{error}</p>
          )}

          <button
            onClick={handleSubmit}
            disabled={loading}
            style={{
              width: "100%",
              padding: "16px",
              borderRadius: "12px",
              border: "none",
              background: loading ? "#1e1e2e" : "linear-gradient(135deg, #7c3aed 0%, #9333ea 100%)",
              color: loading ? "#64748b" : "white",
              fontFamily: "'Syne', sans-serif",
              fontSize: "1rem",
              fontWeight: 700,
              letterSpacing: "0.05em",
              cursor: loading ? "not-allowed" : "pointer",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => { if (!loading) { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 8px 30px rgba(124,58,237,0.4)" }}}
            onMouseLeave={(e) => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "none" }}
          >
            {loading ? "Analyzing..." : "Generate SEO Report →"}
          </button>
        </div>

        {/* Loading Progress */}
        {loading && (
          <div style={{
            marginTop: "24px",
            background: "#111118",
            border: "1px solid #1e1e2e",
            borderRadius: "24px",
            padding: "32px",
          }}>
            <p style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#a78bfa",
              marginBottom: "20px",
            }}>
              Agent Running
            </p>
            {SECTIONS.map((section, index) => (
              <LoadingNode
                key={section.key}
                label={section.label}
                index={index}
                active={activeNode === index}
                done={doneNodes.includes(index)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Results */}
      {result && (
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px 80px" }}>
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "2rem",
            fontWeight: 900,
            textAlign: "center",
            marginBottom: "32px",
            color: "#e2e8f0",
          }}>
            SEO Report for{" "}
            <span style={{ color: "#a78bfa" }}>{company}</span>
          </h2>
          {SECTIONS.map((section, index) => (
            <ReportSection
              key={section.key}
              section={section}
              data={result[section.key]}
              index={index}
            />
          ))}
        </div>
      )}

    </div>
  )
}