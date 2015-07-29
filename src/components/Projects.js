var React = require('react');

var projects = require('../Projects/projectData');

var Projects = React.createClass({
  loadProjects: function() {
    return projects.map(function(project) {
      return (
        <div className="Project">
        <div className="Header">
          <h2>{project.title}: </h2><p>{project.shortBlurb}</p>
        </div>
          <div className="Content flex-container">
            <div className="MainScreen">
              <img src={project.screenSrc} />
            </div>
            <div className="Description">
              <p>{project.longBlurb}</p>
              <ul className="ResumePoints">
                {project.bulletPoints.map(function(point) {
                  return (
                      <li>{point}</li>
                    )
                })}
              </ul>
            </div>
          </div>
        </div>
        );
    });
  },

  render: function(){
    return (
      <div className="Projects-Holder">
        {this.loadProjects()}
      </div>
    )
  }
});

module.exports = Projects;