import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { openLinkInNewTab, truncateText } from '../utils.ts';
import NotFound from '../assets/not-found.jpg';

const Article = styled.div`
  width: 20em;
  height: 25em;
  border: solid 1px black;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 10px #060f75;
  }
`;

const InnerArticle = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  height: 76%;
`;

const Image = styled.img`
  width: 100%;
`;

const NewsSourceContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #060f75;
`;

const NewsSource = styled.p`
  writing-mode: vertical-rl;
  color: #ffffff;
`;

const Title = styled.h3`
  grid-column: 1/-1;
  text-align: center;
  padding: 0 0.2em 0.2em;
  background: #5e6bfb;
  margin: 0;
  height: 5em;
  display: flex;
  align-items: center;
  text-overflow: ellipsis;
`;

const ImageContainer = styled.div`
  height: 10em;
  overflow: hidden;
`;

const DescriptionContainer = styled.section`
  padding: 0.5em;
  height: 8em;
  text-overflow: ellipsis;
`;

const Description = styled.p`
  max-height: 8em;
  text-overflow: ellipsis;
`;

const NewsArticle = ({
  article: {
    description,
    source: { name },
    title,
    url,
    urlToImage,
  },
}) => (
  <Article
    onClick={() => openLinkInNewTab(url)}
    onKeyPress={() => openLinkInNewTab(url)}
    role="button"
    tabIndex="0"
  >
    <Title>{title}</Title>
    <InnerArticle>
      <NewsSourceContainer>
        <NewsSource>{name}</NewsSource>
      </NewsSourceContainer>
      <div>
        <ImageContainer>
          <Image src={!urlToImage ? NotFound : urlToImage} alt={`${title}`} />
        </ImageContainer>
        <DescriptionContainer>
          <Description>{truncateText(description)}</Description>
        </DescriptionContainer>
      </div>
    </InnerArticle>
  </Article>
);

export default NewsArticle;

NewsArticle.propTypes = {
  article: PropTypes.shape({
    description: PropTypes.string.isRequired,
    source: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    urlToImage: PropTypes.string,
  }).isRequired,
};
