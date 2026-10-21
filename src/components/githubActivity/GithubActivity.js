import React, {useState, useEffect, useContext} from "react";
import "./GithubActivity.scss";
import StyleContext from "../../contexts/StyleContext";
import {Fade} from "react-reveal";

// Curated fallback so it renders instantly and never breaks if offline or rate-limited
const FALLBACK_PRS = [
  {
    number: 8813,
    title: "fix(thanos): correctly filter unsupported remote write fields",
    repo: "prometheus-operator/prometheus-operator",
    url: "https://github.com/prometheus-operator/prometheus-operator/pull/8813",
    date: "Sep 25, 2026"
  },
  {
    number: 77,
    title: "fix(ui): render schema properties for v3 object schemas and payloads",
    repo: "asyncapi/net-sdk",
    url: "https://github.com/asyncapi/net-sdk/pull/77",
    date: "Sep 11, 2026"
  },
  {
    number: 1428,
    title: "fix(block): reset distanceAlongBlock between configurations",
    repo: "OneBusAway/maglev",
    url: "https://github.com/OneBusAway/maglev/pull/1428",
    date: "Sep 9, 2026"
  },
  {
    number: 1378,
    title: "Fix swallowed duplicated trip lookup errors",
    repo: "OneBusAway/maglev",
    url: "https://github.com/OneBusAway/maglev/pull/1378",
    date: "Sep 2, 2026"
  },
  {
    number: 1375,
    title: "Fix parent route agency references",
    repo: "OneBusAway/maglev",
    url: "https://github.com/OneBusAway/maglev/pull/1375",
    date: "Sep 2, 2026"
  },
  {
    number: 6,
    title: "fixed scaling issue of measure tool",
    repo: "Azad-Technology/Opensoft-26-Frontend",
    url: "https://github.com/Azad-Technology/Opensoft-26-Frontend/pull/6",
    date: "Mar 25, 2026"
  }
];

const CACHE_KEY = "github_live_prs_cache_v1";
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

export default function GithubActivity() {
  const {isDark} = useContext(StyleContext);
  const [prs, setPrs] = useState(FALLBACK_PRS);
  const [totalCount, setTotalCount] = useState(FALLBACK_PRS.length);
  const [isLive, setIsLive] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchLivePRs = async (isManual = false) => {
    try {
      // Check localStorage cache if not manual refresh
      if (!isManual) {
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const parsed = JSON.parse(cached);
          if (Date.now() - parsed.timestamp < CACHE_TTL_MS) {
            setPrs(parsed.items);
            setTotalCount(parsed.totalCount);
            setIsLive(true);
            return;
          }
        }
      }

      setLoading(true);
      const res = await fetch(
        "https://api.github.com/search/issues?q=author:priyanshu7739410+type:pr+is:merged&sort=updated&order=desc&per_page=6"
      );

      if (!res.ok) {
        throw new Error(`GitHub API HTTP ${res.status}`);
      }

      const data = await res.json();
      if (data && Array.isArray(data.items)) {
        const mapped = data.items.map(item => {
          const repo = item.repository_url.split("/").slice(-2).join("/");
          let dateStr = "";
          if (item.closed_at) {
            const d = new Date(item.closed_at);
            dateStr = d.toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric"
            });
          }
          return {
            number: item.number,
            title: item.title,
            repo: repo,
            url: item.html_url,
            date: dateStr
          };
        });

        setPrs(mapped);
        setTotalCount(data.total_count || mapped.length);
        setIsLive(true);

        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({
            timestamp: Date.now(),
            totalCount: data.total_count || mapped.length,
            items: mapped
          })
        );
      }
    } catch (err) {
      console.warn("Could not fetch live GitHub PRs, using curated cache:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLivePRs();
  }, []);

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="github-activity">
        <div className="github-activity-header">
          <div className="github-title-group">
            <h1
              className={
                isDark
                  ? "dark-mode heading github-heading"
                  : "heading github-heading"
              }
            >
              Live Open Source PRs
            </h1>
            <div className="live-status-pill">
              <span className="live-pulse-dot"></span>
              <span className="live-status-text">
                {isLive ? "Live Sync Active" : "Dynamic GitHub Sync"}
              </span>
            </div>
          </div>
          <p
            className={
              isDark
                ? "dark-mode subTitle github-subtitle"
                : "subTitle github-subtitle"
            }
          >
            REAL-TIME PULL REQUESTS MERGED ACROSS PROMETHEUS (CNCF), ASYNCAPI,
            AND ECOSYSTEM REPOSITORIES
          </p>

          <div className="github-stats-bar">
            <span
              className={
                isDark
                  ? "dark-mode github-stat-badge"
                  : "github-stat-badge"
              }
            >
              <strong>{totalCount}</strong> Merged Pull Requests
            </span>
            <button
              onClick={() => fetchLivePRs(true)}
              className={
                isDark
                  ? "dark-mode github-refresh-btn"
                  : "github-refresh-btn"
              }
              disabled={loading}
              title="Refresh live activity from GitHub"
            >
              {loading ? "Syncing..." : "↻ Refresh Live"}
            </button>
          </div>
        </div>

        <div className="github-pr-list">
          {prs.map((pr, i) => {
            return (
              <div
                key={pr.number || i}
                className={
                  isDark
                    ? "dark-mode github-pr-item"
                    : "github-pr-item"
                }
              >
                <div className="github-pr-left">
                  <span className="pr-merged-pill">
                    <svg
                      className="pr-merged-icon"
                      viewBox="0 0 16 16"
                      width="14"
                      height="14"
                      fill="currentColor"
                    >
                      <path d="M5 3.254V3.25v.004a.75.75 0 1 1 0-.004v.004zm4.5 7.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5zm-4-4.5V9.5a.75.75 0 0 1-1.5 0V5.5a2.25 2.25 0 0 1 2.25-2.25h1.5a.75.75 0 0 1 0 1.5H6.25A.75.75 0 0 0 5.5 5.5v.754a2.25 2.25 0 0 1 1.75 2.196v1.3a2.25 2.25 0 1 1-1.5 0v-1.3A.75.75 0 0 1 5 6.254z" />
                    </svg>
                    Merged
                  </span>
                  <div className="pr-content-group">
                    <span className="pr-repo-tag">{pr.repo}</span>
                    <a
                      href={pr.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={
                        isDark
                          ? "dark-mode pr-title-link"
                          : "pr-title-link"
                      }
                    >
                      {pr.title}
                    </a>
                  </div>
                </div>

                <div className="github-pr-right">
                  {pr.date && (
                    <span
                      className={
                        isDark
                          ? "dark-mode pr-date-text"
                          : "pr-date-text"
                      }
                    >
                      {pr.date}
                    </span>
                  )}
                  <a
                    href={pr.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      isDark
                        ? "dark-mode pr-view-btn"
                        : "pr-view-btn"
                    }
                  >
                    #{pr.number} ↗
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Fade>
  );
}
