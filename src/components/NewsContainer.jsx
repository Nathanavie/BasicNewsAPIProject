import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NewsArticle from './NewsArticle';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const NewsContainer = ({ articles }) => (
  <Container>
    {articles.map((article) => (
      <NewsArticle article={article} />
    ))}
  </Container>
);

export default NewsContainer;

NewsContainer.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
