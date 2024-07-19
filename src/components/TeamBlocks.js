import React from "react";
import { Link } from 'react-router-dom';
import {storyblokEditable } from "@storyblok/react";
import "./styles/Team.css";

const TeamBlocks = ({ blok }) => {
  return (
    <div class="c-team__item" {...storyblokEditable(blok)}>
      <Link to={blok.Link} className="c-team__item__wrap">
        <figure>
          <img class="c-team__item__image" src={blok.Image.filename} alt="team" />
        </figure>
        <div class="c-team__wrap__text-wrap">
          <h3 class="c-team__wrap__text-wrap__title">{blok.Name}</h3>
          <p class="c-team__wrap__text-wrap__text">{blok.Designation}</p>
        </div>
        </Link>
    </div>
  );
};

export default TeamBlocks;
