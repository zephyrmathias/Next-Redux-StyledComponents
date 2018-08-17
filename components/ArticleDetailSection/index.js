import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import moment from 'moment';
import A from 'commons/A';
import {
  ArticleDetailTitle,
  ArticleDetailHeader,
  HeaderText,
  ArticleDetailContent,
  ReadMore,
} from './styles';

const ArticleDetailSection = ({ article }) => {
  const {
    section,
    subsection,
    byline,
    created_date, /* eslint-disable-line camelcase */
    title,
    abstract,
    multimedia,
    source,
    url,
  } = article;
  let backgroundImageUrl;
  multimedia.forEach((media) => {
    if (media.format === 'mediumThreeByTwo440') {
      backgroundImageUrl = media.url;
    }
  });
  return (
    <div>
      <Helmet>
        <title>{title} - New York Times</title>
      </Helmet>
      <ArticleDetailTitle backgroundImageUrl={backgroundImageUrl}>
        <div>
          <h1>{title}</h1>
        </div>
      </ArticleDetailTitle>
      <ArticleDetailHeader>
        <HeaderText primary>
          <div>{section}</div>
          <div>{subsection}</div>
        </HeaderText>
        <HeaderText secondary>
          <div>
            <div>{moment(created_date).format('ll')}</div>
            <div>{byline}</div>
          </div>
        </HeaderText>
      </ArticleDetailHeader>
      <ArticleDetailContent>
        <p>{abstract}</p>
        <span>
          Source - <i>{source}</i>
        </span>
      </ArticleDetailContent>
      <ReadMore>
        <A href={url}>
          Read Full Article...
        </A>
      </ReadMore>
    </div>
  );
};

ArticleDetailSection.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    abstract: PropTypes.string.isRequired,
  }).isRequired,
};

export default ArticleDetailSection;
