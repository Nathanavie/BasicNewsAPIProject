export interface Article {
  description: string;
  source: { name: string };
  title: string;
  url: string;
  urlToImage: string;
}
export const apiCall = (searchTerm: string): any =>
  fetch(
    `https://newsapi.org/v2/everything?apiKey=bbc18a2dab5248ee9387499c496211e9&q=+${searchTerm}`
  )
    .then((res) => res.json())
    .then(({ articles }) => {
      let finalArticles: Article[] = [];
      articles.forEach(
        ({
          description,
          source: { name },
          title,
          url,
          urlToImage,
        }: Article) => {
          const article = {
            description,
            source: { name },
            title,
            url,
            urlToImage,
          };
          finalArticles = [...finalArticles, article];
        }
      );
      return finalArticles;
    });

export const openLinkInNewTab = (url: string) => {
  window.open(url, '_blank');
};

export const truncateText = (text: string): string => {
  if (text.length < 139) return text;
  return text.substr(0, 140);
};
