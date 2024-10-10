document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("tournaments-btn")
    .addEventListener("click", function () {
      document.getElementById("tournaments-content").style.display = "block";
      document.getElementById("matches-content").style.display = "none";
    });

  document.getElementById("matches-btn").addEventListener("click", function () {
    document.getElementById("matches-content").style.display = "block";
    document.getElementById("tournaments-content").style.display = "none";
  });
});

 document.addEventListener("DOMContentLoaded", () => {
            const matches = document.querySelectorAll(".match");

            matches.forEach(match => {
                const results = match.querySelector(".match-results");
                const additionalResults = match.querySelector(".additional-results");

                results.addEventListener("mouseover", () => {
                    additionalResults.style.display = "block";
                });

                results.addEventListener("mouseout", () => {
                    additionalResults.style.display = "none";
                });
            });
        });