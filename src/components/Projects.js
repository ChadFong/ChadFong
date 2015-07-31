var React = require('react');

var projects = require('../Projects/projectData');

var Projects = React.createClass({
  loadProjects: function() {
    return projects.map(function(project) {
      var displayTitle = project.title + " | ";
      var status;
      if (typeof project.status === "string") {
        status = (<span className="Proj-Link">{project.status}</span>);
      } else {
        status = (
          <span className="Proj-Link">
            <a href={project.status.link}>{project.status.title}</a>
            <span> | </span>
            <a href={project.status.repo}>Repo</a>
          </span>
          );
      }

      return (
        <div className="Project">
        <div className="Header">
          <h2>{displayTitle}</h2>
          <p>{project.role}</p>
          {status}
        </div>
          <div className="Content flex-container">
            <div className="MainScreen">
              <img src={project.screenSrc} />
            </div>
            <div className="Description">
              <p>{project.blurb}</p>
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