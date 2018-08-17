import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Link from 'next/link';
import A from 'commons/A';
import Column from 'components/Grid/Column';
import { Figure, TextSection } from './styles';

const ArticleCard = ({ article, first }) => {
  const {
    published_date, /* eslint-disable-line camelcase */
    byline,
    title,
    abstract,
    media,
    url,
  } = article;
  const imgUrl = media[0]['media-metadata'][2].url;
  const renderArticle = (
    <Figure first={first}>
      <Link href={{ pathname: '/detail', query: { url } }}>
        <A>
          <picture>
            <source media="(min-width: 1000px)" srcSet={imgUrl} />
            <img src={imgUrl} alt="Flowers" />
          </picture>
          <TextSection first={first}>
            <div>
              <span>{moment(published_date).fromNow()}</span>
              <span>{byline}</span>
            </div>
            <h3>{title}</h3>
            <figcaption>{abstract}</figcaption>
          </TextSection>
        </A>
      </Link>
    </Figure>
  );
  if (first) {
    return (
      <Column
        noPadding
        marginBottom="25px"
      >
        {renderArticle}
      </Column>
    );
  }
  return (
    <Column
      md={6}
      lg={4}
      xl={4}
      noPadding
      marginBottom="25px"
    >
      {renderArticle}
    </Column>
  );
};

ArticleCard.propTypes = {
  article: PropTypes.shape({
    published_date: PropTypes.string.isRequired,
    byline: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    abstract: PropTypes.string.isRequired,
    media: PropTypes.arrayOf(Object).isRequired,
  }).isRequired,
  first: PropTypes.bool,
};

ArticleCard.defaultProps = {
  first: false,
};

export default ArticleCard;
