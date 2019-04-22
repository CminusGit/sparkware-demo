import { QrcodeRenderer } from "../Qrcode/qrcode.renderer.js";
import { QrcodeService } from "../Qrcode/qrcode.service.js";

export class UrlRenderer {
    customData;
    bindingProperty;
    container;
    qrcodeRenderer;
    qrcodeService;

    constructor() {
        this.container = document.createElement('div');
        this.container.style.width = "150px";
        document.body.appendChild(this.container);

        this.bindingProperty = 'Title';
        this.customData = [];
        this.qrcodeRenderer = new QrcodeRenderer();
        this.qrcodeService = new QrcodeService();
    }

    render(data) {
        const ul = document.createElement('ul');

        for (const item of data) {
            var li = document.createElement('li');

            var customObj = { DomRef: li };

            Object.keys(item).forEach((p) => {
                customObj[p] = item[p];

                if (this.bindingProperty === p) {
                    li.innerHTML = item[p];
                }
            });

            this.customData.push(customObj);

            ul.appendChild(li);
        }

        this.container.appendChild(ul);
    }
    bindMouseEvents() {
        var qrcodeRenderer = this.qrcodeRenderer;
        var qrcodeService = this.qrcodeService;
        
        for (const item of this.customData) {
            (function () {
                var li = item.DomRef;
                var url = item.Url;

                li.addEventListener("mouseover", (e) => {
                    li.style.backgroundColor = 'blue';
                    qrcodeService.getQrcode(url)
                        .then(data => qrcodeRenderer.render(data, e))
                        .catch(reason => console.log(reason.message));
                }, false);

                li.addEventListener("mouseout", () => {
                    li.style.backgroundColor = '';
                    qrcodeRenderer.hideImage();
                }, false);
            }());
        }
    }
}