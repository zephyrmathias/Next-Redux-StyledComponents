import React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import { connect } from 'react-redux';
import App from 'components/App';
import Loading from 'components/Loading';
import Error from 'components/Error';
import NoResult from 'components/NoResult';
import ArticleDetailSection from 'components/ArticleDetailSection';
import { fetchArticle } from 'actions/article';

class DetailPage extends React.Component {
  static async getInitialProps({
    res, store, isServer, query,
  }) {
    const { url } = query;
    if (!url) {
      if (isServer) {
        res.writeHead(302, { Location: '/' });
        res.end();
      } else {
        Router.push('/');
      }
    } else {
      await store.dispatch(fetchArticle(url));
    }
    return { isServer };
  }

  render() {
    const { article: { isFetching, payload, error } } = this.props;
    if (isFetching) {
      return <Loading />;
    }
    if (error) {
      return <Error />;
    }
    const arrayLength = payload.length;
    if (arrayLength === 0) {
      return <NoResult />;
    }
    return (
      <App>
        <ArticleDetailSection article={payload[0]} />
      </App>
    );
  }
}

DetailPage.propTypes = {
  article: PropTypes.shape({
    isFetching: PropTypes.bool.isRequired,
    payload: PropTypes.arrayOf(Object).isRequired,
  }).isRequired,
};

const mapStateToProps = ({ article }) => ({
  article,
});

export default connect(mapStateToProps)(DetailPage);
