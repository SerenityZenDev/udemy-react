import { useState } from "react";

import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/projectSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined,
    projects: [],
    tasks: []
  });

  function handleAddTask(text){
    setProjectsState(prevState => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      }
    })
    
  }

  function handleDeleteTask(id){
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        tasks: prevState.tasks.filter(
          (tasks) => tasks.id !== id
        ),
      }
    });
  }

  function handleSelectProject(id) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id,
      }
    });
  }

  function handleStartAddProject(){
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    });
  }

  function handleCancelAddProject(){
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      }
    });
  }

  function handleAddProject(projectData){
    setProjectsState(prevState => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: Math.random()
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  function handleDeleteProject(){
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      }
    });
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);

  console.log(selectedProject);

  let content = 
    <SelectedProject 
      project={selectedProject} 
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectsState.tasks}
    />;

  if(projectsState.selectedProjectId === null){
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
  } else if(projectsState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar 
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
