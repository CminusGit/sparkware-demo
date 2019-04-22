const setImageDefaults = function (img) {
    img.style.position = 'absolute';
    img.style.height = '250px';
    img.style.width = '250px';
    img.style.display = 'none';

    img.style.left = '100px';
}

export class QrcodeRenderer {
    imageRef;

    constructor() {
        this.imageRef = document.createElement('img');
        setImageDefaults(this.imageRef);
        
        document.body.append(this.imageRef);
    }

    render(data, mouseEvent) {
        this.imageRef.style.display = '';
        this.imageRef.src = `data:image/png;base64,${data}`;
        this.imageRef.style.top = (mouseEvent.pageY || mouseEvent.clientY) - 50 + 'px';
    }

    hideImage() {
        this.imageRef.style.display = 'none';
    }
}