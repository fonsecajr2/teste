function App () {

  return(
    <div className="h-screen w-screen flex justify-center items-center bg-yellow-100">
      <div className="flex flex-row">
        <form action="" className="flex flex-col">
          <input type="email" placeholder="example@gmail.com" className="bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 p-2 rounded-md"/>
          <input type="password" placeholder="password"/>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default App;