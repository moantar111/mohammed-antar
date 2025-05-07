document.addEventListener('DOMContentLoaded', function() {

    const increaseFont = document.getElementById('increaseFont');
    const decreaseFont = document.getElementById('decreaseFont');
    
    increaseFont.addEventListener('click', function() {
        changeFontSize(1);
    });
    
    decreaseFont.addEventListener('click', function() {
        changeFontSize(-1);
    });
    
    function changeFontSize(direction) {
        const currentSize = parseFloat(getComputedStyle(document.body).fontSize);
        const newSize = currentSize + (direction * 2);
        document.body.style.fontSize = newSize + 'px';
    }
    

    const toggleContrast = document.getElementById('toggleContrast');
    toggleContrast.addEventListener('click', function() {
        document.body.classList.toggle('high-contrast');
    });
});


if (document.body.classList.contains('high-contrast')) {
    document.body.style.backgroundColor = '#000';
    document.body.style.color = '#fff';
    document.querySelectorAll('a').forEach(a => {
        a.style.color = '#ffff00';
    });
}


        // Accessibility functions
        document.getElementById('increaseFont').addEventListener('click', function() {
            changeFontSize(1);
        });
        
        document.getElementById('decreaseFont').addEventListener('click', function() {
            changeFontSize(-1);
        });
        
        document.getElementById('toggleContrast').addEventListener('click', function() {
            document.body.classList.toggle('high-contrast');
        });
        
        function changeFontSize(direction) {
            const currentSize = parseFloat(getComputedStyle(document.body).fontSize);
            document.body.style.fontSize = (currentSize + direction * 2) + 'px';
        }
        
        // Category filter
        document.querySelectorAll('.btn-outline-primary').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.btn-outline-primary').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
            });
        });

        // Accessibility functions
        document.getElementById('increaseFont').addEventListener('click', function() {
            changeFontSize(1);
        });
        
        document.getElementById('decreaseFont').addEventListener('click', function() {
            changeFontSize(-1);
        });
        
        document.getElementById('toggleContrast').addEventListener('click', function() {
            document.body.classList.toggle('high-contrast');
        });
        
        function changeFontSize(direction) {
            const currentSize = parseFloat(getComputedStyle(document.body).fontSize);
            document.body.style.fontSize = (currentSize + direction * 2) + 'px';
        }
        
        // Form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('شكرًا لك! تم استلام رسالتك وسأرد عليك في أقرب وقت ممكن.');
            this.reset();
        });

// أدوات الوصول
document.addEventListener('DOMContentLoaded', function() {
    // تكبير وتصغير الخط
    const increaseFont = document.getElementById('increaseFont');
    const decreaseFont = document.getElementById('decreaseFont');
    
    increaseFont.addEventListener('click', function() {
        changeFontSize(1);
    });
    
    decreaseFont.addEventListener('click', function() {
        changeFontSize(-1);
    });
    
    function changeFontSize(direction) {
        const currentSize = parseFloat(getComputedStyle(document.body).fontSize);
        const newSize = currentSize + (direction * 2);
        document.body.style.fontSize = newSize + 'px';
    }
    
    // تبديل التباين العالي
    const toggleContrast = document.getElementById('toggleContrast');
    toggleContrast.addEventListener('click', function() {
        document.body.classList.toggle('high-contrast');
    });
});

// وضع التباين العالي
if (document.body.classList.contains('high-contrast')) {
    document.body.style.backgroundColor = '#000';
    document.body.style.color = '#fff';
    document.querySelectorAll('a').forEach(a => {
        a.style.color = '#ffff00';
    });
}
