const showLoadingSpinner = () => {
  const issueContainer = document.getElementById("issue-container");
  issueContainer.innerHTML = `
    <div class="flex justify-center items-center w-full h-36">
        <span class="loading loading-spinner loading-xl"></span>
    </div>
  `;
};
const loadAllIssues =  () => {
  showLoadingSpinner();
  const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const allIssues = data.data;
      
      displayIssues(allIssues);
    });
};

const loadOpenIssues =  () => {
  showLoadingSpinner();
  const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const allIssues = data.data;
      const filteredIssues = allIssues.filter((issue) => issue.status === "open"); 
      displayIssues(filteredIssues);
    });
};

const loadClosedIssues =  () => {
  showLoadingSpinner();
  const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const allIssues = data.data;
      const filteredIssues = allIssues.filter((issue) => issue.status === "closed"); 
      displayIssues(filteredIssues);
    });
};

const openModal = async(id) => {
  const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;
  const res = await fetch(url);
  const details = await res.json();
  displayWordsIssues(details.data);
};

const displayWordsIssues = (details) => {
    const detailsContainer = document.getElementById("my_modal_1");

    let priorityBg = "bg-gray-100";
    let priorityText = "text-gray-400";
    let status = "";

    if(details.status === "open"){
            status = `<span class="bg-green-500 text-white px-2 py-0.5 rounded-full">Opened</span>`;
        } else if(details.status === "closed"){
            status = `<span class="bg-violet-500 text-violet-950 px-2 py-0.5 rounded-full">Closed</span>`;
        }

    if(details.priority === "high"){
        priorityBg = "bg-red-300";
        priorityText = "text-red-500";
    } else if(details.priority === "medium"){
        priorityBg = "bg-red-100";
        priorityText = "text-yellow-400"; 
    } else if(details.priority === "low"){
        priorityBg = "bg-gray-100";
        priorityText = "text-gray-400";
    }

    
    let badge = "";

    if(details.labels && details.labels.includes("bug") && details.labels.includes("help wanted")){
        badge = `<div class="rounded-xl bg-red-300 px-3 h-6 text-center text-red-500">
              <p><i class="fa-solid fa-bug"></i> ${details.labels[0]}</p>
                 </div>
           <div class="rounded-xl bg-yellow-100 px-3 h-7 text-center text-yellow-400">
              <p><i class="fa-solid fa-life-ring"></i> ${details.labels[1]}</p>
           </div>`;
    } else if(details.labels && details.labels.includes("enhancement") && details.labels.includes("good first issue")){
        badge = `<div class="rounded-xl bg-green-300 px-3 h-6 text-center text-green-700">
              <p><i class="fa-solid fa-wand-magic-sparkles"></i> ${details.labels[0]}</p>
                 </div>
           <div class="rounded-xl bg-purple-100 px-3 h-7 text-center text-purple-500">
              <p><i class="fa-solid fa-star"></i> ${details.labels[1]}</p>
           </div>`;
    } else if(details.labels && details.labels.includes("documentation") && details.labels.includes("help wanted")){
        badge = `<div class="rounded-xl bg-slate-200 px-3 h-6 text-center text-slate-500">
              <p><i class="fa-regular fa-file-lines"></i> ${details.labels[0]}</p>
                 </div>
           <div class="rounded-xl bg-yellow-100 px-3 h-7 text-center text-yellow-400">
              <p><i class="fa-solid fa-life-ring"></i> ${details.labels[1]}</p>
           </div>`;
    } else if(details.labels && details.labels.includes("documentation") && details.labels.includes("good first issue")){
        badge = `<div class="rounded-xl bg-slate-200 px-3 h-6 text-center text-slate-500">
              <p><i class="fa-regular fa-file-lines"></i> ${details.labels[0]}</p>
                 </div>
           <div class="rounded-xl bg-purple-100 px-3 h-7 text-center text-purple-500">
              <p><i class="fa-solid fa-star"></i> ${details.labels[1]}</p>
           </div>`;
    } else if(details.labels && details.labels.includes("documentation") && details.labels.includes("enhancement")){
        badge = `<div class="rounded-xl bg-slate-200 px-3 h-6 text-center text-slate-500">
              <p><i class="fa-regular fa-file-lines"></i> ${details.labels[0]}</p>
                 </div>
           <div class="rounded-xl bg-green-300 px-3 h-6 text-center text-green-700">
              <p><i class="fa-solid fa-wand-magic-sparkles"></i> ${details.labels[1]}</p>
                 </div>`;
    } else if(details.labels && details.labels.includes("bug") && details.labels.includes("good first issue")){
        badge = `<div class="rounded-xl bg-red-300 px-3 h-6 text-center text-red-500">
              <p><i class="fa-solid fa-bug"></i> ${details.labels[0]}</p>
                 </div>
           <div class="rounded-xl bg-purple-100 px-3 h-7 text-center text-purple-500">
              <p><i class="fa-solid fa-star"></i> ${details.labels[1]}</p>
           </div>`;
    } else if(details.labels && details.labels.includes("enhancement") && details.labels.includes("help wanted")){
        badge = `<div class="rounded-xl bg-green-300 px-3 h-6 text-center text-green-700">
              <p><i class="fa-solid fa-wand-magic-sparkles"></i> ${details.labels[0]}</p>
                 </div>
           <div class="rounded-xl bg-yellow-100 px-3 h-7 text-center text-yellow-400">
              <p><i class="fa-solid fa-life-ring"></i> ${details.labels[1]}</p>
           </div>`;
    } else if(details.labels && details.labels.includes("documentation")){
        badge = `<div class="rounded-xl bg-slate-200 px-3 h-6 text-center text-slate-500">
              <p><i class="fa-regular fa-file-lines"></i> ${details.labels[0]}</p>
                 </div>`;
    } else if(details.labels && details.labels.includes("enhancement")){
        badge = `<div class="rounded-xl bg-green-300 px-3 h-6 text-center text-green-700">
              <p><i class="fa-solid fa-wand-magic-sparkles"></i> ${details.labels[0]}</p>
                 </div>`;
    } else if(details.labels && details.labels.includes("bug")){
        badge = `<div class="rounded-xl bg-red-300 px-3 h-6 text-center text-red-500">
              <p><i class="fa-solid fa-bug"></i> ${details.labels[0]}</p>
                 </div>`;
    }

    
    detailsContainer.innerHTML = `
    <div class="modal-box">
        <div class="m-5 space-y-3">
            <p class="font-bold text-xl">${details.title}</p>
            
            <div class="flex gap-3 text-sm text-gray-500 items-center">
                <div>${status}</div>
                <div>Opened by ${details.author}</div>
                <div>${details.createdAt}</div>
            </div>
            
            <div class="flex gap-3">
                ${badge} </div>
            
            <p class="text-gray-600">${details.description}</p>
            
            <div class="bg-gray-200 p-5 flex justify-between rounded-xl">
                <div>
                    <p class="text-gray-500 mb-1">Assignee:</p>
                    <p class="font-bold text-gray-800">${details.author}</p>
                </div>
                <div>
                    <p class="text-gray-500 mb-1">Priority:</p>
                    <div class="rounded-xl ${priorityBg} w-20 h-6 text-center ${priorityText} font-bold">
                      <p>${details.priority ? details.priority.toUpperCase() : "LOW"}</p>
                   </div>
                </div>
            </div>
        </div>
        
        <div class="modal-action">
          <form method="dialog">
            <button class="btn">Close</button>
          </form>
        </div>
    </div>`;
    
    document.getElementById('my_modal_1').showModal();
}





const displayIssues = (issues) => {
  const issueContainer = document.getElementById("issue-container");
  issueContainer.innerHTML = "";

  const countSpan = document.getElementById("issue-count");
  
  countSpan.innerText = issues.length;

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

        //habijhabi conditions for badge
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

        // less habijhabi conditions
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
        <div class="card rounded-xl bg-base-300 w-96 h-96 mx-auto m-10" onclick="openModal('${issue.id}')">
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

const searchBox = document.getElementById("search-input");


searchBox.addEventListener("input", function(event) {
    const searchText = event.target.value; 

    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const allIssues = data.data;
      
        const lowerCaseSearch = searchText.toLowerCase();

        const searchedIssues = allIssues.filter((issue) => {
             
             const lowerCaseTitle = issue.title.toLowerCase(); 
             
             return lowerCaseTitle.includes(lowerCaseSearch);
        });

        displayIssues(searchedIssues);
      });
});




const allButton = document.getElementById('all-btn');
const openButton = document.getElementById('open-btn');
const closedButton = document.getElementById('closed-btn'); 
const allButtons = [allButton, openButton, closedButton];

const setActiveButton = (activeBtn) => {
    
    allButtons.forEach(btn => {
        btn.classList.remove('bg-blue-500', 'text-white');
        btn.classList.add('bg-gray-200', 'text-gray-700');
    });

    activeBtn.classList.remove('bg-gray-200', 'text-gray-700');
    activeBtn.classList.add('bg-blue-500', 'text-white');
};

openButton.addEventListener('click', function() {
  setActiveButton(openButton); 
  loadOpenIssues();
});   

closedButton.addEventListener('click', function() {
  setActiveButton(closedButton); 
  loadClosedIssues();
});

allButton.addEventListener('click', function() {
  setActiveButton(allButton); 
  loadAllIssues();
});

setActiveButton(allButton); 
loadAllIssues();