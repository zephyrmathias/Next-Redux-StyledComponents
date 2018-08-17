import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import App from 'components/App';
import Header from 'components/Header';
import ArticlesList from 'components/ArticlesList';
import ArticleCard from 'components/ArticleCard';
import Loading from 'components/Loading';
import Error from 'components/Error';
import NoResult from 'components/NoResult';
import MostPopularSection from 'components/MostPopularSection';
import MostPopularHeader from 'components/MostPopularHeader';
import SearchForm from 'components/SearchForm';
import { fetchMostViewedArticles } from 'actions/mostViewedArticles';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articleSection: '',
      sectionPeriod: '1',
    };
    this._onSearchSubmit = this._onSearchSubmit.bind(this);
    this._onSearchSectionChange = this._onSearchSectionChange.bind(this);
    this._onPeriodChange = this._onPeriodChange.bind(this);
  }

  static async getInitialProps({ store, isServer }) {
    const initialSection = {
      articleSection: 'arts',
      sectionPeriod: '1',
    };
    await store.dispatch((fetchMostViewedArticles(initialSection)));
    return { isServer };
  }

  async _onSearchSubmit(event) {
    event.preventDefault();
    await this.props.fetchMostViewedArticles(this.state); /* eslint-disable-line */
  }

  _onSearchSectionChange(event) {
    const articleSection = event.target.value;
    this.setState({ articleSection });
  }

  _onPeriodChange(event) {
    const sectionPeriod = event.target.value;
    this.setState({ sectionPeriod });
  }

  render() {
    const { articleSection, sectionPeriod } = this.state;
    const { popularArticles: { isFetching, payload, error } } = this.props;

    if (error) {
      return <Error />;
    }

    const renderArticleCard = (data) => {
      if (isFetching) {
        return <Loading />;
      }
      const numberOfArticles = data.length;
      if (numberOfArticles === 0) {
        return <NoResult />;
      }
      const firstArticle = data[0];
      const restArticles = data.slice(1);
      const articles = restArticles.map(article => (
        <ArticleCard key={article.id} article={article} />
      ));
      return (
        <ArticlesList>
          <ArticleCard article={firstArticle} first />
          {articles}
        </ArticlesList>
      );
    };

    return (
      <App>
        <Helmet>
          <title>New York Times - Most Popular</title>
        </Helmet>
        <Header />
        <MostPopularSection>
          <MostPopularHeader>
            <h1>Most Popular</h1>
            <SearchForm onSubmit={this._onSearchSubmit}>
              <input
                type="text"
                placeholder="Type your article section..."
                onChange={this._onSearchSectionChange}
                value={articleSection}
                required
              />
              <div>
                <select
                  name="sectionPeriod"
                  onChange={this._onPeriodChange}
                  value={sectionPeriod}
                >
                  <option value="1" default>1 Day</option>
                  <option value="7">7 Days</option>
                  <option value="30">30 Days</option>
                </select>
              </div>
              <input type="submit" />
            </SearchForm>
          </MostPopularHeader>
          {renderArticleCard(payload)}
        </MostPopularSection>
      </App>
    );
  }
}

HomePage.propTypes = {
  popularArticles: PropTypes.shape({
    payload: PropTypes.arrayOf(Object).isRequired,
    isFetching: PropTypes.bool.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ popularArticles }) => ({
  popularArticles,
});

const mapDispatchToProps = dispatch => ({
  fetchMostViewedArticles: state => dispatch(fetchMostViewedArticles(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
