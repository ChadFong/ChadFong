module.exports = [
  {
    title: "Stego",
    role: "Full Stack Engineer",
    status: {
      title: "Demo",
      link: "http://chadfong.github.io/stego/",
      repo: "https://github.com/ChadFong/stego",
    },
    blurb: "Chrome extension that encourages programmers to balance work and exercise",
    screenSrc: "./Assets/ProjectPics/Stego.png",
    bulletPoints: [
      "Implemented Github and Jawbone authentication, connecting Chrome’s client-side login system to custom Node server",
      "Systematically handled data storage and processing, keeping client and server synchronized with APIs",
      "Maintained clean codebase by separating functionality across React components and modularizing server requests"
    ]
  },
  {
    title: "Telefrag",
    role: "Software Engineer",
    status: "In Development",
    blurb: "Local multiplayer game developed in Unity3D and C#",
    screenSrc: "./Assets/ProjectPics/Telefrag.gif",
    bulletPoints: [
      "Modularized codebase by separating concerns and implementing events and factories to keep project extensible",
      "Implemented menu and game-type systems using interfaces and abstract classes to maintain modularity"
    ]
  },
    {
    title: "CONGRE$$",
    role: "Full Stack Engineer & Product Owner",
    status: {
      title: "View",
      link: "http://lobbyinglobby.azurewebsites.net/#/",
      repo: "https://github.com/ChadFong/congress",
    },
    blurb: "Satirical platform for lobbyists to bid on Congressional votes",
    screenSrc: "./Assets/ProjectPics/Congre$$.png",
    bulletPoints: [
      "Built MongoDB and Node/Express backend, allowing user posts to be nested into categories",
      "Used Angular services to keep data synchronized across multiple controllers",
    ]
  },
  {
    title: "Marginalio",
    role: "Full Stack Engineer & Scrum Master",
    status: {
      title: "View",
      link: "http://marginalio.azurewebsites.net/login",
      repo: "https://github.com/ChadFong/Marginalio",
    },
    blurb: "Web-based application that enables paragraph-by-paragraph annotation of articles",
    screenSrc: "./Assets/ProjectPics/Marginalio.png",
    bulletPoints: [
      "Sent server-side AJAX requests to the Readability API for document processing via jQuery",
      "Routed user annotations from Backbone client to Node/Express server, and stored them using MongoDB",
    ]
  },
];
