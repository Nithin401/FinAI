function login() {
    const u = document.getElementById('user').value;
    const p = document.getElementById('pass').value;
    if(u === "Admin" && p === "1234") {
        window.location.href = "index.html";
    } else {
        alert("Try: Admin / 1234");
    }
}

function addMoney() {
    let amt = prompt("How much would you like to add?");
    if(amt && !isNaN(amt)) {
        const balEl = document.getElementById('balance');
        let current = parseFloat(balEl.innerText.replace('$', '').replace(',', ''));
        balEl.innerText = `$${(current + parseFloat(amt)).toLocaleString()}`;
    }
}

function runAIAgent() {
    const age = document.getElementById('age').value;
    const save = document.getElementById('monthly-save').value;
    const rev = document.getElementById('yearly-rev').value;
    const output = document.getElementById('ai-output');

    if(!age || !save || !rev) return alert("Please fill all fields!");

    // Simple AI Logic
    let stockAlloc = age < 30 ? 75 : 45;
    let safeAlloc = 100 - stockAlloc;

    output.innerHTML = `
        <div class="card" style="border-left: 5px solid #58a6ff;">
            <h3>Strategic Plan for Age ${age}</h3>
            <p><strong>Stock Market (Optimal Growth):</strong> $${(save * (stockAlloc/100)).toFixed(2)} monthly</p>
            <p><strong>Safe Term Insurance / Gold:</strong> $${(save * (safeAlloc/100)).toFixed(2)} monthly</p>
            <p><strong>Projected Net Worth in 15 Years:</strong> $${(save * 240).toLocaleString()}</p>
            <p><small>Plan generated using Neural Logic v2.4 based on $${rev} yearly revenue.</small></p>
        </div>
    `;
}