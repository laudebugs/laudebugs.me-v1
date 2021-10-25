import Tags from './tags'
export default function Stats({ startDate, endDate, count, tags }) {
  return (
    <div>
      <h5>{`= ${count}`}</h5>
      <p>{`${startDate} - ${endDate}`}</p>
      <Tags tags={tags}></Tags>
    </div>
  )
}
