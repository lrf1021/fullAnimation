function move(obj, attr, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        // 为了能够有透明度属性
        if (attr == 'opacity') {
            var cur = parseFloat(getStyle(obj, attr)) * 100;
        } else {
            var cur = parseInt(getStyle(obj, attr));
        }
        let speed = (target - cur) / 10;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        if (cur == target) {
            clearInterval(obj.timer);
            callback && callback();
        } else {
            if (attr == 'opacity') {
                obj.style.opacity = (cur + speed) / 100;
            } else {
                obj.style[attr] = cur + speed + 'px';
            }
        }
    }, 30)
}

function getStyle(obj, attr) {
    return getComputedStyle(obj, null)[attr];
}