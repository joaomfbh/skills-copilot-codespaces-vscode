function skillMember() {
    var member = document.getElementById("member");
    var skill = document.getElementById("skill");
    var project = document.getElementById("project");
    var memberList = document.getElementById("memberList");
    var skillList = document.getElementById("skillList");
    var projectList = document.getElementById("projectList");
    member.style.color = "#4A90E2";
    skill.style.color = "#000";
    project.style.color = "#000";
    memberList.style.display = "block";
    skillList.style.display = "none";
    projectList.style.display = "none";
}