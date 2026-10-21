import React, {useContext} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  const {isDark} = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>

          <div className="projects-list-container">
            {bigProjects.projects.map((project, i) => {
              return (
                <div
                  key={i}
                  className={
                    isDark
                      ? "dark-mode project-list-item"
                      : "project-list-item"
                  }
                >
                  <div className="project-list-header">
                    <h3
                      className={
                        isDark
                          ? "dark-mode project-list-title"
                          : "project-list-title"
                      }
                    >
                      <span className="project-index">0{i + 1}.</span>
                      {project.projectName}
                    </h3>
                    {project.footerLink && (
                      <div className="project-list-links">
                        {project.footerLink.map((link, j) => {
                          return (
                            <a
                              key={j}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={
                                isDark
                                  ? "dark-mode project-link-btn"
                                  : "project-link-btn"
                              }
                            >
                              {link.name} ↗
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                  <p
                    className={
                      isDark
                        ? "dark-mode project-list-desc"
                        : "project-list-desc"
                    }
                  >
                    {project.projectDesc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
