/** @jsxImportSource theme-ui */

import Tags from './tags'
export default function Stats({ startDate, endDate, count, tags }) {
  return (
    <div>
      <h5>{`= ${count}`}</h5>
      <p sx={{ marginBottom: 0 }}>{`${startDate} - ${endDate}`}</p>
      <Tags tags={tags}></Tags>
    </div>
  )
}
