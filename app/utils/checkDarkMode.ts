export function checkDarkMode(): null {
  const mediaMatch = window.matchMedia("(prefers-color-scheme: dark)");

  mediaMatch.addEventListener("change", (event) => {
    if (mediaMatch.matches) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  return null;
}
