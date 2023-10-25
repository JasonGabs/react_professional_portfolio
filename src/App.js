
import './App.css';

function App() {
  return (
    <div className="h-screen max-w-full max-h-full mx-auto bg-blue-100 shadow-lg sm:flex">
      
      <div className=" bg-orange-300 w-screen h-32">
        {/* <h1 className= " content-center text-purple-500 bg-gray-400">
          Jason
        </h1> */}
        <div className=" m-96 py-8 px-8 max-w-sm mx-auto bg-blue-200 rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
          <div className="text-center space-y-2 sm:text-left">
            <div className="space-y-0.5">
              <p className="text-slate-500 font-meduim">
                Look at this project!!
              </p>
            </div>
            <button className="px-4 py-1 bg-blue-300 text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Go to Project</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
