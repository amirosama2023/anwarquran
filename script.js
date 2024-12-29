// تحديد عدد الدوائر المراد إنشاؤها
const numberOfCircles = 10;

// الدالة العشوائية للحصول على قيمة عشوائية بين الحد الأدنى والحد الأعلى
function randomValue(min, max) {
    return Math.random() * (max - min) + min;
}

// الدالة لإنشاء دائرة عشوائية وإضافتها إلى الموقع
function createCircle() {
    const circle = document.createElement('div');
    circle.className = 'circle';
    document.querySelector('.circles-container').appendChild(circle);

    // تحديد موقع الدائرة العشوائي على الجزء العلوي من الصفحة
    const x = randomValue(0, window.innerWidth);
    circle.style.left = `${x}px`;
    circle.style.top = `${window.innerHeight}px`; // تبدأ الدائرة من الجزء السفلي للصفحة

    // تحديد لون عشوائي للدائرة
    const color = `rgb(${randomValue(0, 255)}, ${randomValue(0, 255)}, ${randomValue(0, 255)})`;
    circle.style.backgroundColor = color;

    // تحديد حركة عشوائية للدائرة باتجاه الأعلى بواسطة تغيير خاصيتي الإنتقال (translate)
    const dy = randomValue(1, 3); // تحديد سرعة الانتقال العمودي العشوائي
    setInterval(() => {
        const currentY = parseFloat(circle.style.top); // الحصول على الموقع الحالي للدائرة بالقيمة العددية
        if (currentY + dy < 0) {
            // إعادة الدائرة إلى الجزء السفلي من الصفحة إذا وصلت إلى الأعلى
            circle.style.top = `${window.innerHeight}px`;
        } else {
            circle.style.top = `${currentY - dy}px`;
        }
    }, 1000 / 60); // يتم تحديث موقع الدائرة 60 مرة في الثانية لجعل الحركة سلسة
}

// إنشاء الدوائر المتحركة
for (let i = 0; i < numberOfCircles; i++) {
    createCircle();
}


