import { useRouter } from "next/router"

function JournalEntry() {
  const router = useRouter()
  const { slug } = router.query
  return (
    <div>
      <h1>Journal Entry {slug}</h1>
    </div>
  )
}

export default JournalEntry
