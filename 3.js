
const jobs = [
    { title: 'Web Developer', company: 'Tech Co.', location: 'Remote', details: 'Crafting innovative solutions in a remote environment.' },
    { title: 'Data Analyst', company: 'Data Solutions', location: 'New York', details: 'Analyzing data trends and patterns in bustling New York' },
    { title: 'UX/UI Designer', company: 'Creative Designs', location: 'San Francisco', details: 'Shaping user experiences with creative designs in San Francisco' },
    { title: 'Software Engineer', company: 'Innovative Tech', location: 'Boston', details: 'Innovating and coding for the future in the heart of Boston' },
    { title: 'Marketing Specialist', company: 'Digital Marketing Co.', location: 'Los Angeles', details: 'Driving digital presence and engagement in vibrant Los Angeles' },
    { title: 'Financial Analyst', company: 'Finance Solutions', location: 'Chicago', details: 'Navigating financial data intricacies in dynamic Chicago' },
    { title: 'Mobile App Developer', company: 'App Innovators', location: 'Seattle', details: 'Creating cutting-edge apps with App Innovators in Seattle' },
    { title: 'Project Manager', company: 'Management Solutions', location: 'Houston', details: 'Leading and coordinating successful projects in Houston' },
    { title: 'Network Administrator', company: 'Tech Systems', location: 'Denver', details: 'Managing tech systems and networks in scenic Denver' },
    { title: 'HR Coordinator', company: 'Human Resources Inc.', location: 'Miami', details: 'Fostering a positive work environment in sunny Miami' },
];


function displayJobListings() {
    const jobListingsSection = document.getElementById('jobListings');
    jobListingsSection.innerHTML = '<h2>Job Listings</h2>';

    jobs.forEach((job, index) => {
        const jobListing = document.createElement('div');
        jobListing.classList.add('jobListing');
        jobListing.innerHTML = `
            <h3>${job.title}</h3>
            <p>${job.company} - ${job.location}</p>
            <button onclick="toggleDetails(${index})">Details</button>
            <div class="details" id="details${index}">${job.details}</div>
        `;
        jobListingsSection.appendChild(jobListing);
    });
}


function toggleDetails(index) {
    const detailsElement = document.getElementById(`details${index}`);
    detailsElement.classList.toggle('show-details');
}


function searchJobs() {

    const searchTerm = document.querySelector('#searchBar input').value.toLowerCase();
    const filteredJobs = jobs.filter(job => job.title.toLowerCase().includes(searchTerm) || job.company.toLowerCase().includes(searchTerm));
    

    const jobListingsSection = document.getElementById('jobListings');
    jobListingsSection.innerHTML = '<h2>Search Results</h2>';

    if (filteredJobs.length === 0) {
        jobListingsSection.innerHTML += '<p>No jobs found.</p>';
    } else {
        filteredJobs.forEach((job, index) => {
            const jobListing = document.createElement('div');
            jobListing.classList.add('jobListing');
            jobListing.innerHTML = `
                <h3>${job.title}</h3>
                <p>${job.company} - ${job.location}</p>
                <button onclick="toggleDetails(${index})">Details</button>
                <div class="details" id="details${index}">${job.details}</div>
            `;
            jobListingsSection.appendChild(jobListing);
        });
    }
}


function applyForJob(jobTitle) {
    alert(`Application submitted for ${jobTitle}`);
}


displayJobListings();





const footer = document.createElement('footer');
footer.innerHTML = '<p style="text-align: center;">Made by Aditya Jambhale</p>';
document.body.appendChild(footer);


