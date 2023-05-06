import PropTypes from 'prop-types';
import { Stats, Title, StatsList, StatsItem, Percentage, Label} from './Statistics.styled'

export const Statistics = ( {title, stats} ) => {
    return (<Stats>
        {title && <Title>{ title }</Title>}

  <StatsList>
    {stats.map(stat => (
          <StatsItem key={ stat.id }>
            <Label>{ stat.label }</Label>
            <Percentage>{ stat.percentage }%</Percentage>
          </StatsItem>
        ))}
  </StatsList>
</Stats>)
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }))
}