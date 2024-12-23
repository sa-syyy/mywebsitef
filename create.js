
document.getElementById('choose-file').addEventListener('click', () => {
    document.getElementById('file-input').click();
});

document.getElementById('upload-area').addEventListener('dragover', (event) => {
    event.preventDefault();
    document.getElementById('upload-area').classList.add('dragging');
});

document.getElementById('upload-area').addEventListener('dragleave', () => {
    document.getElementById('upload-area').classList.remove('dragging');
});

document.getElementById('upload-area').addEventListener('drop', (event) => {
    event.preventDefault();
    document.getElementById('upload-area').classList.remove('dragging');
    const file = event.dataTransfer.files[0];
    alert(`File "${file.name}" uploaded successfully!`);
});

document.getElementById('file-input').addEventListener('change', (event) => {
    const file = event.target.files[0];
    alert(`File "${file.name}" uploaded successfully!`);
});

document.getElementById('save-button').addEventListener('click', () => {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const link = document.getElementById('link').value;
    const board = document.getElementById('board').value;

    if (!title || !description || !board) {
        alert('Please fill out all required fields!');
        return;
    }

    alert('Pin created successfully!');
});
