import PropTypes from 'prop-types';
import React from 'react';
import { Text } from 'react-native';
//// o appetize, snack e expo esta com bug com a lib moment
// import moment from 'moment';

import styles from './styles';

const LastConverted = ({ date, base, quote, conversionRate }) => (
  <Text style={styles.smallText}>
    1 {base} = {conversionRate} {quote} as of {date.toDateString()}
  </Text>
);
//// o appetize, snack e expo esta com bug com a lib moment
// const LastConverted = ({ date, base, quote, conversionRate }) => (
//   <Text style={styles.smallText}>
//     1 {base} = {conversionRate} {quote} as of {moment(date).format('MMMM D, YYYY')}
//   </Text>
// );

LastConverted.propTypes = {
  date: PropTypes.object,
  base: PropTypes.string,
  quote: PropTypes.string,
  conversionRate: PropTypes.number,
};

export default LastConverted;