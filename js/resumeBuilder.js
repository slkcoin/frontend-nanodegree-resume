
var work = {
  "jobs": [
    {
      "employer": "Topia Language Academy",
      "title": "English Language Instructor",
      "location": "Sejong, South Korea",
      "dates": "September 2015 to Current",
      "description": "Teach Writing, Grammar, Speaking and Debate"
    }
  ]
}
work.display = function(){
  for(job in work.jobs){
    if (work.jobs.hasOwnProperty(job)){
      $("#workExperience").append(HTMLworkStart)
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
  }
}();



var projects = {
  "projects": [
    {
      "title": " ",
      "dates": " ",
      "description": " ",
      "images": ["test"]
    }
  ]
}

var bio = {
  "name": "Joel Graham",
  "role": "Software Engineer",
  "welcomeMessage": "Hello Everyone!",
  "contacts":{
    "phone": "541-261-2394",
    "email": "xcoin@me.com",
    "github": "slkcoin",
    "location": "Alameda, California" },
    "skills": ["HTML","CSS", "JavaScript"]
  }

bio.display = function(){
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);

  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedName);

  var formattedPic = HTMLbioPic.replace("%data%", "images/fry.jpg")
  $("#header").append(formattedPic);

  var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedMessage);

  var formattedPhone = HTMLmobile.replace("%data%", bio.contacts.phone);
  $("#topContacts").append(formattedPhone);

  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  $("#topContacts").append(formattedEmail);

  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  $("#topContacts").append(formattedGithub);

  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts").append(formattedLocation);
}();


$("#header").append(HTMLskillsStart);
for (var i = 0; bio.skills.length > i; i++){
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
  $("#skills").append(formattedSkill);
}
var education = {
  "schools": {
    "name": "Oregon State University",
    "location": "Corvallis, Oregon",
    "degree": "Bachelors of Science",
    "majors":["Finance"],
    "dates": " ",
    "url": "www.oregonstate.edu",
    "onlineCourse": [
      {
        "title": " ",
        "school": " ",
        "dates": " ",
        "url": " "
      }
    ]
  }
}



/*$("#main").append(internationalizeButton);

function inName(){
  var intName = bio.name.trim().split(" ");

  intName[0] = intName[0].slice(0,1).toUpperCase() + intName[0].slice(1).toLowerCase();
  intName[1] = intName[1].toUpperCase();

  return intName[0] + " " + intName[1];
}*/
