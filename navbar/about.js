// Get all team member elements
const teamMembers = document.querySelectorAll('.team-member');

// Loop through each team member and add event listeners for hover effect
teamMembers.forEach(member => {
    // Add mouseenter event to rotate the member and add width
    member.addEventListener('mouseenter', () => {
        member.style.transform = 'rotateY(360deg)'; // 3D horizontal flip
        member.style.width = '200px'; // Increase width on hover
        member.style.height = '150px'; // Adjust height as needed
        const name = member.querySelector('h3');
        name.style.transform = 'translateY(0)'; // Name moves back into position
    });

    // Add mouseleave event to reset the rotation and revert width
    member.addEventListener('mouseleave', () => {
        member.style.transform = 'rotateY(0deg)'; // Reset rotation
        member.style.width = '150px'; // Reset width
        member.style.height = '150px'; // Reset height
        const name = member.querySelector('h3');
        name.style.transform = 'translateY(20px)'; // Move the name back out
    });
});