function showNotification(message) {
  const notification = document.createElement('div');
  notification.id = 'page-notification';
  notification.textContent = message;
  notification.style.position = 'fixed';
  notification.style.top = '20px';
  notification.style.right = '20px';
  notification.style.background = '#e07a5f';
  notification.style.color = '#ffffff';
  notification.style.padding = '10px 20px';
  notification.style.borderRadius = '8px';
  notification.style.zIndex = '1001';
  notification.style.fontWeight = '600';
  document.body.appendChild(notification);
  setTimeout(() => {
    notification.remove();
  }, 3000); 
}

function createOrderModal() {
  if (document.getElementById('order-modal')) return;
  const modal = document.createElement('div');
  modal.id = 'order-modal';
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close">&times;</span>
      <h2>Order Now</h2>
      <form id="order-form">
        <label for="name">Name:</label>
        <input type="text" id="name" required>
        <label for="address">Address:</label>
        <input type="text" id="address" required>
        <label for="phone">Phone Number:</label>
        <input type="tel" id="phone" required>
        <label for="comments">Comments:</label>
        <textarea id="comments"></textarea>
        <button type="submit">Submit Order</button>
      </form>
    </div>
  `;
  document.body.appendChild(modal);
  // Add close event
  modal.querySelector('.close').addEventListener('click', () => {
    modal.style.display = 'none';
  });
  // Add submit event
  modal.querySelector('#order-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const comments = document.getElementById('comments').value;
    console.log('Order submitted:', { name, address, phone, comments });
    showNotification('Thank you for your order! We will contact you soon.');
    modal.style.display = 'none';
  });
 
}

function showOrderModal() {
  createOrderModal();
  document.getElementById('order-modal').style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
  showNotification('Rosewood Bistro landing page loaded.');
  document.querySelectorAll('.btn').forEach((btn) => {
    if (btn.textContent === 'Order Now') {
      btn.addEventListener('click', () => {
        showOrderModal();
      });
    } 
  });
});