function initGuideChecks() {
  const forms = document.querySelectorAll("[data-guide-check]");

  forms.forEach((form) => {
    const resultPanelSelector = form.getAttribute("data-result-panel");
    const resultPanel = resultPanelSelector ? document.querySelector(resultPanelSelector) : null;
    if (!resultPanel) return;

    const titleNode = resultPanel.querySelector("[data-result-title]");
    const copyNode = resultPanel.querySelector("[data-result-copy]");
    const defaultTitle = titleNode?.textContent || "";
    const defaultCopy = copyNode?.textContent || "";

    const updateSelectedStyles = () => {
      form.querySelectorAll(".choice-card").forEach((card) => {
        const input = card.querySelector("input");
        card.classList.toggle("is-selected", Boolean(input?.checked));
      });
    };

    const updateRadioResult = () => {
      const selected = form.querySelector('input[type="radio"]:checked');
      if (!selected) {
        if (titleNode) titleNode.textContent = defaultTitle;
        if (copyNode) copyNode.textContent = defaultCopy;
        updateSelectedStyles();
        return;
      }

      if (titleNode) titleNode.textContent = selected.dataset.resultTitle || defaultTitle;
      if (copyNode) copyNode.textContent = selected.dataset.resultCopy || defaultCopy;
      updateSelectedStyles();
    };

    const updateCountResult = () => {
      const checkedCount = form.querySelectorAll('input[type="checkbox"]:checked').length;
      const range = [...resultPanel.querySelectorAll("[data-count-min][data-count-max]")].find((item) => {
        const min = Number(item.dataset.countMin);
        const max = Number(item.dataset.countMax);
        return checkedCount >= min && checkedCount <= max;
      });

      if (titleNode) titleNode.textContent = range?.dataset.title || defaultTitle;
      if (copyNode) copyNode.textContent = range?.dataset.copy || defaultCopy;
      resultPanel.dataset.checkedCount = String(checkedCount);
      updateSelectedStyles();
    };

    const updater = form.dataset.guideCheck === "count" ? updateCountResult : updateRadioResult;
    form.addEventListener("change", updater);
    updater();
  });
}

document.addEventListener("DOMContentLoaded", initGuideChecks);
