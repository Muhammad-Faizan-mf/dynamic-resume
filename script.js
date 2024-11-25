var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
var downloadPDFButton = document.getElementById('download-pdf');
form.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var cnic = document.getElementById('cnic').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeHtML = "\n    <h2>Resume</h2>\n    <h3>Personal Details</h3>\n    <p><b>Name:</b>".concat(name, "</p>\n    <p><b>Email:</b>").concat(email, "</p>\n    <p><b>Phone:</b>").concat(phone, "</p>\n    <p><b>CNIC:</b>").concat(cnic, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n    ");
    downloadPDFButton.addEventListener('click', function () {
        var _a;
        var printContents = (_a = document.getElementById('resume-display')) === null || _a === void 0 ? void 0 : _a.innerHTML;
        if (!printContents) {
            console.error("Div not found!");
            return;
        }
        var originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
        location.reload();
    });
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHtML;
    }
    else {
        console.error('Fields are missing!');
    }
    // Function to generate a sharable link with a query parameter
    function generateSharableLink() {
        var url = new URL(window.location.href);
        url.searchParams.set("show", "resume-display"); // Add query parameter
        return url.toString();
    }
    // Function to conditionally display the `resume-display` div
    function showResumeDivIfShared() {
        var urlParams = new URLSearchParams(window.location.search);
        var showParam = urlParams.get("show");
        if (showParam === "resume-display") {
            var resumeDiv = document.getElementById("resume-display");
            if (resumeDiv) {
                resumeDiv.style.display = "block"; // Make the div visible
            }
        }
    }
    // Event listener to generate and display the sharable link
    (_a = document.getElementById("shareButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
        var link = generateSharableLink();
        var linkContainer = document.getElementById("linkContainer");
        if (linkContainer) {
            linkContainer.innerHTML = "<a href=\"".concat(link, "\" target=\"_blank\">Sharable Link</a>");
        }
    });
    // Show the `resume-display` div if the link contains the required parameter
    window.addEventListener("DOMContentLoaded", function () {
        showResumeDivIfShared();
    });
});
