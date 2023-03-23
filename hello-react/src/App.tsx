import React from "react";
import TextCard from "./TextCard";

interface pandingItem {
  type:string,
  title:string,
  dueDate:string,
  assigneeName:string,
}

interface doneItem {
  type:string,
  title:string,
  completedAtDate:string,
  assigneeName:string,
}

function App() {

  const getItem = (type:string,title :string,date :string,assigneeName:string) =>
  {
    if(type==="panding")
    {
      let objPand : pandingItem = {type,title,dueDate:date,assigneeName}
      return objPand;
    }else{
      let objDone : doneItem = {type,title,completedAtDate:date,assigneeName}
      return objDone;
    }
  }

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
              {...getItem("panding","Build a website with satic content","10th April","Rohit S")}
            />
            <TextCard
              {...getItem("panding","Add a blog","22nd March","Rohit M")}
            />
            <div className="border border-gray-200 p-1">
              <p className="text-xl p-1 bg-gray-200">
                <i className="fa-regular fa-plus px-1"></i> New Task
              </p>
            </div>
          </div>
        </div>
        <div className="w-6/12 ml-6 border-2 border-black rounded-2xl p-3">
          <h1 className="mb-2 text-center text-2xl font-semibold">Done</h1>
          <div>
            <TextCard
              {...getItem("done","Design the mockup","10th April","Rohit M")}
            />
            <TextCard
              {...getItem("done","Get a approval from principal","20th April","Ajay S")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
