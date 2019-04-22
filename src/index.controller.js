import { UrlService } from "./Url/url.service.js";
import { UrlRenderer } from "./Url/url.renderer.js";

const urlService = new UrlService();
const urlRenderer = new UrlRenderer();

urlService.getUrls()
    .then(data => { urlRenderer.render(data); urlRenderer.bindMouseEvents(); })
    .catch(reason => console.log(reason.message));
