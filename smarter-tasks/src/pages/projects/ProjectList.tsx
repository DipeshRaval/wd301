import React from 'react';
import ProjectListItems from './ProjectListItems';

const ProjectList: React.FC = () => {
  return (
    <div className="grid gap-4 grid-cols-4 mt-5">
      <ProjectListItems />
    </div>
  );
};
export default ProjectList;
