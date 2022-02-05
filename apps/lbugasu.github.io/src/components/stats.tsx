/** @jsxImportSource theme-ui */

import Tags from './tags'
export default function Stats({ startDate, endDate, count, tags, toggleTag, selectedTags }) {
  return (
    <div>
      <h5>{`= ${count}`}</h5>
      <p sx={{ marginBottom: 0 }}>{`${startDate} - ${endDate}`}</p>
      <Tags selectedTags={selectedTags} toggleTag={toggleTag} tags={tags} showCount={true} showExpand={true}></Tags>
    </div>
  )
}
