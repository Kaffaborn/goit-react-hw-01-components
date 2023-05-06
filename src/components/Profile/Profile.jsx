import PropTypes from 'prop-types';
import { ProfileContainer, Description, Img, Name, Tag, Location, StatisticsUl, StatisticsItem, Label, Quantity } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, followers, views, likes }) => {
    return (<ProfileContainer>
                <Description>
    <Img
      src={ avatar }
      alt="User avatar"
    />
    <Name>{ username }</Name>
    <Tag>@{ tag }</Tag>
    <Location>{ location }</Location>
  </Description>

  <StatisticsUl>
    <StatisticsItem>
      <Label>Followers</Label>
      <Quantity>{ followers }</Quantity>
    </StatisticsItem>
    <StatisticsItem>
      <Label>Views</Label>
      <Quantity>{ views }</Quantity>
    </StatisticsItem>
    <StatisticsItem>
      <Label>Likes</Label>
      <Quantity>{ likes }</Quantity>
    </StatisticsItem>
  </StatisticsUl>
</ProfileContainer>)
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired
    })
}