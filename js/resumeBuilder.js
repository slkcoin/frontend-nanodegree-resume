/* This file contains 4 main JSON objects: bio, work, projects and edcuation.
   Each object contains data that is used to populate the resume. All pictures
   used in this project are my own property */

var DATA = '%data%'; //constant used to populate replace function

//bio object: contains information about myself.
var bio = {
  "name": "Joel Graham",
  "role": "Software Developer",
  "contacts":{
    "mobile": "541-261-2394",
    "email": "xcoin@me.com",
    "github": "slkcoin",
    "location": "Alameda, California"},
  "welcomeMessage": "Front-End Nanodegree - Interactive Resume",
  "skills": ["HTML","CSS", "JavaScript", "jQuery"],
  "biopic": "images/pic1.jpg",


  /* Below is the bio object (encapsulated) display function. It uses local variables to take
     the data from the JSON object and replace it into the template found in helper.js
     After the data as been formatted, it modifies the DOM using the jQuery
     append and prepend functions. */

  "display": function(){
    var formattedRole = HTMLheaderRole.replace(DATA, bio.role);
    var formattedName = HTMLheaderName.replace(DATA, bio.name);
    var formattedPic = HTMLbioPic.replace(DATA, bio.biopic);
    var formattedMessage = HTMLwelcomeMsg.replace(DATA, bio.welcomeMessage);
    var formattedPhone = HTMLmobile.replace(DATA, bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace(DATA, bio.contacts.email);
    var formattedGithub = HTMLgithub.replace(DATA, bio.contacts.github);
    var formattedLocation = HTMLlocation.replace(DATA, bio.contacts.location);


    $("header").prepend(formattedPic);
    $("header").append(formattedName + formattedRole + HTMLcontactsStart);
    $("#navbar").append(formattedMessage);

    $("#contacts, #footerContacts").append(formattedPhone + formattedEmail + formattedGithub + formattedLocation);

  /* Since "skills" is an array inside the bio object, I traverse the array using a
     forEach loop, appending each skill in the array */

    $("#skills").append(HTMLskillsStart);
    bio.skills.forEach(function(skill){
      var formattedSkill = HTMLskills.replace(DATA, skill);
      $("#skill").append(formattedSkill);
    });
  }
};

//work object: contains information about my work experience
var work = {
  "jobs": [{
    "employer": "Topia Language Institute",
    "title": "English Language Instructor",
    "location": "Sejong, South Korea",
    "dates": "September 2015 to Current",
    "description": "Teach Writing, Grammar, Speaking and Debate"
  },
  {
    "employer": "E. Bo-Young Talking Club",
    "title": "English Teacher",
    "location": "Cheonan, South Korea",
    "dates": "June 2014 to June 2015",
    "description": "Experience teaching English to a variety of age groups and" +
      " language levels (Elementary School, Middle School, and Adults)." +
      " Prepared detailed daily lesson plans that focused on keeping the" +
      " students engaged and active. Always conducted each class with a fun," +
      " helpful and professional attitude. Experience teaching 1-on-1 private" +
      " lessons to elementary age children as well as adults"
  },
  {
    "employer": "Deschutes Brewery",
    "title": "Prep Cook",
    "location": "Portland, Oregon",
    "dates": "2013",
    "description": "Prepared food based upon determined recipes and practices" +
      " while maintaining accuracy, safety and quality controls. Earned promotion" +
      " opportunities while facilitating a fun and focused atmosphere in a fast" +
      " paced work environment"
  }],

  /* Below is the work object (encapsulated) display function. It uses local variables to take
     the data from the JSON object and replace it into the template found in helper.js
     After the data as been formatted, it modifies the DOM using the jQuery
     append and prepend functions. */

  "display": function(){
    work.jobs.forEach(function(job){
      $("#workExperience").append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace(DATA, job.employer);
      var formattedTitle = HTMLworkTitle.replace(DATA, job.title);
      var formattedLocation = HTMLworkLocation.replace(DATA, job.location);
      var formattedDates = HTMLworkDates.replace(DATA, job.dates);
      var formattedDescription = HTMLworkDescription.replace(DATA, job.description);

      $(".work-entry:last").append(formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription);
    });
  }
};

//projects object: contains information about the projects I've work on so far
var projects = {
  "projects": [
    {
      "title": "Developer Portfolio",
      "dates": "February 2016",
      "description": "Created a portfolio site using Bootstrap 3",
      "images": ["images/prj1-1.jpg", "images/prj1-2.jpg"]
    },
    {
      "title": "Interactive Resume",
      "dates": "March 2016",
      "description": "Created an interactive resume that uses javascript and" +
        " the jQuery library.",
      "images": ["images/prj2-1.jpg", "images/prj2-2.jpg"]
    }],

/* Below is the projects object (encapsulated) display function. It uses local variables to take
   the data from the JSON object and replace it into the template found in helper.js
   After the data as been formatted, it modifies the DOM using the jQuery
   append and prepend functions. */

  "display": function(){
    projects.projects.forEach(function(project){
      var formattedTitle = HTMLprojectTitle.replace(DATA, project.title);
      var formattedDates = HTMLprojectDates.replace(DATA, project.dates);
      var formattedDescription = HTMLprojectDescription.replace(DATA, project.description);

      $("#projects").append(HTMLprojectStart);
      $(".project-entry:last").append(formattedTitle + formattedDates + formattedDescription);

    /* Since "images" is an array inside each project object, I traverse the array using a
        forEach loop, appending each image in the array */
      project.images.forEach(function(img){
        var formattedPic = HTMLprojectImage.replace(DATA, img);
        $(".project-entry:last").append(formattedPic);
      });
    });
  }
};

// education object: contains information about schools I've attended and courses taken online
var education = {
  "schools": [{
    "name": "Portland State University",
    "location": "Portland, Oregon",
    "degree": "Post-Bac",
    "majors":["Post-Bac: Computer Science"],
    "dates": "2011 - 2012",
    "url": "http://www.pdx.edu"
  },
  {
    "name": "Oregon State University",
    "location": "Corvallis, Oregon",
    "degree": "Bachelors of Science",
    "majors":["Finance"],
    "dates": "December 2009",
    "url": "http://www.oregonstate.edu"
  }],
  "onlineCourse": [{
    "title": "JavaScript Basics",
    "school": "Udacity",
    "date": "March 2016",
    "url": "https://www.udacity.com/course/ud804"
  }],

/* Below is the educations object (encapsulated) display function. It uses local variables to take
   the data from the JSON object and replace it into the template found in helper.js
   After the data as been formatted, it modifies the DOM using the jQuery
   append and prepend functions. */

  "display": function(){
    education.schools.forEach(function(school){
      $("#education").append(HTMLschoolStart);
      var formattedName = HTMLschoolName.replace(DATA, school.name);
      formattedName = formattedName.replace('"#"', school.url);

      var formattedLocation = HTMLschoolLocation.replace(DATA, school.location);
      var formattedDegree = HTMLschoolDegree.replace(DATA, school.degree);
      var formattedMajor = HTMLschoolMajor.replace(DATA, school.majors);
      var formattedDates = HTMLschoolDates.replace(DATA, school.dates);

      $(".education-entry:last").append(formattedName + formattedDegree + formattedLocation + formattedDates + formattedMajor);
    });

/* Since the education object contains two separate objects (schools and onlineCourse),
   after we loop through each school object, we have to do the same process for each
   online course taken as well. In addition to formatting the name, I updated the
   a href information found in helper.js and populated it with the correct url. */

    $("#education").append(HTMLonlineClasses);
    education.onlineCourse.forEach(function(course){
      $("#education").append(HTMLschoolStart);
      var formattedTitle = HTMLonlineTitle.replace(DATA, course.title);
      formattedTitle = formattedTitle.replace('"#"', course.url);

      var formattedSchool = HTMLonlineSchool.replace(DATA, course.school);
      var formattedDates = HTMLonlineDates.replace(DATA, course.dates);

      var formattedUrl = HTMLonlineURL.replace(DATA, course.url);
      formattedUrl = formattedUrl.replace('"#"', course.url);

      $(".education-entry:last").append(formattedTitle + formattedSchool + formattedDates + formattedUrl);
    });
  }
};

//each function is called to populate the resume data
bio.display();
work.display();
projects.display();
education.display();

/* Below adds the google map to the resume. The map is managed by helper.js, provided by
Udacity for this project. Some modifications were made to include click locations via console.log
and small infoWindows for each location when you click on a pin */

$("#mapDiv").append(googleMap);
