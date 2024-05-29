import React from 'react';
import './Social.scss';
import { GithubUrl, LinkedInUrl, UpworkUrl } from "../../constants/constants";
import {
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import {
  TbBrandUpwork,
} from "react-icons/tb";

const Social = () => {
  return (
    <div className="social">
      <a href={GithubUrl} target="_blank" rel="noopener noreferrer">
        <AiFillGithub size="1.25em" />
      </a>
      <a href={LinkedInUrl} target="_blank" rel="noopener noreferrer">
        <AiFillLinkedin size="1.25em" />
      </a>
      <a href={UpworkUrl} target="_blank" rel="noopener noreferrer">
        <TbBrandUpwork size="1.25em" />
      </a>
    </div>
  )
}

export default Social;