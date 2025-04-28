import React from "react";
import { GitjobsImg, PortfolioImg } from "../../assets/images";

const projects = [
  {
    name: "AISSCE Marketing project",
    info: [
      "Conducted competitive market analysis for a newly designed product",
      "Developed product branding assets including logo, label, and packaging elements.",
      "Defined pricing strategies to align with market positioning and product value.",
      "Performed a SWOT analysis (Strengths, Weaknesses, Opportunities, Threats) for the designed product.",
    ],
    // media: <PortfolioImg />,
    live: null,
    // need to update to current site url once site goes public
    repo: null,
    id: 1,
  },
  {
    name: "AISSCE Accounting Project",
    info: [
      "Compiled a Profit & Loss statement for a hypothetical company.",
      "Created detailed financial reports including balance sheet and cash flow statements.",
      "Applied accounting principles to analyze financial health and project future trends.",
      "Prepared a summary report explaining key findings and recommendations."
    ],
    // media: <GitjobsImg />,
    // live: "https://go-gitjobs.netlify.app",
    // repo: "https://github.com/gregogun/github-jobs-api",
    id: 2,
  },
];

export default projects;



