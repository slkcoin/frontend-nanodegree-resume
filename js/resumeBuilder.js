
var bio = {
  "name": "Joel Graham",
  "role": "Software Developer",
  "welcomeMessage": "Front-End Nanodegree - Interactive Resume",
  "biopic": "images/pic1.jpg",
  "contacts":{
    "phone": "541-261-2394",
    "email": "xcoin@me.com",
    "github": "slkcoin",
    "location": "Alameda, California"},
  "skills": ["HTML","CSS", "JavaScript", "jQuery"]
};

bio.display = function(){
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
  var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  var formattedPhone = HTMLmobile.replace("%data%", bio.contacts.phone);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#header").append(formattedPic);
  $("#header").append(formattedMessage);

  $("#topContacts, #footerContacts").append(formattedPhone);
  $("#topContacts, #footerContacts").append(formattedEmail);
  $("#topContacts, #footerContacts").append(formattedGithub);
  $("#topContacts, #footerContacts").append(formattedLocation);

  $("#header").append(HTMLskillsStart);
  bio.skills.forEach(function(skill){
    var formattedSkill = HTMLskills.replace("%data%", skill);
    $("#skills").append(formattedSkill);
  });

}();

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
    "description": "Experience teaching English to a variety of age groups and language levels (Elementary School, Middle School, and Adults). Prepared detailed daily lesson plans that focused on keeping the students engaged and active. Always conducted each class with a fun, helpful and professional attitude. Experience teaching 1-on-1 private lessons to elementary age children as well as adults"
  },
  {
    "employer": "Deschutes Brewery",
    "title": "Prep Cook",
    "location": "Portland, Oregon",
    "dates": "2013",
    "description": "Prepared food based upon determined recipes and practices while maintaining accuracy, safety and quality controls. Earned promotion opportunities while facilitating a fun and         focused atmosphere in a fast paced work environment"
  }]
};

work.display = function(){
  for(job in work.jobs){
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

    $(".work-entry:last").append(formattedEmployer + formattedTitle);
    $(".work-entry:last").append(formattedLocation);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedDescription);
  }
}();

var projects = {
  "projects": [
    {
      "title": "Developer Portfolio",
      "dates": "February 2016",
      "description": "Created a portfolio site using Bootstrap 3",
      "images": ["../frontend-nanodegree-portfolio/photos/prj1.jpg"]
    },
    {
      "title": "Interactive Resume",
      "dates": "March 2016",
      "description": "Created an interactive resume that uses javascript and the jQuery library. Data from JSONs are used to replace placeholder text before being append to the website on page-load.",
      "images": ["../frontend-nanodegree-portfolio/photos/prj2.jpg"]
    }
  ]
};

projects.display = function(){
  for(prj in projects.projects){
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[prj].title);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[prj].dates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[prj].description);
    var formattedPic = HTMLprojectImage.replace("%data%", projects.projects[prj].images);

    $(".project-entry:last").append(formattedTitle);
    $(".project-entry:last").append(formattedDates);
    $(".project-entry:last").append(formattedDescription);
    $(".project-entry:last").append(formattedPic);
  }
}();

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
    "dates": "March 2016",
    "url": "https://www.udacity.com/course/ud804"
  }]
};

education.display = function(){
  for(school in education.schools){
    $("#education").append(HTMLschoolStart);
    var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
    formattedName = formattedName.replace('"#"', education.schools[school].url);

    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);

    $(".education-entry:last").append(formattedName + formattedDegree);
    $(".education-entry:last").append(formattedLocation);
    $(".education-entry:last").append(formattedDates);
    $(".education-entry:last").append(formattedMajor);
  }

  $("#education").append(HTMLonlineClasses);

  for (onlineCourse in education.onlineCourse){
    $("#education").append(HTMLschoolStart);
    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourse[onlineCourse].title);
    formattedTitle = formattedTitle.replace('"#"', education.onlineCourse[onlineCourse].url);

    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourse[onlineCourse].school);
    var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourse[onlineCourse].dates);

    var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourse[onlineCourse].url);
    formattedUrl = formattedUrl.replace('"#"', education.onlineCourse[onlineCourse].url);

    $(".education-entry:last").append(formattedTitle + formattedSchool);
    $(".education-entry:last").append(formattedDates);
    $(".education-entry:last").append(formattedUrl);
  }
}();

$("#mapDiv").append(googleMap);
