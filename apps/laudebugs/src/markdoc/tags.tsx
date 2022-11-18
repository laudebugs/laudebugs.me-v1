import Aside from '../components/Aside/Aside'
import Note from '../components/Note/note'

export const tags = {
  aside: {
    render: Aside,
    attributes: {
      href: {
        type: String
      }
    }
  },
  note: {
    render: Note,
    attributes: {
      href: {
        type: String
      }
    }
  }
}
