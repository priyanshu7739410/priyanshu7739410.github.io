import React from "react";
import "./AchievementCard.scss";

export default function AchievementCard({cardInfo, isDark}) {
  return (
    <div
      className={
        isDark ? "dark-mode achievement-list-item" : "achievement-list-item"
      }
    >
      <div className="achievement-list-header">
        <h3
          className={
            isDark
              ? "dark-mode achievement-list-title"
              : "achievement-list-title"
          }
        >
          {cardInfo.title}
        </h3>
        {cardInfo.footer && cardInfo.footer.length > 0 && (
          <div className="achievement-list-links">
            {cardInfo.footer.map((v, i) => {
              if (!v.url) return null;
              return (
                <a
                  key={i}
                  href={v.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    isDark
                      ? "dark-mode achievement-link-btn"
                      : "achievement-link-btn"
                  }
                >
                  {v.name} ↗
                </a>
              );
            })}
          </div>
        )}
      </div>
      <p
        className={
          isDark ? "dark-mode achievement-list-desc" : "achievement-list-desc"
        }
      >
        {cardInfo.description}
      </p>
    </div>
  );
}
