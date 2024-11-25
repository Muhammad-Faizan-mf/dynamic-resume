const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;
const downloadPDFButton = document.getElementById('download-pdf') as HTMLButtonElement;

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const cnic = (document.getElementById('cnic') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;

    const resumeHtML = `
    <h2>Resume</h2>
    <h3>Personal Details</h3>
    <p><b>Name:</b>${name}</p>
    <p><b>Email:</b>${email}</p>
    <p><b>Phone:</b>${phone}</p>
    <p><b>CNIC:</b>${cnic}</p>

    <h3>Education</h3>
    <p>${education}</p>

    <h3>Experience</h3>
    <p>${experience}</p>

    <h3>Skills</h3>
    <p>${skills}</p>
    `;

    downloadPDFButton.addEventListener('click', () => {
        const printContents = document.getElementById('resume-display')?.innerHTML;
        if (!printContents) {
            console.error("Div not found!");
            return;
        }

        const originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
        location.reload();
    })

    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHtML;
    }
    else {
        console.error('Fields are missing!');
    }
    // Function to generate a sharable link with a query parameter
function generateSharableLink(): string {
    const url = new URL(window.location.href);
    url.searchParams.set("show", "resume-display"); // Add query parameter
    return url.toString();
}

// Function to conditionally display the `resume-display` div
function showResumeDivIfShared(): void {
    const urlParams = new URLSearchParams(window.location.search);
    const showParam = urlParams.get("show");

    if (showParam === "resume-display") {
        const resumeDiv = document.getElementById("resume-display");
        if (resumeDiv) {
            resumeDiv.style.display = "block"; // Make the div visible
        }
    }
}

// Event listener to generate and display the sharable link
document.getElementById("shareButton")?.addEventListener("click", () => {
    const link = generateSharableLink();
    const linkContainer = document.getElementById("linkContainer");

    if (linkContainer) {
        linkContainer.innerHTML = `<a href="${link}" target="_blank">Sharable Link</a>`;
    }
});

// Show the `resume-display` div if the link contains the required parameter
window.addEventListener("DOMContentLoaded", () => {
    showResumeDivIfShared();
});


})
