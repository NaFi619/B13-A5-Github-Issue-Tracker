const loadAllIssues =  () => {
  const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const allIssues = data.data;
      displayIssues(allIssues);
    });
};

const displayIssues = (issues) => {
  const issueContainer = document.getElementById("issue-container");
  issueContainer.innerHTML = "";

  issues.forEach((issue) => {
    const issueDiv = document.createElement("div");
        
        let priorityBg = "";
        let priorityText = "";
        let status = "";
        let badge = "";

        // conditions for priority
        if(issue.priority === "high"){
            priorityBg = "bg-red-300";
            priorityText = "text-red-500";
        } else if(issue.priority === "medium"){
            priorityBg = "bg-red-100";
            priorityText = "text-yellow-400"; 
        } else if(issue.priority === "low"){
            priorityBg = "bg-gray-100";
            priorityText = "text-gray-400";
        }
        if(issue.status === "open"){
            status = `<img src="assets/Open-Status.png" alt="Open-Status">`;
        } else if(issue.status === "closed"){
            status = `<img src="assets/Closed- Status .png" alt="Close-Status">`;
        }

        // conditions for badge
        if(issue.labels && issue.labels.includes("bug") && issue.labels.includes("help wanted")){
            badge = `<div class="rounded-xl bg-red-300 px-3 h-6 text-center text-red-500">
                  <p><i class="fa-solid fa-bug"></i> ${issue.labels[0]}</p>
                     </div>
               <div class="rounded-xl bg-yellow-100 px-3 h-7 text-center text-yellow-400">
                  <p><i class="fa-solid fa-life-ring"></i> ${issue.labels[1]}</p>
               </div>`;
        } else if(issue.labels && issue.labels.includes("enhancement") && issue.labels.includes("good first issue")){
            badge = `<div class="rounded-xl bg-green-300 px-3 h-6 text-center text-green-700">
                  <p><i class="fa-solid fa-wand-magic-sparkles"></i> ${issue.labels[0]}</p>
                     </div>
               <div class="rounded-xl bg-purple-100 px-3 h-7 text-center text-purple-500">
                  <p><i class="fa-solid fa-star"></i> ${issue.labels[1]}</p>
               </div>`;
        } else if(issue.labels && issue.labels.includes("documentation") && issue.labels.includes("help wanted")){
            badge = `<div class="rounded-xl bg-slate-200 px-3 h-6 text-center text-slate-500">
                  <p><i class="fa-regular fa-file-lines"></i> ${issue.labels[0]}</p>
                     </div>
               <div class="rounded-xl bg-yellow-100 px-3 h-7 text-center text-yellow-400">
                  <p><i class="fa-solid fa-life-ring"></i> ${issue.labels[1]}</p>
               </div>`;
               
        
        } else if(issue.labels && issue.labels.includes("documentation") && issue.labels.includes("good first issue")){
            badge = `<div class="rounded-xl bg-slate-200 px-3 h-6 text-center text-slate-500">
                  <p><i class="fa-regular fa-file-lines"></i> ${issue.labels[0]}</p>
                     </div>
               <div class="rounded-xl bg-purple-100 px-3 h-7 text-center text-purple-500">
                  <p><i class="fa-solid fa-star"></i> ${issue.labels[1]}</p>
               </div>`;
   
        
        } 
        else if(issue.labels && issue.labels.includes("documentation") && issue.labels.includes("enhancement")){
            badge = `<div class="rounded-xl bg-slate-200 px-3 h-6 text-center text-slate-500">
                  <p><i class="fa-regular fa-file-lines"></i> ${issue.labels[0]}</p>
                     </div>
               <div class="rounded-xl bg-green-300 px-3 h-6 text-center text-green-700">
                  <p><i class="fa-solid fa-wand-magic-sparkles"></i> ${issue.labels[1]}</p>
                     </div>`;
   
        
        } 
         else if(issue.labels && issue.labels.includes("bug") && issue.labels.includes("good first issue")){
            badge = `<div class="rounded-xl bg-red-300 px-3 h-6 text-center text-red-500">
                  <p><i class="fa-solid fa-bug"></i> ${issue.labels[0]}</p>
                     </div>
               <div class="rounded-xl bg-purple-100 px-3 h-7 text-center text-purple-500">
                  <p><i class="fa-solid fa-star"></i> ${issue.labels[1]}</p>
               </div>`;
   
        
        }
        else if(issue.labels && issue.labels.includes("enhancement") && issue.labels.includes("help wanted")){
            badge = `<div class="rounded-xl bg-green-300 px-3 h-6 text-center text-green-700">
                  <p><i class="fa-solid fa-wand-magic-sparkles"></i> ${issue.labels[0]}</p>
                     </div>
               <div class="rounded-xl bg-yellow-100 px-3 h-7 text-center text-yellow-400">
                  <p><i class="fa-solid fa-life-ring"></i> ${issue.labels[1]}</p>
               </div>`;
   
        
        }  

        else if(issue.labels && issue.labels.includes("documentation")){
            badge = `<div class="rounded-xl bg-slate-200 px-3 h-6 text-center text-slate-500">
                  <p><i class="fa-regular fa-file-lines"></i> ${issue.labels[0]}</p>
                     </div>`;
        } else if(issue.labels && issue.labels.includes("enhancement")){
            badge = `<div class="rounded-xl bg-green-300 px-3 h-6 text-center text-green-700">
                  <p><i class="fa-solid fa-wand-magic-sparkles"></i> ${issue.labels[0]}</p>
                     </div>`;
        } else if(issue.labels && issue.labels.includes("bug")){
            badge = `<div class="rounded-xl bg-red-300 px-3 h-6 text-center text-red-500">
                  <p><i class="fa-solid fa-bug"></i> ${issue.labels[0]}</p>
                     </div>`;
        }
        



        
        issueDiv.innerHTML =`
        <div class="card rounded-xl bg-base-300 w-96 h-96 mx-auto m-10">
            <div class="flex justify-between p-4">
               <div>
                  ${status}
               </div>
               <div class="rounded-xl ${priorityBg} w-20 h-6 text-center ${priorityText}">
                  <p>${issue.priority}</p>
               </div>
            </div>

            <div class="p-4">
                <h1 class="text-2xl font-semibold mb-1">${issue.title}</h1> 
                <p class="text-lg font-regular mb-1 text-gray-500 ">${issue.description}</p>
            </div>

            <div class="flex gap-2 p-4">
               ${badge}
            </div>
         
            <hr class="text-gray-400">

            <div>
                <p class="text-gray-500 font-regular pl-4 pt-4">#${issue.id} by ${issue.author}</p>
                <p class="text-gray-500 font-regular pl-4 ">${issue.createdAt}</p>
            </div>
        </div>`;
            
        issueContainer.appendChild(issueDiv);
  });
};

const allButton = document.getElementById('all-btn');

allButton.addEventListener('click', function() {
  
  loadAllIssues();
});


loadAllIssues();