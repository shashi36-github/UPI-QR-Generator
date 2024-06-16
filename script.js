document.addEventListener('DOMContentLoaded', function() {
    var qrForm = document.getElementById('qr-form');
    var qrContainer = document.getElementById('qr-container');

    qrForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        var vpa = document.getElementById('vpa').value.trim();
        var amount = document.getElementById('amount').value.trim();
        
        if (!vpa) {
            alert('Please enter UPI ID (VPA)');
            return;
        }
        
        var qrData = "upi://pay?pa=" + encodeURIComponent(vpa);
        
        if (amount) {
            qrData += "&am=" + encodeURIComponent(amount);
        }
        
        // Clear previous QR code if exists
        qrContainer.innerHTML = '';

        // Generate QR code using QRious library
        var qr = new QRious({
            element: qrContainer,
            value: qrData,
            size: 300
        });

        // Show generated QR code section
        qrContainer.style.display = 'block';
    });
});
