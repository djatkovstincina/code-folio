import React from "react";
import './Social.scss';
import { GithubUrl, LinkedInUrl, UpworkUrl } from "../../../constants";
import {
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import {
  TbBrandUpwork,
} from "react-icons/tb";

const Social = () => {
  return (
    <div className="social" role="navigation" aria-label="Social media links">
      <a
        href={GithubUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Nemanja Djatkov's GitHub profile (opens in new tab)"
      >
        <AiFillGithub size="1.25em" aria-hidden="true" />
        <span className="sr-only">GitHub</span>
      </a>
      <a
        href={LinkedInUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Nemanja Djatkov's LinkedIn profile (opens in new tab)"
      >
        <AiFillLinkedin size="1.25em" aria-hidden="true" />
        <span className="sr-only">LinkedIn</span>
      </a>
      <a
        href={UpworkUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Nemanja Djatkov's Upwork profile (opens in new tab)"
      >
        <TbBrandUpwork size="1.25em" aria-hidden="true" />
        <span className="sr-only">Upwork</span>
      </a>
    </div>
  )
}

export default React.memo(Social);