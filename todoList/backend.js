export function deleteInput() {
  document.querySelectorAll('.js-delete-btn').forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
      const btn = e.target.closest('li');
      btn.remove();
    });
  });
};

export function checkIt() {
  document.querySelectorAll('#checkbox').forEach((checkbox) => {
    checkbox.addEventListener('change', (e) => {
      const isChecked = e.target.checked;
      const parentListItem = e.target.closest('li');
      const associatedText = parentListItem.querySelector('.js-your-text');

      if (isChecked) {
        associatedText.style.textDecoration = "line-through";
      } else {
        associatedText.style.textDecoration = null;
      }
    });
  });
}