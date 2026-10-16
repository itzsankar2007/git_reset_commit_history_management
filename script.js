const statusMessage = document.getElementById("copy-status");

document.querySelectorAll("[data-command]").forEach((button) => {
  button.addEventListener("click", async () => {
    const command = button.dataset.command.replaceAll("&lt;", "<").replaceAll("&gt;", ">");
    try {
      await navigator.clipboard.writeText(command);
      statusMessage.textContent = `Copied: ${command}`;
    } catch (error) {
      statusMessage.textContent = `Select and copy this command: ${command}`;
    }
  });
});
