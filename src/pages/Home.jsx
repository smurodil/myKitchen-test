import { useSelector, useDispatch } from "react-redux"
import { useCollection } from '../hooks/useCollection'
import { RecipeList } from '../components'

function Home() {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.currentUser)
  const {documents: recipe} = useCollection('recipe', ["uid", "==", user.uid])
  return (
    <div> 
      {/* {recipe && <RecipeList recipe={recipe} />} */}
    </div>
  )
}

export default Home