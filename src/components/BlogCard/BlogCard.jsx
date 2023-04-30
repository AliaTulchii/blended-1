import {Card, CardHeader, CardPoster, CardText, CardTitle, CardFooter, CardBody, Tag, UserBox,Avatar,UserInfo,UserName,Date} from './BlogCard.styled'
import { formatDateToNow } from 'utils/formatDate';
import PropTypes from 'prop-types';


export const BlogCard = ({article}) => {
  return <Card>
  <CardHeader>
    <CardPoster
      src={article.poster}
      alt={article.tag}
    />
  </CardHeader>
  <CardBody>
      <Tag>{article.tag}</Tag>
      <CardTitle>{article.title}</CardTitle>
    <CardText>
      {article.description}
    </CardText>
  </CardBody>
  <CardFooter>
    <UserBox>
      <Avatar src={article.avatar} alt={article.name} />
      <UserInfo>
          <UserName>{article.name }</UserName>
          <Date>{formatDateToNow(article.postedAt)}</Date>
      </UserInfo>
    </UserBox>
  </CardFooter>
</Card>;
};


BlogCard.propTypes = {
  article: PropTypes.shape({
    poster: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    postedAt: PropTypes.string.isRequired,
  }).isRequired,
}