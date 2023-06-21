import React, { useReducer, useEffect } from 'react';
import { API_ENDPOINT } from '../../config/constants';

interface Project {
  id: number;
  name: string;
}

interface State {
  projects: Project[];
  isLoading: boolean;
}

interface Action {
  type: string;
  payload?: any;
}

const reducer = (state: State, action: Action): State => {
  // >>> Dialogue one: In switch statement, we will check the action type and return corresponsing state, like we were doing in the if-statements.
  switch (action.type) {
    case "API_CALL_START":
      return {
        ...state,
        isLoading: true
      };
    case "API_CALL_END":
      return {
        ...state,
        isLoading: false,
        projects: action.payload,
      };
    case "API_CALL_ERROR":
      return {
        ...state,
        isLoading: true
      };
    default:
      return state;
  }
}

const ProjectList: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, {
    projects: [],
    isLoading: false
  });
  // const [projects, setProjects] = useState<Project[]>([]);
  // const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    // Fetch the list of projects here
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const token = localStorage.getItem("authToken") ?? "";

    try {
      // setIsLoading(true);
      dispatch({ type: "API_CALL_START" });
      const response = await fetch(`${API_ENDPOINT}/projects`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}` },
      });

      const data = await response.json();
      // setProjects(data);
      // setIsLoading(false);
      dispatch({ type: "API_CALL_END", payload: data });
    } catch (error) {
      console.log('Error fetching projects:', error);
      dispatch({ type: "API_CALL_ERROR" });
      // setIsLoading(false);
    }
  };
  return (
    <div>
    {state.isLoading ? (
      <div>Loading...</div> // You can replace this with a progress bar component
    ) : (
      <div className="grid gap-4 grid-cols-4 mt-5">
        {state.projects.map(project => (
          <div key={project.id} className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">{project.name}</h5>
          </div>
        ))}
      </div>
    )}
  </div>
  );
};
export default ProjectList;
