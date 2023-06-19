import { API_URL } from "../../constants/env"

function Homepage() {
    return (
      <>
        <h1 className="text-3xl font-bold underline">
          This is the homepage. Development branch
          </h1>
        <p>{ API_URL}</p>
      </>
    )
  }
  
  export default Homepage