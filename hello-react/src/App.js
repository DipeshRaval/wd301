import TextCard from "./TextCard";
function App() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="mt-2 text-3xl font-bold">Samrter Tasks</h1>
      <p className="text-xl mt-3 mb-2">
        <span className="font-bold">Project : </span> Graduation Final Year
        Projects(Revamp Collage Website)
      </p>
      <div className="flex justify-between h-96 mt-5">
        <div className="w-6/12 mr-4 p-3 border-2 border-black rounded-2xl	">
          <h2 className="mb-2 text-center text-2xl font-semibold">Panding</h2>
          <div>
            <TextCard
              type="panding"
              title="Build a website with satic content"
              dueDate="10th April"
              assigneeName="Rohit S"
            />
            <TextCard
              type="panding"
              title="Add a blog"
              dueDate="22nd March"
              assigneeName="Rohit M"
            />
            <div className="border border-gray-200 p-1">
              <p className="text-xl p-1 bg-gray-200">
                <i class="fa-regular fa-plus px-1"></i> New Task
              </p>
            </div>
          </div>
        </div>
        <div className="w-6/12 ml-6 border-2 border-black rounded-2xl p-3">
          <h1 className="mb-2 text-center text-2xl font-semibold">Done</h1>
          <div>
            <TextCard
              completedAtDate="10th April"
              assigneeName="Rohit M"
              title="Design the mockup"
            />
            <TextCard
              completedAtDate="20th April"
              assigneeName="Ajay S"
              title="Get a approval from principal"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
