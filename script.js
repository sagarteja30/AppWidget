document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.querySelector("#pump-table tbody");
    const formContainer = document.querySelector("#form-container");
    const showFormButton = document.querySelector("#show-form");
    const savePumpButton = document.querySelector("#save-pump");

    // Fetch pumps from server and render table
    function fetchPumps() {
        fetch("/api/pumps")
            .then((res) => res.json())
            .then((data) => {
                tableBody.innerHTML = "";
                data.forEach((pump) => {
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td data-label="Name">${pump.name}</td>
                        <td data-label="Type">${pump.type}</td>
                        <td data-label="State">${pump.state}</td>
                        <td data-label="Flow" style="background-color: ${getFlowColor(pump.flow)};">${pump.flow}</td>
                        <td data-label="Weight">${pump.weight}</td>
                        <td data-label="Actions">
                            <button class="edit-btn" data-id="${pump.id}">Edit</button>
                        </td>
                    `;
                    tableBody.appendChild(row);
                });

                // Attach event listeners to the Edit buttons
                document.querySelectorAll(".edit-btn").forEach((button) =>
                    button.addEventListener("click", handleEdit)
                );
            });
    }

    // Get Flow color
    function getFlowColor(flow) {
        switch (flow.toLowerCase()) {
            case "low":
                return "#ffb266"; // Green for LOW
            case "normal":
                return "#ffff66"; // Orange for NORMAL
            case "high":
                return "#99ff33"; // Red for HIGH
            default:
                return "#FFFFFF"; // Default White
        }
    }

    // Edit Button Handler
    function handleEdit(event) {
        const pumpId = event.target.getAttribute("data-id");

        // Fetch pump details
        fetch(`/api/pumps`)
            .then((res) => res.json())
            .then((data) => {
                const pump = data.find((p) => p.id === pumpId);
                if (pump) {
                    // Populate form fields with pump details
                    document.querySelector("#pump-id").value = pump.id;
                    document.querySelector("#pump-name").value = pump.name;
                    document.querySelector("#pump-type").value = pump.type;
                    document.querySelector("#pump-state").value = pump.state;
                    document.querySelector("#pump-flow").value = pump.flow;
                    document.querySelector("#pump-weight").value = pump.weight;

                    // Show the form
                    formContainer.classList.remove("hidden");
                }
            });
    }

    // Show form
    showFormButton.addEventListener("click", () => {
        formContainer.classList.remove("hidden");
    });

    // Save pump (new or edited)
    savePumpButton.addEventListener("click", () => {
        const pump = {
            id: document.querySelector("#pump-id").value || `Pump${Date.now()}`,
            name: document.querySelector("#pump-name").value,
            type: document.querySelector("#pump-type").value,
            state: document.querySelector("#pump-state").value,
            flow: document.querySelector("#pump-flow").value,
            weight: document.querySelector("#pump-weight").value,
        };

        fetch("/api/pumps", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(pump),
        }).then(() => {
            formContainer.classList.add("hidden");
            fetchPumps(); // Refresh table
        });
    });

    fetchPumps();
});
