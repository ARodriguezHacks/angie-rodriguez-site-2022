import { parseISO, format } from 'date-fns'
// import PropTypes from 'prop-types';

export default function BlogDate({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={ dateString }>{ format(date, 'LLLL d, yyyy') }</time>;
}

// BlogDate.PropTypes = {
//   dateString: PropTypes.string
// }